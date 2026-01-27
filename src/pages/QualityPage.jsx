import styled from 'styled-components';
import { Card, CardTitle } from '../components/atoms/Card';
import { useTranslation } from 'react-i18next';

const PageWrapper = styled.div` padding: 24px; `;

const QualityPage = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <Card>
        <CardTitle>{t('page_quality_title')}</CardTitle>
        <p>Szczegółowe statystyki jakości (Widok uproszczony)</p>
      </Card>
    </PageWrapper>
  );
};
export default QualityPage;