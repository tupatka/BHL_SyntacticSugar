import { API_BASE_URL, API_TOKEN, WAREHOUSE_BASIC_INFO, RESPONSE_INSTRUCTIONS} from './const';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY

const SYSTEM_MSG = WAREHOUSE_BASIC_INFO + RESPONSE_INSTRUCTIONS

export const FetchResponse = async (searchTerm) => {

    console.log(SYSTEM_MSG);

    const requestHeaders = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
    };

    const requestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "system", "content": SYSTEM_MSG},
                     {"role": "user", "content": searchTerm}]
    };

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(requestBody)
    });

    const jsonresponse = await response.text()
    const text = JSON.parse(jsonresponse)['choices'][0].message.content;
    
    console.log(text)

    return text; // response.text;
}


export const sendTicketApi = async (ticket) => {
    console.log("Sending ticket!");
    const jsonData = {
        "text": "test z frontendu",
        "category": "test"
    };

    const rawresponse = await fetch("http://localhost:5000/ticketing", { 
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        mode: 'no-cors',
        body: JSON.stringify(jsonData) 
    });

    const response = await rawresponse;

    return "done";
}