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
         tasks = json.dumps(json_result["tasks"])

    return tasks

@app.route('/users', methods=['GET'])
def get_users():

    with open('db.json', 'r') as open_file:
         json_result = json.load(open_file)
         users = json.dumps(json_result["users"])

    return users    

@app.route('/fast_prompts', methods=['GET'])
def get_fast_prompts():

    with open('db.json', 'r') as open_file:
         json_result = json.load(open_file)
         fast_prompts = json.dumps(json_result["fast_prompts"])

    return fast_prompts    
