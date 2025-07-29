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
