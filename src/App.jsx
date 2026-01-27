import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import MainLayout from './components/templates/MainLayout';

import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import OrdersPage from './pages/OrdersPage';
import ReviewsPage from './pages/ReviewsPage';
import QualityPage from './pages/QualityPage';

import './i18n';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.25s linear;
    box-sizing: border-box;
    overflow: hidden; 
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const AppContent = () => {
  const [theme, setTheme] = useState('light'); 
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<MainLayout toggleTheme={toggleTheme} themeMode={theme}><DashboardPage /></MainLayout>} />
        <Route path="/orders" element={<MainLayout toggleTheme={toggleTheme} themeMode={theme}><OrdersPage /></MainLayout>} />
        <Route path="/reviews" element={<MainLayout toggleTheme={toggleTheme} themeMode={theme}><ReviewsPage /></MainLayout>} />
        <Route path="/quality" element={<MainLayout toggleTheme={toggleTheme} themeMode={theme}><QualityPage /></MainLayout>} />
      </Routes>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;