import { useState } from 'react';
import styled from 'styled-components';
import { Card, CardTitle } from '../atoms/Card';
import { Select } from '../atoms/Select';
import { ReviewItem } from '../molecules/ReviewItem'; 
import { EmptyState } from '../molecules/EmptyState'; 
import { useTranslation } from 'react-i18next';
import { MessageSquareOff } from 'lucide-react';

const ReviewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto; 
  flex: 1;         
  padding-right: 4px; 
  
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }
`;

const ReviewsWidget = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const MOCK_REVIEWS = [
    { id: 1, type: 'positive', user: 'Jan K.', rating: 5, text: 'Super produkt!' },
    { id: 2, type: 'negative', user: 'Anna N.', rating: 2, text: 'Dostawa spóźniona.' },
    { id: 3, type: 'positive', user: 'Piotr W.', rating: 4, text: 'Jest ok.' },
    { id: 4, type: 'positive', user: 'Kasia L.', rating: 5, text: 'Polecam!' },
    { id: 5, type: 'negative', user: 'Tomek S.', rating: 1, text: 'Nie działa.' },
  ];

  const filteredReviews = MOCK_REVIEWS.filter(r => {
      if (filter === 'all') return true;
      return r.type === filter;
  });

  return (
    <Card>
      <CardTitle style={{ marginBottom: 12 }}>{t('reviews_title')}</CardTitle>
      
      <div style={{ marginBottom: 12 }}>
        <Select $fullWidth value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">{t('filter_all')}</option>
            <option value="positive">{t('filter_positive')}</option>
            <option value="negative">{t('filter_negative')}</option>
        </Select>
      </div>

      <ReviewsListContainer>
         {filteredReviews.length > 0 ? (
             filteredReviews.map(review => (
                <ReviewItem 
                    key={review.id}
                    user={review.user}
                    rating={review.rating}
                    text={review.text}
                />
             ))
         ) : (
             <EmptyState 
                message={t('msg_no_reviews')} 
                icon={MessageSquareOff} 
             />
         )}
      </ReviewsListContainer>
    </Card>
  );
};

export default ReviewsWidget;