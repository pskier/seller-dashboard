import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Globe } from 'lucide-react';
import { IconButton } from '../atoms/IconButton';
import { UserDropdown } from '../molecules/UserDropdown';

const HeaderWrapper = styled.header`
  /* Zmniejszyłem wysokość, żeby był zgrabniejszy */
  height: 64px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px; /* Większy odstęp od treści */
  padding: 0 8px;      /* Lekki padding boczny */
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Odstęp między ikonami */
`;

const LangSwitch = styled.div`
  display: flex; 
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
`;

const LangLabel = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  margin-left: 6px; /* Tekst po prawej stronie ikony */
`;

const ACCOUNTS = [
    { id: 1, name: 'Elektronika Plus' },
    { id: 2, name: 'Outlet RTV' },
    { id: 3, name: 'Gadżety 24' }
];

const Header = ({ toggleTheme, currentTheme }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(newLang);
  };

  return (
    <HeaderWrapper>
      <PageTitle>Dashboard</PageTitle>

      <Actions>
        <LangSwitch onClick={toggleLanguage} title={t('change_lang')}>
             <Globe size={20} color={currentTheme.mode === 'dark' ? '#fff' : '#333'} />
             <LangLabel>{i18n.language}</LangLabel>
        </LangSwitch>

        <IconButton onClick={toggleTheme} title="Zmień motyw">
          {currentTheme.mode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </IconButton>

        <div style={{ width: 1, height: 24, background: '#eee', margin: '0 8px' }} />

        <UserDropdown 
            accounts={ACCOUNTS}
            currentAccount={ACCOUNTS[0].id} 
            onAccountChange={(e) => console.log('Zmiana konta:', e.target.value)}
        />
      </Actions>
    </HeaderWrapper>
  );
};

export default Header;