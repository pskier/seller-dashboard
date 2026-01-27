import styled from 'styled-components';

export const WidgetFooter = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  align-items: center;
  flex-wrap: wrap;
`;