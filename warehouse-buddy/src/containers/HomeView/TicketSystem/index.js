import './index.css';
import { Button, useDisclosure, Flex, Spacer } from '@chakra-ui/react'

import{Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { sendTicket } from '../../../redux/openai_api/actions';

export const TicketSystem = () => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()
    let categories = ["test1", "test2", "test3"]
    const list = []
    categories.forEach((el) => {
        list.push(
            <option value={el}>{el}</option>)
    })

    const onSend = () => {
            // Send data to the backend via POST
            console.log("hejka");
            dispatch(sendTicket("cokolwiek"));
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