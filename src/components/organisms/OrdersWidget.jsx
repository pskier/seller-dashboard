import { useTranslation } from 'react-i18next';
import { ShoppingCart, PackageX, Truck, RefreshCcw } from 'lucide-react';
import { Card, CardTitle } from '../atoms/Card';
import { StatItem } from '../molecules/StatItem';
// Widget wyświetlający podsumowanie zamówień
const OrdersWidget = () => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardTitle><ShoppingCart size={20}/> {t('orders')}</CardTitle>
      <div style={{ display: 'flex', gap: '12px' }}>
        <StatItem icon={PackageX} label={t('unpaid')} value="12" />
        <StatItem icon={Truck} label={t('unsent')} value="5" />
        <StatItem icon={RefreshCcw} label={t('returns')} value="1" />
      </div>
    </Card>
  );
};
export default OrdersWidget;