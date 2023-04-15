import './index.css';
import { Input,
         IconButton,
         FormControl, Text,
         Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import { CheckIcon } from '@chakra-ui/icons'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadingSelector, responseSelector } from '../../../redux/openai_api/selectors';
import { getResponse, setLoading } from '../../../redux/openai_api/actions';

const getChatResponse = (prompt, dispatch) => {
    dispatch(setLoading());
    dispatch(getResponse(prompt));
}

export const ChatInput = () => {

    const dispatch = useDispatch();

    const response = useSelector(responseSelector);
    const loading = useSelector(loadingSelector);
    console.log('response');
    console.log(response);

    const [input, setInput] = useState(null);
    console.log(input);

    return (
        <div class="chat-input-container">
            <div class="chat-input">
                <Input 
                    onChange={(event) => {
                        setInput(event.target.value);
                    }}
                    resize="vertical"
                    placeholder='Enter question'
                />
                <IconButton
                    aria-label='Search'
                    icon={<CheckIcon />}
                    onClick={() => getChatResponse(input, dispatch)}
                />
            </div>
            {
                loading ? (
                    "loading..."
                ) : (
                    response ? (
                        <Card>
                            <CardBody>
                                <Text> {response} </Text>
                            </CardBody>
                        </Card>
                    ) : <></>
                )
            }
        </div>
    );
}