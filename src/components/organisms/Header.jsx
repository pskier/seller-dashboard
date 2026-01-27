import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, X, ChevronDown, Check } from 'lucide-react';


const HeaderCard = styled.header`
  height: 64px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px; 
  padding: 0 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  display: flex;
  justify-content: space-between; 
  align-items: center;
  position: relative; /* Ważne dla pozycjonowania listy */
  z-index: 50; /* Żeby lista była nad innymi elementami */
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const AccountTrigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  min-width: 180px; /* Nieco szersze, żeby zmieściły się nazwy */
  user-select: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const DropdownList = styled.div`
  position: absolute;
  top: 110%; /* Tuż pod przyciskiem */
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  background: ${props => props.$isSelected ? props.theme.colors.bg : 'transparent'};

  &:hover {
    background: ${({ theme }) => theme.colors.bg};
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.2s;
  
  &:hover {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ACCOUNTS = [
    { id: 'main', labelKey: 'account_main' },
    { id: 'de', labelKey: 'account_de' },
    { id: 'dropship', labelKey: 'account_dropshipping' },
];

const Header = ({ toggleTheme, currentTheme }) => {
  const { t, i18n } = useTranslation();
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(ACCOUNTS[0]);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl');
  };

  const handleSelect = (account) => {
      setSelectedAccount(account);
      setIsOpen(false); 
      console.log("Przełączono na sklep:", account.id); 
  };

  return (
    <HeaderCard>
      
      <LeftSection>
        
        {/* --- CUSTOM DROPDOWN --- */}
        <DropdownContainer>
            {/* Kliknięcie otwiera/zamyka listę */}
            <AccountTrigger onClick={() => setIsOpen(!isOpen)}>
                <span>{t(selectedAccount.labelKey)}</span> 
                <ChevronDown size={16} color="#666" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: '0.2s' }} />
            </AccountTrigger>

            {/* Lista renderuje się tylko gdy isOpen === true */}
            {isOpen && (
                <DropdownList>
                    {ACCOUNTS.map(account => (
                        <DropdownItem 
                            key={account.id} 
                            onClick={() => handleSelect(account)}
                            $isSelected={selectedAccount.id === account.id}
                        >
                            {t(account.labelKey)}
                            {selectedAccount.id === account.id && <Check size={14} color={currentTheme.colors.success} />}
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </DropdownContainer>


        {/* --- IKONY (MOTYW I JĘZYK) --- */}
        <IconButton onClick={toggleTheme} title="Zmień motyw">
          {currentTheme.mode === 'light' ? <Moon size={22} strokeWidth={1.5} /> : <Sun size={22} strokeWidth={1.5} />}
        </IconButton>

        <IconButton onClick={toggleLang} title="Zmień język">
          <Globe size={22} strokeWidth={1.5} />
        </IconButton>

      </LeftSection>

      {/* PRAWA STRONA */}
      <IconButton onClick={() => console.log("Zamknij")} title="Zamknij">
        <X size={24} strokeWidth={1.5} />
      </IconButton>

    </HeaderCard>
  );
};

export default Header;