import styled from 'styled-components';
import { Select } from '../atoms/Select';
import { User } from 'lucide-react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  /* Usunąłem border-left, który mógł psuć wygląd */
  margin-left: 12px; 
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Wyrównanie do prawej, bliżej awatara */
  
  @media (max-width: 768px) {
    display: none; 
  }
`;

const Label = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0px;
`;

const TransparentSelect = styled(Select)`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  height: auto;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  text-align: right;
  cursor: pointer;
  
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }

  /* Usunięcie domyślnej strzałki w niektórych przeglądarkach dla czystszego wyglądu */
  /* lub pozostawienie jej, zależnie od preferencji. Tutaj ją zostawiamy, ale subtelną. */
`;

const AvatarCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px; /* Zaokrąglony kwadrat, pasuje do reszty designu */
  background: ${({ theme }) => theme.colors.primary}; /* Kolor główny jako tło */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const UserDropdown = ({ accounts, currentAccount, onAccountChange }) => (
  <Wrapper>
    <UserInfo>
        <Label>Twoje konto</Label>
        <TransparentSelect 
            value={currentAccount} 
            onChange={onAccountChange} 
        >
            {accounts.map(acc => (
                <option key={acc.id} value={acc.id}>{acc.name}</option>
            ))}
        </TransparentSelect>
    </UserInfo>
    
    <AvatarCircle>
        <User size={20} />
    </AvatarCircle>
  </Wrapper>
);