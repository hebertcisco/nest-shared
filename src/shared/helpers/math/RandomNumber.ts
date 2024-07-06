export class RandomNumber {
  private min: number;
  private max: number;
  public constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }
  public generate(): number {
    return this.min + Math.random() * (this.max - this.min);
  }
}
export default RandomNumber;
