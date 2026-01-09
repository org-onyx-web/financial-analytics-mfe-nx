// Domain Types for Financial Platform Business Logic

// Financial Instruments
export interface FinancialInstrument {
  symbol: string;
  name: string;
  type: InstrumentType;
  currency: string;
  exchange: string;
  sector?: string;
  industry?: string;
}

export type InstrumentType = 'stock' | 'bond' | 'etf' | 'mutual_fund' | 'crypto' | 'option' | 'future';

// Risk Assessment
export interface RiskProfile {
  id: string;
  userId: string;
  riskTolerance: RiskTolerance;
  timeHorizon: TimeHorizon;
  investmentGoals: InvestmentGoal[];
  questionnaire: RiskQuestionnaireResponse[];
  score: number;
  lastAssessed: string;
}

export type RiskTolerance = 'conservative' | 'moderate' | 'aggressive';
export type TimeHorizon = 'short' | 'medium' | 'long';
export type InvestmentGoal = 'retirement' | 'education' | 'home' | 'emergency' | 'wealth_building' | 'income';

export interface RiskQuestionnaireResponse {
  questionId: string;
  question: string;
  answer: string;
  weight: number;
}

// Analytics
export interface PortfolioAnalytics {
  portfolioId: string;
  totalReturn: number;
  totalReturnPercent: number;
  annualizedReturn: number;
  volatility: number;
  sharpeRatio: number;
  beta: number;
  alpha: number;
  maxDrawdown: number;
  correlations: AssetCorrelation[];
  sectorAllocation: SectorAllocation[];
  assetAllocation: AssetAllocation[];
}

export interface AssetCorrelation {
  asset1: string;
  asset2: string;
  correlation: number;
}

export interface SectorAllocation {
  sector: string;
  percentage: number;
  value: number;
}

export interface AssetAllocation {
  assetType: InstrumentType;
  percentage: number;
  value: number;
}

// Market Indicators
export interface MarketIndicator {
  name: string;
  symbol: string;
  value: number;
  change: number;
  changePercent: number;
  description: string;
  lastUpdated: string;
}

// Financial Ratios
export interface FinancialRatios {
  symbol: string;
  peRatio: number;
  pbRatio: number;
  epsRatio: number;
  debtToEquity: number;
  roe: number;
  roa: number;
  currentRatio: number;
  quickRatio: number;
  dividendYield: number;
  payoutRatio: number;
}

// News and Analysis
export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  source: string;
  publishedAt: string;
  symbols: string[];
  sentiment: NewsSentiment;
  categories: NewsCategory[];
}

export type NewsSentiment = 'positive' | 'neutral' | 'negative';
export type NewsCategory = 'earnings' | 'market' | 'analysis' | 'regulatory' | 'company' | 'economic';

// Alerts
export interface Alert {
  id: string;
  userId: string;
  type: AlertType;
  symbol?: string;
  portfolioId?: string;
  condition: AlertCondition;
  isActive: boolean;
  isTriggered: boolean;
  createdAt: string;
  triggeredAt?: string;
}

export type AlertType = 'price' | 'volume' | 'portfolio_value' | 'news' | 'ratio';

export interface AlertCondition {
  operator: 'greater_than' | 'less_than' | 'equals' | 'percentage_change';
  value: number;
  timeframe?: string;
}