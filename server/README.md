# Server side with Flask

## Server Setup and Installation

### Prerequisites

Ensure you have Python installed on your system. You can download it from [python.org](https://www.python.org/downloads/).

## Environment Setup

In case you dont have enviroment, follow these steps for installation:

```bash
python -m venv venv
```

Activate the virtual environment:

On Windows:

```bash
.\venv\Scripts\activate
```

On macOS and Linux:

```bash
source venv/bin/activate
```

## Install the required packages:

```bash
pip install Flask pyodbc python-dotenv flask-cors
```

## Configuration:

Create a .env file in the root directory of your project and add the necessary environment variables:

```bash
DB_SERVER="your_connection_string_here"
DB_DATABASE="your_database_name_here"
DB_USERNAME="your_username_here"
DB_PASSWORD="your_password_here"
DB_DRIVER="your_driver_here"
```

## Running the Server:

make sure you are in the server directory, and run the following in your terminal:

```bash
python server.py
```

your connection should be established on http://127.0.0.1:8080/
