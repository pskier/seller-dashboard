import styled from 'styled-components';
import { Select } from '../atoms/Select';
import { User, ChevronDown } from 'lucide-react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;
`;

const Label = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 0.5px;
  line-height: 1.2;
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 4px 8px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.bg};
`;

const TransparentSelect = styled(Select)`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  height: auto;
  font-weight: 600;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  cursor: pointer;
  appearance: none;
  min-width: 120px; 
  
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;


export const UserDropdown = ({ accounts, currentAccount, onAccountChange }) => (
  <Wrapper>
    <UserInfo>
        <SelectWrapper>
            <TransparentSelect 
                value={currentAccount} 
                onChange={onAccountChange} 
            >
                {accounts.map(acc => (
                    <option key={acc.id} value={acc.id}>{acc.name}</option>
                ))}
            </TransparentSelect>
            <ChevronDown size={14} color="#666" />
        </SelectWrapper>
    </UserInfo>
  </Wrapper>
);