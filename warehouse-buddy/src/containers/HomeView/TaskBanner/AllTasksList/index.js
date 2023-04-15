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
    let first = tasks[0];
    let rest_tasks = tasks.slice(1);
    const list = []

    rest_tasks.forEach((task) => {
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
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    <b id="current-task"> {first} </b>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Test
                </AccordionPanel>
            </AccordionItem>
            {list}
        </Accordion>
    );
}