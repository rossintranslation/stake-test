import { Component, Input } from '@angular/core';
import { Stock } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.scss'],
  standalone: false,
})
export class HoldingsComponent {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) { }
  ngOnInit() {
this.stockService.getStocks().subscribe(data => {
      this.stocks = data;
    });
  }
}
