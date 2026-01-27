import styled from 'styled-components';

export const Badge = styled.span`
  background: ${({ theme, $variant }) => 
    $variant === 'success' 
      ? (theme.mode === 'dark' ? 'rgba(16, 185, 129, 0.2)' : '#D1FAE5') 
      : theme.colors.border};
  color: ${({ theme, $variant }) => 
    $variant === 'success' ? theme.colors.success : theme.colors.textSecondary};
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;