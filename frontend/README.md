# Next.js Dashboard with ApexCharts

This project is a Next.js application featuring a dashboard with four different types of charts using ApexCharts: Candlestick, Line, Bar, and Pie charts.

## Prerequisites

- Node.js (version 20 or later)
- bun (javascript runtime)

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/meetpateltech/chart-task.git
   ```

2. Navigate to the project directory:
   ```
   cd frontend
   ```

3. Install dependencies:
   ```
   bun install or npm install
   ```

4. Run the development server:
   ```
   bun run dev or npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The main dashboard component is located in `app/dashboard/page.tsx`. It includes:

- Candlestick Chart
- Line Chart
- Bar Chart
- Pie Chart

Each chart is created using the `react-apexcharts` library.

## Dependencies

This project uses the following main dependencies:

- Next.js
- React
- Redux Toolkit
- react-apexcharts
- apexcharts

These are already included in the `package.json` file and will be installed when you run `npm install`.

## Customizing Charts

To customize the charts, you can modify the options and series data in the `Dashboard.js` file. Refer to the [ApexCharts documentation](https://apexcharts.com/react-chart-demos/) for more information on available options.