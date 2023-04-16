# BHL_SyntacticSugar

Repository for 2023 Best Hacking League

- Patrycja Stępień

- Anna Stawiska

- Adam Deryło

- Jakub Podolak

### Our solution

We present a platform that combines easy flow of information in the warehouse with a voice assistant.

*Warehouse Buddy*:
- Knows the layout and rules of the warehouse
- Knows what tasks the workers have to perform
- Can be talked to like an experienced colleague
- Transmits information between the manager and the workers.

### Description of functionalites

At the top part of the screen user can see his current task. Clicking arrow expands task description and list of their next tasks. 

`Report Issue` button allows worker to report any problems directly to the manager. User chooses problem category, they can provide short problem description or take a picture of the issue. 

Middle buttons are most common questions user can have. Questions are sent directly to AI assistant which immediately replies to the user. Questions are displayed based on the current user's task and his seniority level. 

Bottom is the AI assistant - worker's buddy. User can enter his prompt or click `Tap to speak button` to send his question.

Buttons with most common user actions, voice control and fast issue reporting with photos makes the app easy to use even in working gloves and with limited time. AI chat has the knowledge of user's current task and of the warehouse.

### How to run:

```bash
git clone https://github.com/tupatka/BHL_SyntacticSugar.git
cd BHL_SyntacticSugar
```

You need .`env` with `REACT_APP_OPENAI_API_KEY = ` in the `warehouse-buddy` folder to run AI chat bot.

#### Run backend

```bash
cd backend
sudo apt install python3 python3-venv
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt

export FLASK_APP=index
export FLASK_ENV=development

flask run
```

#### Run frontend

We suggest to use node version 14.17.0 `nvm install 14.17.0`

```bash
cd warehouse-buddy
npm install
npm start
```

App starts on `localhost:3000`



#### Technical solutions used

AI assistant is GPT 3.5 playground which not free to use. 

We mocked a database to work with user's task and common questions they may have (our mocked database is in the form of a json file which collects all of this information, with parts of it hardcoded - such as the analytics since we only implemented the flow for the quant team).

This is a model, in the form of a json, of how and what data we keep:

```json
 "tasks": [
     {
      "id": 1,
      "title": "Komp",
      "description": "",
      "category": "Kompletowanie zam\u00f3wienia", 
      "done": "False", 
      "user_id": 1
     }
 ], 

"fast_prompts": [
    {
    "id": 1, 
     "fast_prompt_text": "Gdzie znajduje si\u0119 paleta do rozpakowania?", 
     "category": "Roz\u0142adunek", 
     "seniority": ["Junior", "Regular", "Specialist"]
    }, 
    {"id": 2,
     "fast_prompt_text": "Gdzie mam przenie\u015b\u0107 wypakowany towar?", 
     "category": "Roz\u0142adunek", 
     "seniority": ["Junior", "Regular", "Specialist"]
    }]
```

