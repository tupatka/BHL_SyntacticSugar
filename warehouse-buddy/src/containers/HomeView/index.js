
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ChatInput } from './ChatInput';
import { FastPromptSection } from './FastPromptSection';
import { TaskBanner } from './TaskBanner';

import './index.css';

export const HomeView = () => {
    return (
        <div class="home-view-container">
            <TaskBanner /> 
            <FastPromptSection />
            <ChatInput />
        </div>
    );
}