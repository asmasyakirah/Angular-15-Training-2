import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { MessageService } from 'src/app/service/message.service';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: 'create-stock.component.html',
  styleUrls: ['create-stock.component.css'],
  providers:[MessageService]
})
export class CreateStockComponent {

  public stock!: Stock;
  public confirmed = false;
  public message!:string;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(private stockService: StockService) {
    // this.stock =  new Stock('test', '', 0, 0, 'NASDAQ');
    // this.messageService.message = "Component Level: Hello";
    this.initializeStock();
  }

  initializeStock(){
    this.stock =  {name:'',code:'',price:0,previousPrice:0,exchange:'NASDAQ',favorite:false};
  }

  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm:any) 
  {
    console.log('Stock Form ', stockForm);
    if (stockForm.valid){
     this.stockService.createStock(this.stock)
     .subscribe((result:any) => {
        this.message=result.msg;
        this.initializeStock();
      },(err)=>{
        this.message=err.error.msg;
      });
      // this.stock = stockForm.value.stock;
      // this.stock.previousPrice = 80;
      // let created = this.stockService.createStock(this.stock);
      // if(created)
      // {
      //   console.log('Creating stock', this.stock);
      //   this.messageService.message = "Successfully created stock with code "+this.stock.code;
      // }
      // else
      // {
      //   this.messageService.message = "Stock with code "+this.stock.code+" already exist";
      // }
    }
    else{
      console.error('Stock form is in valid state');
    }
  }
}
