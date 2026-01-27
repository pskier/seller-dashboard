import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  
  /* KLUCZOWE DLA WYSOKOŚCI: */
  height: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Rozrzuca treść (np. tytuł góra, treść środek) */
  box-sizing: border-box;
`;

export const CardTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 700;
`;