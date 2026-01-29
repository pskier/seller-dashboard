import styled from 'styled-components';

import SalesChartWidget from '../components/organisms/SalesChartWidget';
import OrdersWidget from '../components/organisms/OrdersWidget';
import QualityWidget from '../components/organisms/QualityWidget';
import RankingWidget from '../components/organisms/RankingWidget';
import TipsWidget from '../components/organisms/TipsWidget';
import ReviewsWidget from '../components/organisms/ReviewsWidget';

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dwie równe kolumny */
  gap: 24px;
  padding-bottom: 24px;
  align-items: start; /* Ważne: elementy zaczynają od góry */

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FixedWidget = styled.div`
  height: ${props => props.$px}px;
  width: 100%;
`;

const DashboardPage = () => {
  return (
    <DashboardGrid>
        <Column>
        {/* 1. Wykres*/}
        <FixedWidget $px={280}>
            <SalesChartWidget />
        </FixedWidget>

        {/* 2. Jakość*/}
        <FixedWidget $px={280}>
            <QualityWidget />
        </FixedWidget>
        
        {/* 3. Opinie*/}
        <FixedWidget $px={280}>
            <ReviewsWidget />
        </FixedWidget>
      </Column>
      <Column>
        {/* 1. Zamówienia*/}
        <FixedWidget $px={280}>
            <OrdersWidget />
        </FixedWidget>

        {/* 2. Porady*/}
        <FixedWidget $px={280}>
            <TipsWidget />
        </FixedWidget>

        {/* 3. Ranking */}
        <FixedWidget $px={280}> 
            <RankingWidget />
        </FixedWidget>
      </Column>

    </DashboardGrid>
  );
};

export default DashboardPage;