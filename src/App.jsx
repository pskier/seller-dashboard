import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import './i18n'; // Inicjalizacja języków
import MainLayout from './components/templates/MainLayout';
import Header from './components/organisms/Header';
import OrdersWidget from './components/organisms/OrdersWidget';
import SalesChartWidget from './components/organisms/SalesChartWidget';
import styled from 'styled-components';

import { Card, CardTitle } from './components/atoms/Card';
import { Star, Trophy, Lightbulb } from 'lucide-react';

const DashboardGrid = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
  gap: 24px;
  overflow-y: auto;
`;

function App() {
  const [theme, setTheme] = useState('light');
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <MainLayout>
        <Header toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <DashboardGrid>
          {/* Rząd 1 */}
          <OrdersWidget />
          <Card>
            <CardTitle><Star size={20}/> Jakość Sprzedaży</CardTitle>
            <div style={{fontSize: 32, fontWeight: 'bold'}}>480/500</div>
            <span style={{color: currentTheme.colors.success}}>Super Sprzedawca</span>
          </Card>
          <Card>
             <CardTitle><Lightbulb size={20}/> Porady</CardTitle>
             <div>3 nowe porady sprzedażowe</div>
          </Card>

          {/* Rząd 2 - Wykres na całą szerokość */}
          <SalesChartWidget />

          {/* Rząd 3 */}
          <Card style={{gridColumn: 'span 2'}}>
             <CardTitle><Star size={20}/> Opinie Kupujących</CardTitle>
             <div>Lista opinii (Placeholder)...</div>
          </Card>
          <Card>
             <CardTitle><Trophy size={20}/> Ranking Ofert</CardTitle>
             <div>Tabela ofert (Placeholder)...</div>
          </Card>
        </DashboardGrid>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;