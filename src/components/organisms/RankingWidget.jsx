import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SearchX } from 'lucide-react';
import { Card, CardTitle } from '../atoms/Card';
import { Select } from '../atoms/Select';
import { Avatar } from '../atoms/Avatar';
import { Table, Th, Td, TableContainer } from '../atoms/TableElements'; 

import { EmptyState } from '../molecules/EmptyState';

const ALL_PRODUCTS = [
    { id: 1, name: 'Kabel USB-C', sold: 82, turnover: 4235.15, views: 1200 },
    { id: 2, name: 'Monitor LG', sold: 11, turnover: 5020.00, views: 4500 },
    { id: 3, name: 'Etui iPhone', sold: 5, turnover: 125.00, views: 80 },
    { id: 4, name: 'Szkło Hart.', sold: 0, turnover: 0.00, views: 124 },
    { id: 5, name: 'Ładowarka', sold: 150, turnover: 3000.00, views: 5000 },
    { id: 6, name: 'Myszka', sold: 0, turnover: 0.00, views: 45 }
];

const RankingWidget = () => {
  const { t } = useTranslation();
  const [sortType, setSortType] = useState('most');

  const sortedData = useMemo(() => {
    const products = [...ALL_PRODUCTS];

    if (sortType === 'most') {
        return products.sort((a, b) => {
            if (b.sold !== a.sold) return b.sold - a.sold;
            return b.turnover - a.turnover;
        }).slice(0, 5); 
    } else {
        return products.sort((a, b) => {
            if (a.sold !== b.sold) return a.sold - b.sold;
            return b.views - a.views;
        }).slice(0, 5);
    }
  }, [sortType]);

  const lastColLabel = sortType === 'most' ? t('ranking_turnover') : t('col_views');

  return (
    <Card>
      <CardTitle style={{ marginBottom: 12 }}>{t('ranking_title')}</CardTitle>
      
      <div style={{ marginBottom: 12 }}>
        <Select $fullWidth onChange={(e) => setSortType(e.target.value)} value={sortType}>
            <option value="most">{t('sort_most_bought')}</option>
            <option value="least">{t('sort_least_bought')}</option>
        </Select>
      </div>
      
      <TableContainer>
        {sortedData.length > 0 ? (
            <Table>
                <thead>
                    <tr>
                        <Th style={{width: 40}}>Photo</Th>
                        <Th>{t('ranking_product')}</Th>
                        <Th>{t('ranking_sold')}</Th>
                        <Th style={{textAlign: 'right'}}>{lastColLabel}</Th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map(item => (
                        <tr key={item.id}>
                            <Td>
                                <Avatar 
                                    $size="24px" 
                                    $square 
                                    $border 
                                    $bg="transparent" 
                                    $color="currentColor"
                                >
                                    <Image size={14}/>
                                </Avatar>
                            </Td>
                            <Td style={{fontWeight: 500}}>{item.name}</Td>
                            <Td><b>{item.sold}</b></Td>
                            <Td style={{textAlign: 'right'}}>
                                {sortType === 'most' 
                                    ? `${item.turnover.toFixed(2)} zł` 
                                    : item.views
                                }
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        ) : (
            <EmptyState 
                message={t('msg_no_offers')} 
                icon={SearchX} 
            />
        )}
      </TableContainer>
    </Card>
  );
};

export default RankingWidget;