import multiprocessing

bind = "0.0.0.0:8000"
workers = multiprocessing.cpu_count() * 2 + 1

# Add these lines for logging
errorlog = "/var/log/gunicorn.log"
loglevel = "debug"
capture_output = True