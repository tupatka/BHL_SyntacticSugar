import './index.css';
import { Button, useDisclosure, Flex, Spacer } from '@chakra-ui/react'

import{Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'



export const TicketSystem = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let categories = ["test1", "test2", "test3"]
    const list = []
    categories.forEach((el) => {
        list.push(
            <option value={el}>{el}</option>)
    })

    const onSend = () => {
        onClose();
    }

    return (
        <div class="ticket-system-container">
            <Button onClick={onOpen} colorScheme="blue" variant="outline">Report Issue</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader />
                    <ModalCloseButton />
                    <ModalBody>
                        <Select placeholder='Ticket type'>
                            {list}
                        </Select>   
                        <Textarea placeholder='Write your description here.' size='md' h='calc(60vh)' />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onSend}>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}