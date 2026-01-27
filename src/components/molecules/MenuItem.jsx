import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  color: ${({ theme, $active }) => $active ? 'white' : theme.colors.textSecondary};
  background: ${({ theme, $active }) => $active ? theme.colors.primary : 'transparent'};
  font-weight: ${({ $active }) => $active ? 600 : 500};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.border};
    color: ${({ theme, $active }) => $active ? 'white' : theme.colors.text};
  }
`;

export const MenuItem = ({ icon, label, active, to, onClick }) => {
  const content = (
    <Wrapper $active={active} onClick={onClick}>
      {icon}
      <span>{label}</span>
    </Wrapper>
  );

  return to ? <Link to={to} style={{ textDecoration: 'none' }}>{content}</Link> : content;
};