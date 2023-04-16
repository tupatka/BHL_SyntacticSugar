# BHL_SyntacticSugar

Repository for 2023 Best Hacking League

- Patrycja Stępień

- Anna Stawiska

- Adam Deryło

- Jakub Podolak

  

### Usage

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

AI solutions used is not free. 

