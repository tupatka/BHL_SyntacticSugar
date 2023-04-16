import './index.css';
import { useDisclosure, Button, Stack, Box, ButtonGroup, Wrap, WrapItem, useBreakpointValue, } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { CheckIcon } from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux';
import { loadingSelector, responseSelector } from '../../../redux/openai_api/selectors';
import { getResponse, setLoading } from '../../../redux/openai_api/actions';
import { useSpeechRecognition } from 'react-speech-kit';
import { useSpeechSynthesis } from 'react-speech-kit';
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


export const FastPromptSection = () => {
    const [fast_prompts, setFastPrompts] = useState([])

    const setFastPromptsData = () => {
        fetch("http://localhost:5000/fast_prompts")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setFastPrompts(data)
                console.log(data)
            })
    }

    useEffect(() => {
        setFastPromptsData()
    }, [])

    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const customOnClose = () => {
        onClose();
        cancel();
        setTalk(false);
    }

    const response = useSelector(responseSelector);
    const loading = useSelector(loadingSelector);
    console.log('response');
    console.log(response);

    const [input, setInput] = useState("");
    const [prevInput, setPrevInput] = useState("");
    console.log(input);

    const getChatResponse = (prompt, dispatch) => {
        console.log("prumt");
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
        lang: 'en'
    });

    const handleMouseUp = () => {
        getChatResponse(input, dispatch);
        stop();
    }

    const { speak, speaking, cancel } = useSpeechSynthesis();
    const [talk, setTalk] = useState(true);

    const isMobile = useBreakpointValue({ base: true, md: false })
    const rows = isMobile ? 6 : 3;

    return (
        <div className="fast-prompt-container">
            <Stack spacing="4">
                {fast_prompts.slice(0, rows).map((prompt, index) => (
                    <ButtonGroup key={index} flexDirection={isMobile ? "column" : "row"} borderRadius="md">
                        <Button
                            onClick={() => getChatResponse(prompt.fast_prompt_text, dispatch)}
                            flex={isMobile ? "none" : "1"}
                            colorScheme="blue"
                            borderRadius="md"
                            whiteSpace="normal"
                            wordWrap="break-word"                      >
                            {prompt.fast_prompt_text}
                        </Button>
                        {fast_prompts[index + 1] && !isMobile &&
                            <Button
                                onClick={() => getChatResponse(fast_prompts[index + 1].fast_prompt_text, dispatch)}
                                flex="1"
                                colorScheme="yellow"
                                borderRadius="md"
                                whiteSpace="normal"
                                wordWrap="break-word"
                            >
                                {fast_prompts[index + 1].fast_prompt_text}
                            </Button>
                        }
                    </ButtonGroup>
                ))}
            </Stack>

            <Modal isOpen={isOpen} onClose={customOnClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Warehouse Buddy 😊</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div class="user-input-in-modal">
                            {prevInput}
                        </div>
                        {loading ? (
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
