from flask import Flask
import json

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p><b>pogrubiony tekst</b>"

@app.route('/tasks', methods=['GET'])
def get_tasks():

    with open('db.json', 'r') as open_file:
         json_result = json.load(open_file)

    return json_result