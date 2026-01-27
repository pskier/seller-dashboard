import styled from 'styled-components';
import { Card, CardTitle } from '../components/atoms/Card';
import { useTranslation } from 'react-i18next';

const PageWrapper = styled.div` padding: 24px; `;

const ReviewsPage = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <Card>
        <CardTitle>{t('page_reviews_title')}</CardTitle>
        <p>Lista wszystkich opinii (Widok uproszczony)</p>
      </Card>
    </PageWrapper>
  );
};
export default ReviewsPage;