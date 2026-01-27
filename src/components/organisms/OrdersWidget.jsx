import styled from 'styled-components';
import { Card, CardTitle } from '../atoms/Card';
import { StatCard } from '../molecules/StatCard';
import { Send, Banknote, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

const OrdersWidget = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const hasOrders = true; 

  const goToOrders = (filterKey) => {
    navigate('/orders', { state: { filter: filterKey } });
  };

  if (!hasOrders) {
      return (
          <Card>
              <CardTitle>{t('orders_title')}</CardTitle>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 20, color: '#2563EB', fontWeight: 600 }}>
                  {t('msg_no_orders')}
              </div>
          </Card>
      );
  }

  return (
    <Card>
      <CardTitle>{t('orders_title')}</CardTitle>
      <Container>
        <StatCard 
            icon={<Send size={24} />} 
            label={t('orders_unsent')} 
            value="12" 
            onClick={() => goToOrders('filter_unsent')} 
        />
        <StatCard 
            icon={<Banknote size={24} />} 
            label={t('orders_unpaid')} 
            value="82" 
            onClick={() => goToOrders('filter_unpaid')} 
        />
        <StatCard 
            icon={<RotateCcw size={24} />} 
            label={t('orders_returns')} 
            value="3" 
            onClick={() => goToOrders('filter_returns')} 
        />
      </Container>
    </Card>
  );
};

export default OrdersWidget;