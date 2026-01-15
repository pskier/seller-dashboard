import { useTranslation } from 'react-i18next';
import { BarChart3 } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardTitle } from '../atoms/Card';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const data = [
  { name: 'Pn', value: 4000 },
  { name: 'Wt', value: 3000 },
  { name: 'Śr', value: 2000 },
  { name: 'Cz', value: 2780 },
  { name: 'Pt', value: 1890 },
  { name: 'Sb', value: 2390 },
  { name: 'Nd', value: 3490 },
];
// Widget wyświetlający wykres sprzedaży
const SalesChartWidget = () => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext); 

  return (
    <Card>
      <CardTitle><BarChart3 size={20}/> {t('chart')}</CardTitle>
      <div style={{ height: 300, width: '100%' }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <XAxis dataKey="name" stroke={theme.colors.textSecondary} />
            <YAxis stroke={theme.colors.textSecondary} />
            <Tooltip 
              contentStyle={{ backgroundColor: theme.colors.surface, borderRadius: 8 }} 
            />
            <Area type="monotone" dataKey="value" stroke={theme.colors.primary} fill={theme.colors.primary} fillOpacity={0.1} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
export default SalesChartWidget;