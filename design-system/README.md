# Design System

A comprehensive design system for the financial analytics platform, providing consistent UI components, design tokens, and themes across all micro frontends.

## 🎨 Structure

- **`tokens/`**: Design tokens (colors, typography, spacing, shadows)
- **`components/`**: Reusable UI components
- **`icons/`**: Icon library and SVG assets
- **`themes/`**: Light/dark themes and brand variations
- **`storybook/`**: Component documentation and playground

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build design tokens
npm run build:tokens

# Build component library
npm run build
```

## 📦 Components

### Core Components
- Button, Input, Select, Checkbox, Radio
- Modal, Tooltip, Dropdown, Toast
- Card, Table, Pagination, Loader

### Financial Components
- StockChart, PriceDisplay, PerformanceChart
- PortfolioSummary, TradingPanel, MarketStatus
- RiskMeter, AnalyticsCard, TrendIndicator

## 🎯 Usage

```tsx
import { Button, StockChart } from '@financial-platform/design-system';

function TradingPanel() {
  return (
    <div>
      <StockChart symbol="AAPL" />
      <Button variant="primary" size="lg">
        Buy Stock
      </Button>
    </div>
  );
}
```