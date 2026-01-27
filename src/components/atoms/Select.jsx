import styled from 'styled-components';

export const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  cursor: pointer;
  outline: none;
  min-width: 0;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;