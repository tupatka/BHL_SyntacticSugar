from flask import Flask, request
from flask_cors import CORS, cross_origin
import json
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def hello_world():
    return "<p>Hello, World!</p><b>pogrubiony tekst</b>"

@app.route('/tasks', methods=['GET'])
@cross_origin()
def get_tasks():

    with open('db.json', 'r') as open_file:
         json_result = json.load(open_file)
         tasks = json.dumps(json_result["tasks"])

    return tasks

@app.route('/users', methods=['GET'])
@cross_origin()
def get_users():

    with open('db.json', 'r') as open_file:
         json_result = json.load(open_file)
         users = json.dumps(json_result["users"])

    return users    

@app.route('/fast_prompts', methods=['GET'])
@cross_origin()
def get_fast_prompts():

    with open('db.json', 'r') as open_file:
         json_result = json.load(open_file)
         fast_prompts = json.dumps(json_result["fast_prompts"])

    return fast_prompts    

@app.route('/ticketing', methods=['GET', 'POST'])
@cross_origin()
def ticketing():

    if request.method == 'POST': 
        new_ticket = request.get_json()
        print("new ticket")
        print(new_ticket)

        with open('db.json', 'r') as open_file:
         json_object = json.load(open_file)
         print(json_object["tickets"])
         last_id = json_object["tickets"][-1]["id"]
         
         print(last_id)
         new_ticket["id"] = last_id + 1
         json_object["tickets"].append(new_ticket)
         
         with open('db.json', 'w') as db_file:
            json.dump(json_object, db_file, indent=4)

        return "OK"
    else:      
        with open('db.json', 'r') as open_file:
            json_result = json.load(open_file)
            tickets = json.dumps(json_result["tickets"])
            return tickets      
