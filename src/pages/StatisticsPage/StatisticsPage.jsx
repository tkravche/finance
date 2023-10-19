import React from 'react';
import { useSelector } from 'react-redux';
import {
  StatisticsWrapper,
  TitleChart,
  TitleStatistics,
  WrapTable,
} from './StatisticsPage.styled';
import DoughnutChart from './DoughnutChart/DoughnutChart';
import StatisticData from './StatisticData/StatisticData';
import StatisticTable from './StatisticTable/StatisticTable';

const StatisticsPage = () => {
  const result = useSelector(
    state => state.transactions.summary.categoriesSummary
  );

  const filterExpense = result
    ? result.filter(item => item.type === 'EXPENSE')
    : [];

  return (
    <>
      <StatisticsWrapper>
        <TitleChart>
          <TitleStatistics>Statistics</TitleStatistics>
          <DoughnutChart data={filterExpense} />
        </TitleChart>
        <WrapTable>
          <StatisticData />
          <StatisticTable />
        </WrapTable>
      </StatisticsWrapper>
    </>
  );
};

export default StatisticsPage;
