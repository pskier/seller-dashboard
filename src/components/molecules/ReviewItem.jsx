import styled from 'styled-components';
import { Avatar } from '../atoms/Avatar';
import { User, Star } from 'lucide-react';

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 16px;
  margin-bottom: 16px;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const StarsRow = styled.div`
  display: flex;
  gap: 2px;
`;

const Comment = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
`;

export const ReviewItem = ({ user, rating, text }) => (
  <Wrapper>
    <Avatar>
      <User size={20} />
    </Avatar>
    <Content>
      <Name>{user}</Name>
      <StarsRow>
        {Array.from({ length: 5 }).map((_, idx) => (
            <Star 
                key={idx} 
                size={12} 
                fill={idx < rating ? "currentColor" : "transparent"} 
                color={idx < rating ? "#F59E0B" : "#9CA3AF"} 
                strokeWidth={idx < rating ? 0 : 2}
            />
        ))}
      </StarsRow>
      <Comment>{text}</Comment>
    </Content>
  </Wrapper>
);