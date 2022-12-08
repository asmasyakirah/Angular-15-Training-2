import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/service/stock.service';
import { Observable, throwError } from 'rxjs';
import { of as observableOf } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks$!: Observable<Stock[]>;

  constructor (private stockService:StockService)
  {    
  }

  ngOnInit(): void 
  {
    this.stocks$ = this.stockService.getStock();
  }

  onToggleFavorite (stock: Stock) 
  {
    console.log('Favorite for stock ', stock, ' was triggered');
    stock.favorite = !stock.favorite;
    this.stockService.toggleFavorite(stock);
  }
}
