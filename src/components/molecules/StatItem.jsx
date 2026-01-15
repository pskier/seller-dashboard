import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 8px;
  flex: 1;
`;

const Label = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 4px;
`;

const Value = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
// Element statystyki z etykietą, wartością i opcjonalną ikoną
export const StatItem = ({ label, value, icon: Icon }) => (
  <Container>
    {Icon && <Icon size={20} style={{ marginBottom: 8, opacity: 0.7 }} />}
    <Label>{label}</Label>
    <Value>{value}</Value>
  </Container>
);