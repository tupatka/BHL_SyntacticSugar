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
import { useSpeechRecognition } from 'react-speech-kit';
import { useSpeechSynthesis } from 'react-speech-kit';

export const ChatInput = () => {

    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const customOnClose = () => {
        onClose();
        if (speaking) {
            cancel();
        }
    }

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
        setTalk(true);
        dispatch(setLoading());
        dispatch(getResponse(prompt));
        onOpen();
    }

    const { listen, listening, stop } = useSpeechRecognition({
      onResult: (result) => {
        setInput(result);
      },
    });

    const handleMouseUp = () => {
        getChatResponse(input, dispatch);
        stop();
    }

    const { speak, speaking, cancel } = useSpeechSynthesis();
    const [talk, setTalk] = useState(true);

    // useEffect, when loading changes from true to false (i.e. when the response is received)
    // run function to speak the response
    if (talk && response && !loading && response.length !== 0) {
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find((voice) => voice.lang === 'en-US');

        console.log(englishVoice);

        speak({ text: response, voice: englishVoice});
        setTalk(false);
        console.log("dupa");
    }

    return (
        <div class="chat-input-container">
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
            <Button onMouseDown={listen} onMouseUp={handleMouseUp}>
                🎤
            </Button>
            
           
            <Modal isOpen={isOpen} onClose={customOnClose}>
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
                    <Button colorScheme='blue' mr={3} onClick={customOnClose}>
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            
        </div>
    );
}