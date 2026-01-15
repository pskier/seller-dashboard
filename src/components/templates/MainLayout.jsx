import styled from 'styled-components';
import { Home, ShoppingCart, Star, BarChart2, Lightbulb, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Layout = styled.div`
  display: flex;
  height: 100vh;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
`;

const Sidebar = styled.aside`
  width: 260px;
  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.textSecondary};
  background: ${props => props.$active ? props.theme.colors.bg : 'transparent'};
  font-weight: ${props => props.$active ? 600 : 400};

  &:hover {
    background: ${({ theme }) => theme.colors.bg};
  }
`;

const MainLayout = ({ children }) => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <Sidebar>
        <h1 style={{fontSize: 20, marginBottom: 32}}>Portal Sprzedawcy</h1>
        <MenuItem $active><Home size={20}/> {t('dashboard')}</MenuItem>
        <MenuItem><ShoppingCart size={20}/> {t('orders')}</MenuItem>
        <MenuItem><Star size={20}/> {t('reviews')}</MenuItem>
        <MenuItem><BarChart2 size={20}/> {t('quality')}</MenuItem>
        <MenuItem><Lightbulb size={20}/> {t('tips')}</MenuItem>
        <div style={{flex: 1}} />
        <MenuItem><LogOut size={20}/> {t('logout')}</MenuItem>
      </Sidebar>
      <div style={{flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
        {children}
      </div>
    </Layout>
  );
};
export default MainLayout;