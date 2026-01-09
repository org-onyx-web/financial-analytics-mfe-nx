# Financial Dashboard - Micro Frontend Architecture

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A modern financial analytics micro frontend application built with Nx monorepo, React 19, and React Router 7. This project provides a scalable architecture for financial data visualization and analytics.

## 🏗️ Architecture

This project uses **Nx monorepo** structure with **micro frontend (MFE)** architecture, enabling:
- **Modular Development**: Independent feature development and deployment
- **Scalability**: Easy addition of new financial modules
- **Code Sharing**: Reusable components and libraries across applications
- **Team Collaboration**: Multiple teams can work on different parts independently

### Current Applications
- **Shell Application**: The main host application that orchestrates micro frontends
- **About Module**: Sample feature module demonstrating routing capabilities

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build System**: Nx 22.3.3 with Vite bundler
- **Routing**: React Router 7 with server-side rendering support
- **Styling**: CSS Modules
- **Testing**: Jest + Playwright for E2E testing
- **Code Quality**: ESLint + Prettier
- **Package Manager**: npm

## 📋 Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 8.x or higher
- **Git**: For version control

## 🛠️ Getting Started

### 1. Clone and Setup
```bash
# Navigate to project directory
cd financial-dashboard-nx

# Install dependencies
npm install
```

### 2. Development Server
```bash
# Start the shell application in development mode
npx nx serve shell

# The application will be available at http://localhost:4200
```

### 3. Production Build
```bash
# Build the shell application for production
npx nx build shell

# Build output will be in dist/apps/shell
```

## 🎯 Available Commands

### Development
```bash
# Serve shell application
npx nx serve shell

# Run tests for shell
npx nx test shell

# Run E2E tests
npx nx e2e shell-e2e

# Lint code
npx nx lint shell

# Format code
npx nx format

# View project graph
npx nx graph
```

### Production
```bash
# Build for production
npx nx build shell

# Preview production build
npx nx preview shell
```

### Project Management
```bash
# Show available tasks for a project
npx nx show project shell

# List all projects in workspace
npx nx show projects

# Generate dependency graph
npx nx graph
```

## 🏗️ Adding New Features

### Generate a New Micro Frontend Application
```bash
# Create a new React application
npx nx g @nx/react:app portfolio-tracker

# Create with specific configuration
npx nx g @nx/react:app risk-analytics --style=css --routing=true
```

### Generate a Shared Library
```bash
# Create a shared UI library
npx nx g @nx/react:lib ui-components

# Create a data access library
npx nx g @nx/js:lib data-access

# Create a utility library
npx nx g @nx/js:lib shared-utils
```

### Generate Components and Features
```bash
# Add a component to an existing app
npx nx g @nx/react:component dashboard --project=shell

# Add a new route/page
npx nx g @nx/react:component portfolio --project=shell --export=true
```

## 📁 Project Structure

```
financial-dashboard-nx/
├── apps/
│   ├── shell/                    # Main host application
│   │   ├── app/
│   │   │   ├── routes/           # Application routes
│   │   │   │   └── about.tsx     # About page component
│   │   │   ├── app.tsx           # Main app component
│   │   │   └── root.tsx          # Root layout
│   │   └── public/               # Static assets
│   └── shell-e2e/                # E2E tests for shell
├── libs/                         # Shared libraries (future)
├── nx.json                       # Nx workspace configuration
├── package.json                  # Dependencies and scripts
└── tsconfig.base.json           # Base TypeScript configuration
```

## 🧪 Testing Strategy

- **Unit Tests**: Jest for component and utility testing
- **Integration Tests**: Testing Library for React component testing
- **E2E Tests**: Playwright for full application flow testing
- **Code Coverage**: Built-in coverage reporting with Jest

### Running Tests
```bash
# Run all tests
npx nx run-many --target=test

# Run tests for specific project
npx nx test shell

# Run tests in watch mode
npx nx test shell --watch

# Run E2E tests
npx nx e2e shell-e2e
```

## 🚀 Future Roadmap

### Planned Features
- [ ] **Trading Module**: Real-time trading interface
- [ ] **Portfolio Tracker**: Investment portfolio management
- [ ] **Risk Analytics**: Risk assessment and monitoring
- [ ] **Market Data**: Real-time market data visualization
- [ ] **Reporting Module**: Financial reports and analytics
- [ ] **User Authentication**: Secure user management
- [ ] **API Integration**: Backend service integration

### Technical Enhancements
- [ ] **Module Federation**: True micro frontend architecture
- [ ] **State Management**: Redux Toolkit or Zustand integration
- [ ] **Component Library**: Design system implementation
- [ ] **Data Visualization**: Chart.js or D3.js integration
- [ ] **PWA Features**: Offline capabilities
- [ ] **Docker Integration**: Containerized deployment
- [ ] **CI/CD Pipeline**: Automated testing and deployment

## 💼 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-financial-module`
3. **Make changes** following the project conventions
4. **Run tests**: `npx nx run-many --target=test`
5. **Commit changes**: `git commit -m 'Add new financial module'`
6. **Push to branch**: `git push origin feature/new-financial-module`
7. **Create a Pull Request**

### Code Quality Standards
- Follow TypeScript best practices
- Maintain test coverage above 80%
- Use meaningful component and variable names
- Document complex business logic
- Follow the established folder structure

## 📚 Learning Resources

### Nx Framework
- [Nx Documentation](https://nx.dev)
- [React Monorepo Tutorial](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial)
- [Nx Console VSCode Extension](https://nx.dev/getting-started/editor-setup)

### React & TypeScript
- [React 19 Documentation](https://react.dev)
- [React Router 7 Guide](https://reactrouter.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Financial Development
- [Financial Data APIs](https://www.alphavantage.co/)
- [Chart.js for Financial Charts](https://www.chartjs.org/)
- [Financial Modeling Best Practices](https://corporatefinanceinstitute.com/)

## 🆘 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 4200
npx kill-port 4200
# Or use a different port
npx nx serve shell --port 4300
```

**Module resolution issues**
```bash
# Clear Nx cache
npx nx reset
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**TypeScript compilation errors**
```bash
# Check TypeScript configuration
npx tsc --noEmit
# Update dependencies
npm update
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

- **Documentation**: [Project Wiki](https://github.com/your-org/financial-dashboard-nx/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-org/financial-dashboard-nx/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/financial-dashboard-nx/discussions)

---

Built with ❤️ using [Nx](https://nx.dev) • [React](https://react.dev) • [TypeScript](https://www.typescriptlang.org)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
