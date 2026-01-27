import styled from 'styled-components';

export const IconBox = styled.div`
  width: ${props => props.$size || '40px'};
  height: ${props => props.$size || '40px'};
  min-width: ${props => props.$size || '40px'};
  background: ${({ theme }) => theme.colors.border}; 
  border-radius: ${props => props.$circle ? '50%' : '8px'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
`;