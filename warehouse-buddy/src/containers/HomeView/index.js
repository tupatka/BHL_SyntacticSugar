
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ChatInput } from './ChatInput';
import { FastPromptSection } from './FastPromptSection';
import { TaskBanner } from './TaskBanner';
import { SpeechToText } from './ChatInput/SpeechToText';
import { Divider, Stack } from '@chakra-ui/react'

import './index.css';
import { TicketSystem } from './TicketSystem';

export const HomeView = ({ tasks }) => {
    return (
        <div class="home-view-container">
            <Stack spacing={4}>
                <TaskBanner tasks={tasks} />
                <TicketSystem />
<<<<<<< HEAD
                <div class="chat-container">
                    <FastPromptSection />
                    <Divider id="chat-divider"/>
                    <ChatInput />
                </div>
=======
                <FastPromptSection tasks={tasks} />
                <ChatInput tasks={tasks} />
>>>>>>> main
            </Stack>
        </div>
    );
}