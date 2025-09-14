// src/app/services/stock.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, mergeMap, Observable, switchMap } from 'rxjs';
import { Stock, TrendingStock } from '../models/stock.model'; // Import the Stock model

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'assets/mock-data/stocks.json';
  private apiUrlTrendingStocks = 'assets/mock-data/stocks-trending.json';
  private holdingsFetchTrigger = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) { }

  fetchHoldings() {
    this.holdingsFetchTrigger.next();
  }
  
  get holdingsList$(): Observable<any[]> {
    return this.holdingsFetchTrigger.pipe(
      switchMap(() => this.getStocks())
    );
  }

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiUrl);
  }

  getTrendingStocks(): Observable<TrendingStock[]> {
    return this.http.get<TrendingStock[]>(this.apiUrlTrendingStocks);
  }

  buyStock(updatedStock: Stock): Observable<Stock> {
    const buyUrl = `${this.apiUrl}/${updatedStock.id}`;
    return this.http.put<Stock>(buyUrl, updatedStock);
  }

  calculateCombinedEquityValue(holdings: any[]): any {
    let totalValue = 0;

    for (const holding of holdings) {
      if (holding.price && holding.numberOfShares) {
        totalValue += holding.price * holding.numberOfShares;
      }
    }

    return parseFloat(totalValue.toFixed(2));
  }
}