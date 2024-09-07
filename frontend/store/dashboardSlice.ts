import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './store';

export interface ChartData {
  candlestick: any[];
  line: { labels: string[]; data: number[] };
  bar: { labels: string[]; data: number[] };
  pie: { labels: string[]; data: number[] };
}

interface DashboardState {
  chartData: ChartData;
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  chartData: {
    candlestick: [],
    line: { labels: [], data: [] },
    bar: { labels: [], data: [] },
    pie: { labels: [], data: [] },
  },
  loading: false,
  error: null,
};

export const fetchChartData = createAsyncThunk(
  'dashboard/fetchChartData',
  async () => {
    const types = ['candlestick', 'line', 'bar', 'pie'];
    const responses = await Promise.all(
      types.map(type => fetch(`/api/chart-data?type=${type}`).then(res => res.json()))
    );

    const [candlestickData, lineChartData, barChartData, pieChartData] = responses;

    return {
      candlestick: candlestickData.data,
      line: lineChartData,
      bar: barChartData,
      pie: pieChartData,
    };
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChartData.fulfilled, (state, action: PayloadAction<ChartData>) => {
        state.loading = false;
        state.chartData = action.payload;
      })
      .addCase(fetchChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const selectDashboard = (state: AppState) => state.dashboard;

export default dashboardSlice.reducer;