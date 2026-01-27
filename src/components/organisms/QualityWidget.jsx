import styled from 'styled-components';
import { Card, CardTitle } from '../atoms/Card';
import { Badge } from '../atoms/Badge';
import { QualityRow } from '../molecules/QualityRow';
import { EmptyState } from '../molecules/EmptyState';
import { Truck, MessageSquare, ThumbsUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ScoreContainer = styled.div` display: flex; align-items: center; gap: 16px; margin-bottom: 24px; `;
const Score = styled.span` font-size: 32px; font-weight: 800; color: ${({ theme }) => theme.colors.text}; `;

const QualityWidget = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const hasData = true; 

  return (
    <div style={{ height: '100%', cursor: 'pointer' }} onClick={() => navigate('/quality')}>
      <Card>
        <CardTitle>{t('quality_title')}</CardTitle>
        
        {hasData ? (
            <>
                <ScoreContainer>
                    <Score>480/500</Score>
                    <Badge $variant="success">{t('quality_bestseller')}</Badge>
                </ScoreContainer>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <QualityRow 
                        icon={<Truck size={18}/>} 
                        label={t('quality_shipping')} 
                        value={90} 
                    />
                    <QualityRow 
                        icon={<MessageSquare size={18}/>} 
                        label={t('quality_response')} 
                        value={95} 
                    />
                    <QualityRow 
                        icon={<ThumbsUp size={18}/>} 
                        label={t('quality_relationship')} 
                        value={85} 
                    />
                </div>
            </>
        ) : (
            <EmptyState 
                message="Nie wyznaczono jeszcze jakości sprzedaży." 
            />
        )}
      </Card>
    </div>
  );
};

export default QualityWidget;