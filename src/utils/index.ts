export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getRandomNumbersArray = () =>
  Math.random()
    .toString()
    .split("")
    .filter((e) => e !== "0" && e !== ".")
    .map((e) => parseInt(e));
