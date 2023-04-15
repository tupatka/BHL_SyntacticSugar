import './index.css';
import { Input } from '@chakra-ui/react'


export const ChatInput = () => {
    return (
        <div class="chat-input-container">
            <Input placeholder='Enter question' />
        </div>
    );
}