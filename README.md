# Financial Analytics MFE - Frontend Platform

A comprehensive financial analytics platform built with micro frontend architecture using Nx monorepo.

## 📁 Project Structure

```
financial-analytics-mfe-nx/
├── financial-dashboard-nx/     # Main Nx workspace with React applications
├── design-system/             # Shared UI components and design tokens  
├── shared-types/              # TypeScript definitions for API and domain
├── mock-data/                 # Development mock data and fixtures
├── assets/                    # Static assets (images, fonts, icons)
├── configs/                   # Configuration files for different environments
├── tools/                     # Development tools and custom generators
├── docs/                      # Architecture and development documentation
├── e2e-shared/               # Shared E2E testing resources
└── deployment/               # Frontend deployment configurations
```

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   cd financial-dashboard-nx
   npm install
   ```

2. **Start development server**:
   ```bash
   npx nx serve shell
   ```

3. **Open browser**: http://localhost:4200

## 🏗️ Architecture

This platform follows a **micro frontend architecture** where:
- **Shell Application**: Main host that orchestrates all micro frontends
- **Feature Applications**: Independent financial modules (portfolio, trading, analytics)
- **Shared Libraries**: Reusable components and utilities
- **Design System**: Consistent UI across all applications

## 📚 Documentation

- [Architecture Guide](docs/architecture/README.md)
- [Component Documentation](docs/components/README.md)
- [Development Guidelines](docs/development/README.md)
- [Deployment Guide](docs/deployment/README.md)

## 🛠️ Development

See individual README files in each folder for specific setup instructions.

## 📄 License

MIT License