export interface Stock {
  id: number;
  stock: string;
  price: number;
  change: number;
  numberOfShares: number;
  icon?: string;
  stock_type?: string;
  stock_name?: string;
  stock_subtitle?: string;
}

export interface TrendingStock {
  icon: string;
  stock_type: string;
  stock_name: string;
  stock_subtitle: string;
  price: string;
}