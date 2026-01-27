import styled from 'styled-components';
import { Home, ShoppingCart, Star, LogOut } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Header from '../organisms/Header';
import { useTranslation } from 'react-i18next'; 
import logoBtn from '../../assets/logo.png';

<<<<<<< HEAD
import { MenuItem } from '../molecules/MenuItem'; 

const LayoutWrapper = styled.div`
=======
// Układ główny aplikacji z paskiem bocznym nawigacyjnym
const Layout = styled.div`
>>>>>>> ddec2de7455d0ac0ff32eea554bdb8a146744fb0
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => theme.colors.bg};
  padding: 16px;
  gap: 16px;
  box-sizing: border-box;
  overflow: hidden;
`;

const BodyContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 16px;
  overflow: hidden;
`;

const SidebarCard = styled.aside`
  width: 260px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  justify-content: space-between;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
  gap: 16px;
  h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const LogoImage = styled.img`
  width: 64px;       
  height: 64px;       
  object-fit: contain; 
  margin-bottom: 8px;
`;

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContentArea = styled.main`
  flex: 1;
  overflow-y: auto;
  border-radius: 16px;
  /* Opcjonalnie: ukrycie paska przewijania, jeśli chcesz */
  &::-webkit-scrollbar { width: 0px; }
`;

const MainLayout = ({ children, toggleTheme, themeMode }) => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <LayoutWrapper>
      <Header toggleTheme={toggleTheme} currentTheme={themeMode === 'light' ? {mode: 'light', colors: {}} : {mode: 'dark', colors: {}}} />

      <BodyContainer>
        <SidebarCard>
          <div>
            <LogoSection>
               <LogoImage src={logoBtn} alt="Logo portalu" />
               <h2>{t('portal_title')}</h2>
            </LogoSection>

             <MenuList>
              <MenuItem 
                to="/dashboard"
                active={location.pathname === '/dashboard'}
                icon={<Home size={22} />}
                label={t('menu_home')}
              />

              <MenuItem 
                to="/reviews"
                active={location.pathname === '/reviews'}
                icon={<Star size={22} />}
                label={t('menu_reviews')}
              />

              <MenuItem 
                to="/orders"
                active={location.pathname === '/orders'}
                icon={<ShoppingCart size={22} />}
                label={t('menu_orders')}
              />
            </MenuList>
          </div>

          <MenuItem 
            to="/login"
            icon={<LogOut size={22} />}
            label={t('menu_logout')}
          />
        </SidebarCard>

        <ContentArea>
          {children}
        </ContentArea>
      </BodyContainer>
    </LayoutWrapper>
  );
};

export default MainLayout;