import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Card, CardTitle } from '../components/atoms/Card';
import { useTranslation } from 'react-i18next';

const PageWrapper = styled.div`
  padding: 24px;
`;

const FilterInfo = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.primary}15; 
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  margin-bottom: 24px;
  font-weight: 600;
`;

const OrdersPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const filterType = location.state?.filter || 'filter_all'; 

  return (
    <PageWrapper>
      <Card>
        <CardTitle>{t('page_orders_title')}</CardTitle>
        
        <FilterInfo>
          {t('page_orders_filter')} {t(filterType)}
        </FilterInfo>

        <p>Tu będzie tabela z zamówieniami (uproszczona).</p>
      </Card>
    </PageWrapper>
  );
};

export default OrdersPage;