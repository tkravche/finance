import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { ChartWrapper, ImgMoney } from './DoughnutChart.styled';
import money from '../../../images/money.png';
import { selectAuthDataBalance } from '../../../redux/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

const colorStatistics = {
  'Main expenses': '#FED057',
  Products: '#FFD8D0',
  Car: '#FD9498',
  'Self care': '#C5BAFF',
  'Child care': '#6E78E8',
  'Household products': '#4A56E2',
  Education: '#81E1FF',
  Leisure: '#24CCA7',
  'Other expenses': '#00AD84',
  Entertainment: '#FF69B4',
};

const DoughnutChart = ({ data }) => {
  const totalBalance = useSelector(selectAuthDataBalance);
  console.log(totalBalance);

  if (!data || data.length === 0) {
    return <ImgMoney alt="money" src={money} />;
  }

  const categories = data;

  const categoryColors = categories.map(item => colorStatistics[item.name]);

  const chartData = {
    labels: '',
    datasets: [
      {
        data: categories.map(item => item.total),
        backgroundColor: categoryColors,
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%',

    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div>
      <ChartWrapper>
        <Doughnut data={chartData} options={options} />
        {data ? <span> ₴ {totalBalance}</span> : ''}
      </ChartWrapper>
    </div>
  );
};

export default DoughnutChart;
