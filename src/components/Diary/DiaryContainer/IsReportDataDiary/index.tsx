import React from 'react';
import styles from './styles.module.scss';

import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, ChartOptions, Tooltip, Legend } from 'chart.js';

interface ChartData {
  labels: string[];
  datasets: any;
}

const data: ChartData = {
  labels: ['텀블러', '대중교통', '채식'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [400, 50, 100],
      backgroundColor: ['rgb(144, 210, 60)', 'rgb(36, 174, 50)', 'rgb(57, 164, 240)'],
      hoverOffset: 4,
    },
  ],
};

const options: ChartOptions<'doughnut'> = {
  plugins: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        font: {
          size: 18,
        },
      },
    },
  },
};

export default function IsReportDataDiary() {
  // React.useEffect(() => {
  Chart.register(ArcElement, Tooltip, Legend);
  // }, []);

  return (
    <div className={styles.reportContainer}>
      <Doughnut data={data} options={options} />
      <div className={styles.reportWrapper}>this is report diary</div>
    </div>
  );
}
