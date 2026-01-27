import { Card, CardTitle } from '../atoms/Card';
import { TipRow } from '../molecules/TipRow';
import { useTranslation } from 'react-i18next';

const TipsWidget = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardTitle>{t('tips_title')}</CardTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
         {[1, 2, 3].map(i => (
           <TipRow key={i} content={t('tip_content')} />
         ))}
      </div>
    </Card>
  );
};

export default TipsWidget;