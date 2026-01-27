import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
  padding: 8px;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.8;
  }
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const Label = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Value = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const StatCard = ({ icon, label, value, onClick }) => (
  <Wrapper onClick={onClick}>
    <IconWrapper>{icon}</IconWrapper>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </Wrapper>
);