import styled from 'styled-components';
import { Lightbulb, ArrowRight } from 'lucide-react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 12px;
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const Text = styled.span`
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const TipRow = ({ content }) => (
  <Wrapper>
    <Lightbulb size={20} color="#F59E0B" /> {/* Żarówka ma stały kolor ostrzegawczy/żółty */}
    <Text>{content}</Text>
    <ArrowRight size={16} />
  </Wrapper>
);