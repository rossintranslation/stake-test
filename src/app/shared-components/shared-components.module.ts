import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HoldingsComponent } from './holdings/holdings.component';
import { TrendingStocksComponent } from './trending-stocks/trending-stocks.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [HoldingsComponent, TrendingStocksComponent, StockDetailComponent],
  exports: [HoldingsComponent, TrendingStocksComponent, StockDetailComponent]
})
export class SharedComponentsModule { }
