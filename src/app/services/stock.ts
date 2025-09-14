// src/app/services/stock.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock, TrendingStock } from '../models/stock.model'; // Import the Stock model

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'assets/mock-data/stocks.json';
  private apiUrlTrendingStocks = 'assets/mock-data/stocks-trending.json';

  constructor(private http: HttpClient) { }

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
    
    // Iterate through each holding and calculate its value, then add to the total.
    for (const holding of holdings) {
      if (holding.price && holding.numberOfShares) {
        totalValue += holding.price * holding.numberOfShares;
      }
    }
    
    // Return the total value, formatted to two decimal places.
    return parseFloat(totalValue.toFixed(2));
  }
}