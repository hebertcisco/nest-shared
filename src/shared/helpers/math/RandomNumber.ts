import randts, { Configuration, NumberLength } from 'randts';

export class RandomNumber {
  private numberConfig: Configuration;
  public constructor(min?: number, max?: number) {
    this.numberConfig = new Configuration();
    const minLength = this.numberConfig.setMinLength(min || 4);
    const maxLength = this.numberConfig.setMaxLength(max || NumberLength.getMaxSafeLength());
    min = minLength.getMinLength().getValue();
    max = maxLength.getMaxLength().getValue();
  }
  public generate(): number {
    const randomNumber = new randts.Generator(this.numberConfig);
    return randomNumber.getNumber().getValue();
  }
}
export default RandomNumber;
