import styled from 'styled-components';
import { ProgressBar } from '../atoms/ProgressBar';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`;

const LabelGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  min-width: 140px; /* Wyrównanie etykiet */
`;

const BarWrapper = styled.div`
  flex: 1;
`;

export const QualityRow = ({ icon, label, value, color }) => (
  <Wrapper>
    <LabelGroup>
        {icon}
        {label}
    </LabelGroup>
    <BarWrapper>
        <ProgressBar value={value} color={color} />
    </BarWrapper>
  </Wrapper>
);