import './index.css';
import { Flex, Button, Stack, Box, ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from 'react';

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

    return (
        <div class="fast-prompt-container">
            <Flex alignItems="center" justifyContent="center">
                <Stack spacing="4">
                    {fast_prompts.slice(0, 3).map((prompt, index) => (
                        <ButtonGroup key={index}>
                            <Button flex="1" colorScheme="blue">{prompt.fast_prompt_text}</Button>
                            {fast_prompts[index + 1] &&
                                <Button flex="1" colorScheme="blue">{fast_prompts[index + 1].fast_prompt_text}</Button>
                            }
                        </ButtonGroup>
                    ))}

                </Stack>

            </Flex>

        </div>

    );
}