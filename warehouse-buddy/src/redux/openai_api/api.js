import { API_BASE_URL, API_TOKEN } from './const';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY

const SYSTEM_MSG = "You are a helpful assistant in Sugar Warehouse. Help workers in their tasks."

export const FetchResponse = async (searchTerm) => {

    console.log("searching: " + searchTerm);

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


