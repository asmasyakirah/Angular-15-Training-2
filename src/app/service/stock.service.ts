import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { NgModel } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { of as observableOf } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  
  public stocks!: Stock[];

  constructor(private http:HttpClient) 
  {
    // this.stocks = [
    //   new Stock('First Stock Company', 'ST1', 85, 80, 'NASDAQ'),
    //   new Stock('Second Stock Company', 'ST2', 185, 80, 'NSE'),
    //   new Stock('Third Stock Company', 'ST3', 85, 180, 'NYSE')
    // ]
  }

  getStock():Observable<Stock[]>
  {
    return this.http.get<Stock[]>('/api/stock');
    //return observableOf(this.stocks);
  }

  createStock(stock:Stock)
  {
    return this.http.post('/api/stock', stock);
    // let foundStock = this.stocks.find(each=>each.code===stock.code);
    // if (foundStock)
    // {
    //   return throwError(false);
    // }
    // this.stocks.push(stock);
    // return true;
  }

  toggleFavorite (stock:Stock)
  {
    return this.http.patch<Stock>(
      '/api/stock/' + stock.code, 
      {favorite: !stock.favorite});
    // let foundStock = this.stocks.find(each=>each.code===stock.code);
    // if(foundStock)
    // {
    //   foundStock.favorite = !foundStock.favorite;
    // }
  }  
}
