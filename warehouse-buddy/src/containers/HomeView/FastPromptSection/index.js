import './index.css';
import { Flex, Button, Stack, Box, ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";


export const FastPromptSection = () => {
    return (
        <div class="fast-prompt-container">
                    <Flex  alignItems="center" justifyContent="center">
            <ButtonGroup gap="4">
              <Button colorScheme="yellow">WhiteAlpha</Button>
              <Button colorScheme="blue">BlackAlpha</Button>
            </ButtonGroup>
            </Flex>

        </div>

    );
}