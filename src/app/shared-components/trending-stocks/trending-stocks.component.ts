import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StockService } from 'src/app/services/stock';
import { StockDetailComponent } from '../stock-detail/stock-detail.component';
import { TrendingStock } from 'src/app/models/stock.model';

@Component({
  selector: 'app-trending-stocks',
  templateUrl: './trending-stocks.component.html',
  styleUrls: ['./trending-stocks.component.scss'],
  standalone: false,
})
export class TrendingStocksComponent {
  stocks: TrendingStock[] = [];

  constructor(private stockService: StockService, private modalController: ModalController) { }
  ngOnInit() {
    this.stockService.getTrendingStocks().subscribe(data => {
      this.stocks = data;
    });
  }

  async openStockModal(stock: TrendingStock) {
    const modal = await this.modalController.create({
      component: StockDetailComponent,
      breakpoints: [0, 0.5, 1], 
      initialBreakpoint: 0.5, 
      componentProps: {
        stock: stock
      }
    });

    await modal.present();
  }

}
