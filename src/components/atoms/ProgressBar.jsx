import styled from 'styled-components';

const Track = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  background: ${({ theme, $color }) => $color || theme.colors.success};
  width: ${props => props.$value}%;
  border-radius: 4px;
  transition: width 0.5s ease-out;
`;

export const ProgressBar = ({ value, color }) => (
  <Track>
    <Fill $value={value} $color={color} />
  </Track>
);