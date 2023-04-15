import './index.css';
import { Input,
         IconButton,
         Button,
         useDisclosure,
         FormControl, Text,
         Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadingSelector, responseSelector } from '../../../redux/openai_api/selectors';
import { getResponse, setLoading } from '../../../redux/openai_api/actions';
import { SpeechToText } from './SpeechToText';



export const ChatInput = () => {

    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const response = useSelector(responseSelector);
    const loading = useSelector(loadingSelector);
    console.log('response');
    console.log(response);

    const [input, setInput] = useState("");
    const [prevInput, setPrevInput] = useState("");
    console.log(input);

    const getChatResponse = (prompt, dispatch) => {
        setPrevInput(input);
        setInput("");
        dispatch(setLoading());
        dispatch(getResponse(prompt));
        onOpen();
    }

    return (
        <div class="chat-input-container">
            <SpeechToText />
            <div class="chat-input">
                <Input 
                    onChange={(event) => {
                        setInput(event.target.value);
                    }}
                    resize="vertical"
                    placeholder='Enter question'
                    value={input}
                />
                <IconButton
                    aria-label='Search'
                    icon={<CheckIcon />}
                    onClick={() => getChatResponse(input, dispatch)}
                />
            </div>
            
           
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Warehouse Buddy 😊</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div class="user-input-in-modal">
                        {prevInput}
                    </div>
                    { loading ? (
                            <div class="response-loader">
                                <CircularProgress isIndeterminate color='blue.300' />
                            </div>
                        ) : (
                            <div>
                                {response}
                            </div>
                            
                        )
                    }
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            
        </div>
    );
}