'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { AppDispatch, AppState } from '../../store/store';
import { selectDashboard, fetchChartData } from '../../store/dashboardSlice';

const Charts = dynamic(() => import('../../components/Charts'), {
  ssr: false,
  loading: () => <p>Loading charts...</p>
});

export default function DashboardPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { chartData, loading, error } = useSelector((state: AppState) => selectDashboard(state));

  useEffect(() => {
    dispatch(fetchChartData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-8 text-center">Dashboard Charts</h1>
      <Charts
        candlestickData={chartData.candlestick}
        lineChartData={chartData.line}
        barChartData={chartData.bar}
        pieChartData={chartData.pie}
      />
    </div>
  );
}