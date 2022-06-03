export type TypeSum = (arr: number[]) => number;

export const Sum: TypeSum = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((firstSide, secondSide) => Number(firstSide) + Number(secondSide), 0);
};
