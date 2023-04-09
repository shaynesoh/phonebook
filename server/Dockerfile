# Base image
FROM python:3.9-slim-buster

# Set the working directory
WORKDIR /app

# Copy requirements.txt
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy the rest of the app
COPY . .

ENV FLASK_APP=app.py

# Expose port 5000
EXPOSE 5000

# Start the app
CMD ["flask", "run", "--host=0.0.0.0"]