export class Stock {
  favorite = false;

  constructor(public name: string,
              public code: string,
              public price: number,
              public previousPrice: number,
              public exchange: string) {}

  isPositiveChange(): boolean {
    console.log("price: $"+this.price, "price: $"+this.previousPrice, "is Positive? "+(this.price >= this.previousPrice))
    return this.price >= this.previousPrice;
  }
}
