import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Globe } from 'lucide-react';
import { IconButton } from '../atoms/IconButton';
import { UserDropdown } from '../molecules/UserDropdown';

const HeaderWrapper = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding: 0 16px;

  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px; 
  margin-bottom: 0px; 
  box-shadow: 0 2px 6px rgba(0,0,0,0.03); 
`;

const LangContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  
  &:hover {
    background: ${({ theme }) => theme.colors.bg}; 
  }
`;

const ACCOUNTS = [
    { id: 1, name: 'Elektronika Plus' },
    { id: 2, name: 'Outlet RTV' },
    { id: 3, name: 'Gadżety 24' }
];

const Header = ({ toggleTheme, currentTheme }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(newLang);
  };

  return (
    <HeaderWrapper>
        <UserDropdown 
            accounts={ACCOUNTS}
            currentAccount={ACCOUNTS[0].id} 
            onAccountChange={(e) => console.log(e.target.value)}
        />

        <IconButton onClick={toggleTheme}>
          {currentTheme.mode === 'light' ? <Moon size={20} strokeWidth={2} /> : <Sun size={20} />}
        </IconButton>

        <LangContainer onClick={toggleLanguage}>
             <Globe size={20} strokeWidth={2} />
        </LangContainer>

    </HeaderWrapper>
  );
};

export default Header;