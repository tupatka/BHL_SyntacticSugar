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
                    <Flex  alignItems="center" justifyContent="center">
            <ButtonGroup gap="4">
              
              <Button colorScheme="yellow">{fast_prompts.length === 0 ? "No prompts" : fast_prompts[0].fast_prompt_text}</Button>
              <Button colorScheme="blue">BlackAlpha</Button>
            </ButtonGroup>
            </Flex>

        </div>

    );
}