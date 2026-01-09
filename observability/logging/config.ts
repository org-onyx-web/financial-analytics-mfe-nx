// Logging Configuration for Financial Platform
// Structured logging with different levels and contexts

export interface LogContext {
  userId?: string;
  sessionId?: string;
  portfolioId?: string;
  transactionId?: string;
  component?: string;
  action?: string;
  timestamp?: string;
}

export interface LogEvent {
  level: 'error' | 'warn' | 'info' | 'debug';
  message: string;
  context?: LogContext;
  error?: Error;
  metadata?: Record<string, any>;
}

// Financial Platform Specific Log Categories
export const LOG_CATEGORIES = {
  // User Actions
  USER_ACTION: 'user_action',
  NAVIGATION: 'navigation',
  AUTHENTICATION: 'authentication',
  
  // Trading & Portfolio
  PORTFOLIO_VIEW: 'portfolio_view',
  PORTFOLIO_UPDATE: 'portfolio_update',
  TRADE_EXECUTION: 'trade_execution',
  TRADE_FAILURE: 'trade_failure',
  MARKET_DATA: 'market_data',
  
  // Performance
  PAGE_LOAD: 'page_load',
  API_CALL: 'api_call',
  COMPONENT_RENDER: 'component_render',
  BUNDLE_LOAD: 'bundle_load',
  
  // Errors
  JAVASCRIPT_ERROR: 'javascript_error',
  API_ERROR: 'api_error',
  NETWORK_ERROR: 'network_error',
  VALIDATION_ERROR: 'validation_error',
  
  // Security
  SECURITY_EVENT: 'security_event',
  SUSPICIOUS_ACTIVITY: 'suspicious_activity',
  FAILED_LOGIN: 'failed_login',
  
  // Business Events
  FEATURE_FLAG: 'feature_flag',
  AB_TEST: 'ab_test',
  CONVERSION: 'conversion',
  USER_ONBOARDING: 'user_onboarding'
} as const;

// Sample Log Events for Financial Platform
export const SAMPLE_LOG_EVENTS = {
  portfolioView: {
    level: 'info' as const,
    category: LOG_CATEGORIES.PORTFOLIO_VIEW,
    message: 'User viewed portfolio',
    context: {
      userId: 'user_123',
      portfolioId: 'portfolio_456',
      component: 'PortfolioOverview'
    }
  },
  
  tradeExecution: {
    level: 'info' as const,
    category: LOG_CATEGORIES.TRADE_EXECUTION,
    message: 'Trade executed successfully',
    context: {
      userId: 'user_123',
      transactionId: 'trade_789',
      action: 'buy_stock'
    },
    metadata: {
      symbol: 'AAPL',
      shares: 10,
      price: 185.25,
      totalAmount: 1852.50
    }
  },
  
  apiError: {
    level: 'error' as const,
    category: LOG_CATEGORIES.API_ERROR,
    message: 'Portfolio API request failed',
    context: {
      userId: 'user_123',
      component: 'PortfolioService'
    },
    metadata: {
      endpoint: '/api/portfolios',
      statusCode: 500,
      responseTime: 5000
    }
  },
  
  pageLoad: {
    level: 'info' as const,
    category: LOG_CATEGORIES.PAGE_LOAD,
    message: 'Page loaded',
    context: {
      userId: 'user_123',
      component: 'TradingDashboard'
    },
    metadata: {
      loadTime: 1250,
      route: '/trading',
      bundleSize: 245000
    }
  }
};

// Logger Configuration
export const LOGGER_CONFIG = {
  // Console logging for development
  console: {
    enabled: process.env.NODE_ENV === 'development',
    level: 'debug',
    format: 'pretty'
  },
  
  // Remote logging for production
  remote: {
    enabled: process.env.NODE_ENV === 'production',
    endpoint: process.env.VITE_LOGGING_ENDPOINT || '',
    apiKey: process.env.VITE_LOGGING_API_KEY || '',
    level: 'info',
    batchSize: 10,
    flushInterval: 5000
  },
  
  // Error tracking
  errorTracking: {
    enabled: true,
    dsn: process.env.VITE_SENTRY_DSN || '',
    environment: process.env.NODE_ENV || 'development',
    sampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0
  },
  
  // Performance monitoring
  performance: {
    enabled: true,
    sampleRate: process.env.NODE_ENV === 'production' ? 0.01 : 1.0,
    trackWebVitals: true,
    trackUserTiming: true
  },
  
  // Privacy and compliance
  privacy: {
    excludePII: true,
    maskSensitiveData: true,
    retentionDays: 90,
    encryptLogs: true
  }
};