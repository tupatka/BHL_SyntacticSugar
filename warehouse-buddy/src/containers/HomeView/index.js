
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ChatInput } from './ChatInput';
import { FastPromptSection } from './FastPromptSection';
import { TaskBanner } from './TaskBanner';
import { SpeechToText } from './ChatInput/SpeechToText';
import { Stack } from '@chakra-ui/react'

import './index.css';

export const HomeView = ({ tasks }) => {
    return (
        <div class="home-view-container">
            <Stack spacing={4}>
                <TaskBanner tasks={tasks} />
                <FastPromptSection />
                <ChatInput />
            </Stack>
        </div>
    );
}