export interface Stock {

  name: string;
  code: string;
  price: number;
  previousPrice: number;
  exchange: string;
  favorite: boolean;

  // isPositiveChange(): boolean {
  //   console.log("price: $"+this.price, "price: $"+this.previousPrice, "is Positive? "+(this.price >= this.previousPrice))
  //   return this.price >= this.previousPrice;
  // }
}
