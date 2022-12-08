import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { MessageService } from 'src/app/service/message.service';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: 'create-stock.component.html',
  styleUrls: ['create-stock.component.css']
})
export class CreateStockComponent {

  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(private stockService: StockService, public messageService:MessageService) {
    this.stock =  new Stock('test', '', 0, 0, 'NASDAQ');
    this.messageService.message = "Component Level: Hello";
  }

  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm:any) {
    console.log('Stock Form ', stockForm);
    if (stockForm.valid)
    {
      this.stock = stockForm.value.stock;
      this.stock.previousPrice = 80;
      let created = this.stockService.createStock(this.stock);
      if(created)
      {
        console.log('Creating stock', this.stock);
        this.messageService.message = "Successfully created stock with code "+this.stock.code;
      }
      else
      {
        this.messageService.message = "Stock with code "+this.stock.code+" already exist";
      }
    }
    else
    {
      console.error('Stock form is in valid state');
    }
  }
}
