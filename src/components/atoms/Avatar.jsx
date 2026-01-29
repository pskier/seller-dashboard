import styled from 'styled-components';

export const Avatar = styled.div`
  width: ${props => props.$size || '32px'};
  height: ${props => props.$size || '32px'};
  min-width: ${props => props.$size || '32px'}; 
  border-radius: ${props => props.$square ? '6px' : '50%'};
  background: ${props => props.$bg || '#6B7280'};
  color: ${props => props.$color || 'white'};
  border: ${props => props.$border ? '1px solid currentColor' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;