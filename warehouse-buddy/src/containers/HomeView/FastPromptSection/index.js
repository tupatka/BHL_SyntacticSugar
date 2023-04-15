import './index.css';
import { Flex, Button, Stack, Box, ButtonGroup, Wrap, WrapItem, useBreakpointValue } from "@chakra-ui/react";
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

    const isMobile = useBreakpointValue({ base: true, md: false })
    const rows = isMobile ? 6 : 3;

    return (
        <div class="fast-prompt-container">
            <Flex alignItems="center" justifyContent="center">
                <Stack spacing="4">
                    {fast_prompts.slice(0, rows).map((prompt, index) => (
                        <ButtonGroup key={index} flexDirection={isMobile ? "column" : "row"}>
                            <Button flex={isMobile ? "none" : "1"} colorScheme="blue">{prompt.fast_prompt_text}</Button>
                            {fast_prompts[index + 1] && isMobile == false &&
                                <Button flex="1" colorScheme="yellow">{fast_prompts[index + 1].fast_prompt_text}</Button>
                            }
                        </ButtonGroup>
                    ))}

                </Stack>

            </Flex>

        </div>

    );
}
