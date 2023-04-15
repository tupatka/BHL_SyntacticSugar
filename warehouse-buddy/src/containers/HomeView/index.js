
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Stack } from "@chakra-ui/react";
import { ChatInput } from './ChatInput';
import { FastPromptSection } from './FastPromptSection';
import { TaskBanner } from './TaskBanner';

import './index.css';

export const HomeView = ({ tasks }) => {
    return (
        <div class="home-view-container">
            <Stack spacing="4">
                <TaskBanner tasks={tasks} />
                <FastPromptSection />
                <ChatInput />
            </Stack>
        </div>
    );
}