from flask import Flask, request, jsonify
import pyodbc
import os
from dotenv import load_dotenv
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

load_dotenv()

server = os.getenv('DB_SERVER')
database = os.getenv('DB_DATABASE')
username = os.getenv('DB_USERNAME')
password = os.getenv('DB_PASSWORD')
driver = os.getenv('DB_DRIVER')


@app.route('/api/users', methods=['POST'])
def add_user():
    data = request.json
    id = data['id']
    email = data['email']
    plan_index = data['plan_index']
    
    cnxn_string = f'DRIVER={driver};SERVER={server};PORT=1433;DATABASE={database};UID={username};PWD={password}'
    cnxn = pyodbc.connect(cnxn_string)
    cursor = cnxn.cursor()
    
    cursor.execute("INSERT INTO users (id, email, plan_index) VALUES (?, ?, ?)", (id, email, plan_index))
    cnxn.commit()
    
    return jsonify({'message': 'User added successfully!'}), 201

if __name__ == '__main__':
    app.run(debug=True, port=8080)