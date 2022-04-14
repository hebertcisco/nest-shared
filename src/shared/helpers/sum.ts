import { TypeSum } from "../../@types/shared/helpers/sum.d";

export const Sum: TypeSum = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce(
    (firstSide, secondSide) => Number(firstSide) + Number(secondSide),
    0
  );
};
