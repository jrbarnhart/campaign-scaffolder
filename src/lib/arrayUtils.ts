/**
 * Returns a single random item from an array.
 * @param array An array of items with type T.
 * @returns A random item from array.
 */
export function getRandomArrayElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

/**
 * Takes an array and returns a new shuffled array containing the same items.
 * @param array An array of items with type T.
 * @returns A shuffled array of items with type T.
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffledArr = [...array];
  let currentIndex = shuffledArr.length;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffledArr[currentIndex], shuffledArr[randomIndex]] = [
      shuffledArr[randomIndex],
      shuffledArr[currentIndex],
    ];
  }

  return shuffledArr;
}

/**
 * Returns an array of random items from an array.
 * Returns up to count items, but will return less if array.length is less than count.
 * @param array An array of items with type T.
 * @param count Desired length of the returned array.
 * @returns An array with length less than or equal to count and with items of type T.
 */
export function getManyFromArray<T>(array: T[], count: number): T[] {
  const shuffledArr = shuffleArray(array);
  const selected = shuffledArr.slice(0, count);
  return selected;
}

/**
 * Gets the next available integer ID from an array of objects that have property id: number.
 * This function trusts that the id values are positive integers.
 * @param array An array of objects with property id: number.
 * @returns The next available integer ID, starting from 1 if the array is empty.
 */
export function getNextId(array: { id: number }[]): number {
  // If the array is empty the first id will be 0
  if (array.length === 0) {
    return 1;
  }

  // Else find the highest current id
  let maxId = -Infinity;
  for (const item of array) {
    if (item.id > maxId) {
      maxId = item.id;
    }
  }

  return maxId + 1;
}
