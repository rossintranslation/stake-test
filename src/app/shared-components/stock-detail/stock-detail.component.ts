import { Component, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { TrendingStock } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss'],
  standalone: false,

})
export class StockDetailComponent {
  @Input() stock!: TrendingStock;

  constructor(private toastController: ToastController, private modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss();
  }

  async buyStock(stock: TrendingStock) {
    const toast = await this.toastController.create({
      message: `${stock.stock_name} successfully purchased`,
      duration: 1500,
      position: 'top',
      color: 'success'
    });

    await toast.present();
  }
}
