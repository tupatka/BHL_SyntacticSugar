from flask import Flask, request, make_response
from flask_cors import CORS, cross_origin
import json
import os
import base64


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


@app.route('/save_image', methods=['POST', 'GET'])
@cross_origin()
def save_image():
    import base64
    from io import BytesIO
    from PIL import Image
 
    data = json.loads(request.data.decode())
    id = data["id"]
    data = data["image_data"]

    starter = data.find(',')
    image_data = data[starter+1:]
    image_data = bytes(image_data, encoding="utf-8")
    im = Image.open(BytesIO(base64.b64decode(image_data)))
    im.save('images/image' + str(id) +'.jpeg')
    
    return 'OK'