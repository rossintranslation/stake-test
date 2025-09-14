import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrendingStock } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss'],
  standalone: false,

})
export class StockDetailComponent {
  @Input() stock!: TrendingStock;

  constructor(private modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss();
  }

  buyStock(stock: TrendingStock){

  }
}