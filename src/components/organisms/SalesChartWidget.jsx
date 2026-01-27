import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { 
  BarChart, Bar, Cell, LineChart, Line, ResponsiveContainer, XAxis, Tooltip, CartesianGrid 
} from 'recharts';
import { useTranslation } from 'react-i18next';

import { Card, CardTitle } from '../atoms/Card';
import { Select } from '../atoms/Select'; 
import { Checkbox } from '../atoms/Checkbox';  
import { ChartWrapper } from '../atoms/ChartWrapper'; 
import { WidgetFooter } from '../atoms/WidgetFooter';

const DATA_WEEK = [ 
  { name: 'Pon', turnover: 1200, sold: 12, prevTurnover: 1000, prevSold: 10 }, 
  { name: 'Wt',  turnover: 1500, sold: 18, prevTurnover: 1300, prevSold: 15 }, 
  { name: 'Śr',  turnover: 1800, sold: 25, prevTurnover: 1400, prevSold: 14 }, 
  { name: 'Czw', turnover: 1400, sold: 15, prevTurnover: 1600, prevSold: 18 }, 
  { name: 'Pt',  turnover: 2200, sold: 30, prevTurnover: 1800, prevSold: 22 },
  { name: 'Sob', turnover: 1900, sold: 22, prevTurnover: 1700, prevSold: 20 },
  { name: 'Ndz', turnover: 1100, sold: 10, prevTurnover: 1200, prevSold: 12 }
];

const DATA_TODAY = [ 
  { name: '8:00',  turnover: 150, sold: 2, prevTurnover: 100, prevSold: 1 }, 
  { name: '10:00', turnover: 400, sold: 5, prevTurnover: 300, prevSold: 4 }, 
  { name: '12:00', turnover: 350, sold: 4, prevTurnover: 500, prevSold: 6 }, 
  { name: '14:00', turnover: 800, sold: 10, prevTurnover: 600, prevSold: 8 },
  { name: '16:00', turnover: 1200, sold: 15, prevTurnover: 900, prevSold: 11 } 
];
// Widget wyświetlający wykres sprzedaży
const SalesChartWidget = () => {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();
  
  const [range, setRange] = useState('week');
  const [type, setType] = useState('bar');
  const [measure, setMeasure] = useState('turnover');
  const [compare, setCompare] = useState(false);

  const currentData = range === 'week' ? DATA_WEEK : DATA_TODAY;
  const dataKeyCurrent = measure === 'turnover' ? 'turnover' : 'sold';
  const dataKeyPrev = measure === 'turnover' ? 'prevTurnover' : 'prevSold';

  return (
    <Card>
<<<<<<< HEAD
      <CardTitle>{t('chart_title')}</CardTitle>
        <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          {type === 'bar' ? (
            <BarChart data={currentData} barGap={4}>
               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme.colors.border} />
               <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: theme.colors.textSecondary, fontSize: 12}} dy={10} />
               <Tooltip contentStyle={{ backgroundColor: theme.colors.surface, borderRadius: 8, border: `1px solid ${theme.colors.border}` }} itemStyle={{ color: theme.colors.text }} />
               
               <Bar dataKey={dataKeyCurrent} radius={[4, 4, 0, 0]} name={t('chart_measure_' + measure)}>
                  {currentData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={theme.colors.chartBar} 
                        fillOpacity={index === currentData.length - 1 ? 0.6 : 1} 
                        stroke={index === currentData.length - 1 ? theme.colors.chartBar : 'none'}
                        strokeWidth={index === currentData.length - 1 ? 2 : 0}
                        strokeDasharray="4 4"
                      />
                  ))}
               </Bar>
               
               {compare && <Bar dataKey={dataKeyPrev} fill="#9CA3AF" radius={[4, 4, 0, 0]} name="Poprzedni okres" />}
            </BarChart>
          ) : (
            <LineChart data={currentData}>
               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme.colors.border} />
               <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: theme.colors.textSecondary, fontSize: 12}} dy={10} />
               <Tooltip contentStyle={{ backgroundColor: theme.colors.surface, borderRadius: 8, border: `1px solid ${theme.colors.border}` }} />
               
               <Line type="monotone" dataKey={dataKeyCurrent} stroke={theme.colors.chartBar} strokeWidth={3} dot={{r: 4}} name={t('chart_measure_' + measure)} />
               {compare && <Line type="monotone" dataKey={dataKeyPrev} stroke="#9CA3AF" strokeWidth={2} strokeDasharray="5 5" dot={{r: 3}} name="Poprzedni okres" />}
            </LineChart>
          )}
=======
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
>>>>>>> ddec2de7455d0ac0ff32eea554bdb8a146744fb0
        </ResponsiveContainer>
      </ChartWrapper>

      <WidgetFooter>
        <Select style={{flex: 1}} value={range} onChange={e => setRange(e.target.value)}>
           <option value="today">{t('chart_range_today')}</option>
           <option value="week">{t('chart_range_week')}</option>
           <option value="prev">{t('chart_range_prev_week')}</option>
        </Select>

        <Select style={{flex: 1}} value={type} onChange={e => setType(e.target.value)}>
           <option value="bar">{t('chart_type_bar')}</option>
           <option value="line">{t('chart_type_line')}</option>
        </Select>

        <Select style={{flex: 1}} value={measure} onChange={e => setMeasure(e.target.value)}>
           <option value="turnover">{t('chart_measure_turnover')}</option>
           <option value="sold">{t('chart_measure_sold')}</option>
        </Select>
        
        <div style={{ marginLeft: 4 }}>
            <Checkbox 
                label={t('chart_compare')} 
                checked={compare} 
                onChange={e => setCompare(e.target.checked)} 
            />
        </div>
      </WidgetFooter>
    </Card>
  );
};

export default SalesChartWidget;