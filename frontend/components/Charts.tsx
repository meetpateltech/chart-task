import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartProps {
  candlestickData: { x: string; open: number; high: number; low: number; close: number }[];
  lineChartData: { labels: string[]; data: number[] };
  barChartData: { labels: string[]; data: number[] };
  pieChartData: { labels: string[]; data: number[] };
}

const Charts: React.FC<ChartProps> = ({ candlestickData, lineChartData, barChartData, pieChartData }) => {
  const candlestickOptions: ApexOptions = {
    chart: {
      type: 'candlestick',
      height: 350
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };

  const candlestickSeries = [{
    data: candlestickData.map(item => ({
      x: new Date(item.x).getTime(),
      y: [item.open, item.high, item.low, item.close]
    }))
  }];

  const lineChartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: lineChartData.labels,
    }
  };

  const lineChartSeries = [{
    name: "Data",
    data: lineChartData.data
  }];

  const barChartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: barChartData.labels,
    },
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        const category = w.globals.labels[dataPointIndex];
        return `
          <div style="background: rgba(0, 0, 0, 0.75); border-radius: 5px; padding: 10px; color: white; text-align: center;">
            <span>${category}: $${value}</span>
          </div>`;
      }
    }
  };

  const barChartSeries = [{
    data: barChartData.data
  }];

  const pieChartOptions: ApexOptions = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: pieChartData.labels,
    colors: ['#E74C3C', '#3498DB', '#FFC300', '#004d00'],
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.40
        }
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
      <div className="card bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">Candlestick Chart</h2>
        <ReactApexChart options={candlestickOptions} series={candlestickSeries} type="candlestick" height={350} />
      </div>
      <div className="card bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">Line Chart</h2>
        <ReactApexChart options={lineChartOptions} series={lineChartSeries} type="line" height={350} />
      </div>
      <div className="card bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">Bar Chart</h2>
        <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
      </div>
      <div className="card bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">Pie Chart</h2>
        <ReactApexChart options={pieChartOptions} series={pieChartData.data} type="pie" height={350} />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Charts), { ssr: false });