export function getRandomArrayElement<T>(arr: T[]): T | undefined {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffledArr = [...arr];
  let currentIndex = shuffleArray.length;
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

export function getManyFromArray<T>(arr: T[], count: number): T[] | undefined {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  const shuffledArr = shuffleArray(arr);
  const selected = shuffledArr.slice(0, count);
  return selected;
}

/**
 * Gets the next available int id from an array of data that have the id property.
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
