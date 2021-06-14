export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getRandomNumbersArray = () => {
  return Math.random()
    .toString()
    .split("")
    .filter((e) => e !== "0" && e !== ".")
    .map((e) => parseInt(e));
};

export const shuffle = (array: any[]) => {
  const arr = [...array];
  let currentIndex = arr.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
};
