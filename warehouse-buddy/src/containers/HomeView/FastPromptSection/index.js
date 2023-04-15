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
        <div className="fast-prompt-container">
            <Stack spacing="4">
                {fast_prompts.slice(0, rows).map((prompt, index) => (
                    <ButtonGroup key={index} flexDirection={isMobile ? "column" : "row"} borderRadius="md">
                        <Button
                            flex={isMobile ? "none" : "1"}
                            colorScheme="blue"
                            borderRadius="md"
                            whiteSpace="normal"
                            wordWrap="break-word"
                        >
                            {prompt.fast_prompt_text}
                        </Button>
                        {fast_prompts[index + 1] && !isMobile &&
                            <Button
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
        </div>
    );
}
