# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Install system dependencies
RUN apt-get update && apt-get install -y libpq-dev gcc

# Copy the requirements.txt file into the container (you'll need to generate this)
COPY requirements.txt ./

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application into the container
COPY . .

# Set environment variables (can also be done in Render's dashboard)
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Collect static files (for production)
RUN python manage.py collectstatic --noinput

# Expose the port Render provides
EXPOSE $PORT

# Run the Django development server, binding to the dynamically assigned port
CMD ["python", "manage.py", "runserver", "0.0.0.0:$PORT"]
