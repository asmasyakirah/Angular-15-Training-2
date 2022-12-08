import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  
  public stocks!: Stock[];

  constructor() { 
    this.stocks = [
      new Stock('First Stock Company', 'ST1', 85, 80, 'NASDAQ'),
      new Stock('Second Stock Company', 'ST2', 185, 80, 'NSE'),
      new Stock('Third Stock Company', 'ST3', 85, 180, 'NYSE')
    ]
  }

  getStock():Stock[]
  {
    return this.stocks;
  }

  createStock(stock:Stock)
  {
    let foundStock = this.stocks.find(each=>each.code===stock.code);
    if (foundStock)
    {
      return false;
    }
    this.stocks.push(stock);
    return true;
  }

  toggleFavorite (stock:Stock)
  {
    let foundStock = this.stocks.find(each=>each.code===stock.code);
    if(foundStock)
    {
      foundStock.favorite = !foundStock.favorite;
    }
  }  
}
