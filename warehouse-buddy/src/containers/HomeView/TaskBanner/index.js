import './index.css';
import { Button, useDisclosure, Flex, Spacer } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Card, CardBody } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'

import{Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import { AllTasksList } from './AllTasksList';

export const TaskBanner = ({tasks}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div class="task-banner-container">
            <Card style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                <CardBody>
                    <Flex>
                        <b id="current-task">
                            {tasks.length === 0 ? (
                                <span> No tasks </span>
                            ) : (
                                <span> {tasks[0].title} </span>
                            )
                            }
                        </b>
                        <Spacer />
                        <IconButton
                            onClick={onOpen}
                            colorScheme='blue'
                            aria-label='Search database'
                            icon={<ArrowForwardIcon />}
                            size="sm"
                        />
                    </Flex>
                </CardBody>
            </Card>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>All Tasks</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AllTasksList tasks={tasks} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}