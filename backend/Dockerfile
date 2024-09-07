FROM python:3.9

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /code

COPY requirements.txt /code/
RUN pip install -r requirements.txt

COPY . /code/

# Add this line to print Python version and installed packages
RUN python --version && pip list

# Modify the CMD to print any errors
CMD gunicorn --config gunicorn.conf.py chart_api_project.wsgi:application || (echo "Gunicorn failed to start" && cat /var/log/gunicorn.log)