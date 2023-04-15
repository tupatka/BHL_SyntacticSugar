import './index.css';
import { Box } from '@chakra-ui/react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

export const AllTasksList = () => {

    let tasks = ["Zapakuj paczki z magazynu", "Odbierz dziecko z przedszkola", "task3", "task4"];
    const list = []

    tasks.forEach((task) => {
        list.push(
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    {task}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Test
                </AccordionPanel>
            </AccordionItem>)
    })


    return (
        <Accordion>
            {list}
        </Accordion>
    );
}