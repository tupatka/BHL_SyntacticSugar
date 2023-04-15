import './index.css';
import { Button, Fade, ScaleFade, Slide, SlideFade, Collapse, Box,  useDisclosure  } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'

import{Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import { AllTasksList } from './AllTasksList';

export const TaskBanner = () => {

    let tasks = ["Zapakuj paczki z magazynu", "Odbierz dziecko z przedszkola", "task3", "task4"];
    let dropped = false;

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div class="task-banner-container">
            <Button onClick={onOpen}><ChevronUpIcon/></Button>
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