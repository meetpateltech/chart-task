# Full-Stack Chart Dashboard

This repository hosts a full-stack application featuring a **Next.js** dashboard that displays various charts using **ApexCharts** and a **Django API** that supplies dynamic chart data. The dashboard includes **Candlestick**, **Line**, **Bar**, and **Pie** charts, all powered by data fetched from the backend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Project Layout](#project-layout)
- [Tools & Libraries](#tools--libraries)
- [Design Approach](#design-approach)
- [Customizing Charts](#customizing-charts)

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 20 or later)
- **Python 3.8+**
- **Docker** (optional, for containerizing the backend)
- **bun** (optional JavaScript runtime for the frontend)

## Installation & Setup

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/meetpateltech/chart-task.git
   ```

2. Navigate into the frontend directory:
   ```bash
   cd frontend
   ```

3. Install the required dependencies:
   ```bash
   bun install # or npm install
   ```

4. Start the frontend development server:
   ```bash
   bun run dev # or npm run dev
   ```

5. Visit the application in your browser at [http://localhost:3000](http://localhost:3000).

### Backend Setup

#### Using Docker (recommended)

1. In the project root, move to the backend directory:
   ```bash
   cd backend
   ```

2. Build and start the Docker container:
   ```bash
   docker-compose up --build
   ```

3. Access the API at `http://localhost:8000/api/`.

#### Manual Setup (without Docker)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a Python virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: `venv\Scripts\activate`
   ```

3. Install the Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the database migrations and start the Django development server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

5. The backend API will now be available at `http://localhost:8000/api/`.

## Project Layout

### Frontend (Next.js)

Located in `frontend/app/dashboard/page.tsx`, the dashboard includes:

- **Candlestick Chart**
- **Line Chart**
- **Bar Chart**
- **Pie Chart**

All charts are implemented using the `react-apexcharts` library, with data fetched from the Django API.

### Backend (Django API)

The backend provides chart data through the following API endpoints:

- **Candlestick Data**: `GET /api/candlestick-data/`
- **Line Chart Data**: `GET /api/line-chart-data/`
- **Bar Chart Data**: `GET /api/bar-chart-data/`
- **Pie Chart Data**: `GET /api/pie-chart-data/`

Each endpoint returns structured JSON data that is dynamically displayed in the frontend.

## Tools & Libraries

### Frontend

- **Next.js**: Framework for building a responsive UI.
- **React**: Core UI library.
- **Redux Toolkit**: State management for better scalability.
- **ApexCharts**: A powerful charting library used to render Candlestick, Line, Bar, and Pie charts.
- **bun**: A fast JavaScript runtime (optional).

### Backend

- **Django**: Web framework for building the RESTful API.
- **Django REST Framework**: Makes it easier to create API endpoints.
- **Docker**: Enables easy containerization of the backend.

## Design Approach

The application is designed to demonstrate a full-stack setup with a clear separation of frontend and backend responsibilities. 

- **Frontend**: Built with Next.js and ApexCharts to provide dynamic, interactive chart visualizations. The charts are driven by real-time data, which is fetched through API calls.
  
- **Backend**: The Django API serves as the data provider, offering endpoints for different types of chart data. Each API is tailored to return data in a format suitable for ApexCharts, making it easy for the frontend to integrate and visualize the information.

The architecture is designed to be modular, making it easy to scale or replace the frontend or backend independently if necessary.

## Customizing Charts

To adjust the chart configurations, modify the chart options or series data within `frontend/app/dashboard/page.tsx`. You can refer to the [ApexCharts documentation](https://apexcharts.com/react-chart-demos/) for detailed configuration options, including chart types, tooltips, colors, and more.