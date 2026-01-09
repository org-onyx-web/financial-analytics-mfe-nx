// API Types for Financial Platform
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  preferences: UserPreferences;
  createdAt: string;
  updatedAt: string;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  currency: string;
  timezone: string;
  notifications: NotificationSettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  priceAlerts: boolean;
  portfolioUpdates: boolean;
}

export type UserRole = 'investor' | 'trader' | 'advisor' | 'admin';

// Portfolio Types
export interface Portfolio {
  id: string;
  userId: string;
  name: string;
  description?: string;
  totalValue: number;
  dayChange: number;
  dayChangePercent: number;
  holdings: Holding[];
  performance: PerformanceData[];
  createdAt: string;
  updatedAt: string;
}

export interface Holding {
  id: string;
  symbol: string;
  companyName: string;
  shares: number;
  currentPrice: number;
  totalValue: number;
  costBasis: number;
  unrealizedGain: number;
  unrealizedGainPercent: number;
  sector: string;
  lastUpdated: string;
}

export interface PerformanceData {
  date: string;
  value: number;
  return: number;
  returnPercent: number;
}

// Market Data Types
export interface Stock {
  symbol: string;
  companyName: string;
  currentPrice: number;
  dayChange: number;
  dayChangePercent: number;
  volume: number;
  marketCap: number;
  sector: string;
  exchange: string;
  lastUpdated: string;
}

export interface MarketData {
  symbol: string;
  timestamp: string;
  price: number;
  volume: number;
  bid: number;
  ask: number;
  high: number;
  low: number;
  open: number;
  previousClose: number;
}

// Trading Types
export interface Trade {
  id: string;
  portfolioId: string;
  symbol: string;
  type: 'buy' | 'sell';
  shares: number;
  price: number;
  totalAmount: number;
  fees: number;
  status: TradeStatus;
  executedAt?: string;
  createdAt: string;
}

export type TradeStatus = 'pending' | 'executed' | 'cancelled' | 'failed';

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// API Request Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface CreatePortfolioRequest {
  name: string;
  description?: string;
}

export interface TradeRequest {
  portfolioId: string;
  symbol: string;
  type: 'buy' | 'sell';
  shares: number;
  orderType: 'market' | 'limit';
  limitPrice?: number;
}