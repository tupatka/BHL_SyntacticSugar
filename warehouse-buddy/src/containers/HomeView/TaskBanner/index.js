import './index.css';
import { Button, Fade, ScaleFade, Slide, SlideFade, Collapse, Box,  useDisclosure  } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'

import{Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import { AllTasksList } from './AllTasksList';

export const TaskBanner = () => {

    let tasks = ["Zapakuj paczki z magazynu", "Odbierz dziecko z przedszkola", "task3", "task4"];
    let dropped = false;

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div class="task-banner-container">
            <Card>
                <CardBody>
                    <span> {tasks[0]} </span>
                    <IconButton
                        onClick={onOpen}
                        colorScheme='blue'
                        aria-label='Search database'
                        icon={<ArrowForwardIcon />}
                        size="sm"
                    />
                </CardBody>
            </Card>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>All Tasks</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AllTasksList></AllTasksList>
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