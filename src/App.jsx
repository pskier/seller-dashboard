import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import MainLayout from './components/templates/MainLayout';
<<<<<<< HEAD

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
  *, *::before, *::after { box-sizing: border-box; }
`;

const AppContent = () => {
  const [theme, setTheme] = useState('dark');
=======
import Header from './components/organisms/Header';
import OrdersWidget from './components/organisms/OrdersWidget';
import SalesChartWidget from './components/organisms/SalesChartWidget';
import styled from 'styled-components';
import { Card, CardTitle } from './components/atoms/Card';
import { Star, Trophy, Lightbulb, TrendingUp } from 'lucide-react';
import RankingWidget from './components/organisms/RankingWidget';

// Siatka pulpitu nawigacyjnego
const DashboardGrid = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 równe kolumny dla wszystkich */
  grid-auto-rows: minmax(250px, auto);   /* Minimalna wysokość każdego kafelka */
  gap: 24px;
  overflow-y: auto;
`;
// Główna aplikacja
function App() {
  const [theme, setTheme] = useState('light');
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

>>>>>>> ddec2de7455d0ac0ff32eea554bdb8a146744fb0
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
<<<<<<< HEAD
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
=======
    <ThemeProvider theme={currentTheme}>
      <MainLayout> 
        <Header toggleTheme={toggleTheme} currentTheme={currentTheme} />
        {/* Siatka pulpitu nawigacyjnego */}
        <DashboardGrid>
          
          {/* 1. Wykres */}
          <SalesChartWidget />

          {/* 2. Zamówienia */}
          <OrdersWidget />

          {/* 3. Jakość */}
          <Card>
            <CardTitle><Star size={20}/> Jakość Sprzedaży</CardTitle>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{fontSize: '3rem', fontWeight: 'bold'}}>480/500</div>
                <span style={{
                    color: currentTheme.colors.success, 
                    fontWeight: 'bold',
                    padding: '4px 12px',
                    background: currentTheme.colors.bg,
                    borderRadius: '16px'
                }}>
                    Super Sprzedawca
                </span>
            </div>
          </Card>

          {/* 4. Porady */}
          <Card>
              <CardTitle><Lightbulb size={20}/> Porady Sprzedażowe</CardTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{padding: '12px', background: currentTheme.colors.bg, borderRadius: '8px', display: 'flex', justifyContent: 'space-between'}}>
                      <span>💡 Jak zwiększyć sprzedaż?</span>
                      <span style={{color: currentTheme.colors.primary, cursor: 'pointer'}}>→</span>
                  </div>
                  <div style={{padding: '12px', background: currentTheme.colors.bg, borderRadius: '8px', display: 'flex', justifyContent: 'space-between'}}>
                      <span>📦 Pakowanie przesyłek</span>
                      <span style={{color: currentTheme.colors.primary, cursor: 'pointer'}}>→</span>
                  </div>
              </div>
          </Card>

          {/* 5. Opinie */}
          <Card>
              <CardTitle><Star size={20}/> Ostatnie Opinie</CardTitle>
              <div style={{opacity: 0.5, fontStyle: 'italic', marginTop: 'auto'}}>
                  Tu pojawi się lista opinii klientów...
              </div>
          </Card>

          {/* 6. Ranking */}
          <RankingWidget />

        </DashboardGrid>
      </MainLayout>
>>>>>>> ddec2de7455d0ac0ff32eea554bdb8a146744fb0
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