import styled from 'styled-components';
import { AlertCircle } from 'lucide-react';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
  padding: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
  min-height: 150px;
`;

const Message = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const EmptyState = ({ message, icon: Icon = AlertCircle }) => (
  <Wrapper>
    <Icon size={40} opacity={0.5} />
    <Message>{message}</Message>
  </Wrapper>
);