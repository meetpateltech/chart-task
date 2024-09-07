# Django Chart API

This project is a simple Django API that provides data for various types of charts. It includes endpoints for candlestick, line, bar, and pie charts.

## Requirements

- Python 3.8+
- Django 3.2+
- Docker and Docker Compose (for containerized setup)

## Quick Start with Docker

1. Clone the repository:
   ```
   git clone https://github.com/meetpateltech/chart-task
   cd backend
   ```

2. Build and run the Docker container:
   ```
   docker-compose up --build
   ```

3. Access the API at `http://localhost:8000/api/`

## Manual Setup

1. Clone the repository:
   ```
   git clone https://github.com/meetpateltech/chart-task
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the requirements:
   ```
   pip install -r requirements.txt
   ```

4. Run migrations:
   ```
   python manage.py migrate
   ```

5. Start the development server:
   ```
   python manage.py runserver
   ```

6. Access the API at `http://localhost:8000/api/`

## API Endpoints

- Candlestick Chart: `GET /api/candlestick-data/`
![Screenshot 2024-09-06 211908](https://github.com/user-attachments/assets/c65abbc7-742b-4537-b490-3f6ca645aa61)

- Line Chart: `GET /api/line-chart-data/`
![Screenshot 2024-09-06 212006](https://github.com/user-attachments/assets/308cb9ea-0c43-42c4-938a-ca2e9088f7fe)

- Bar Chart: `GET /api/bar-chart-data/`
![Screenshot 2024-09-06 212141](https://github.com/user-attachments/assets/7575e171-80ab-44f3-b9d8-65b108487563)

- Pie Chart: `GET /api/pie-chart-data/`
![Screenshot 2024-09-06 212102](https://github.com/user-attachments/assets/10863eba-2dbe-409c-b6b8-41fc903ed318)

Each endpoint returns JSON data structured appropriately for the respective chart type.
