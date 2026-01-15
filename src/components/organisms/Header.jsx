import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, User } from 'lucide-react';

// Nagłówek aplikacji z przełącznikami języka i motywu
const HeaderContainer = styled.header`
  height: 64px;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const Actions = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.bg};
  }
`;

const Header = ({ toggleTheme, currentTheme }) => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl');
  };

  return (
    <HeaderContainer>
      <h2 style={{color: currentTheme.colors.text}}>Elektronika24.pl</h2>
      <Actions>
        <Button onClick={toggleLang}>
          <Globe size={18} /> {i18n.language.toUpperCase()}
        </Button>
        <Button onClick={toggleTheme}>
          {currentTheme.mode === 'light' ? <Moon size={18}/> : <Sun size={18}/>}
        </Button>
        <Button>
          <User size={18} /> Jan Kowalski
        </Button>
      </Actions>
    </HeaderContainer>
  );
};
export default Header;