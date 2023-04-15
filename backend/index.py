from flask import Flask
import json

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p><b>pogrubiony tekst</b>"

@app.route('/tasks', methods=['GET'])
def get_tasks():
    json_result = {
        "tasks": [
            {
                "id": 1,
                "title": "Task 1",
                "description": "Description 1",
                "done": False
            },
            {
                "id": 2,
                "title": "Task 2",
                "description": "Description 2",
                "done": False
            },
        ]
    }

    return json_result