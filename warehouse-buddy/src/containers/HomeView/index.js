
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ChatInput } from './ChatInput';
import { FastPromptSection } from './FastPromptSection';
import { TaskBanner } from './TaskBanner';
import { SpeechToText } from './ChatInput/SpeechToText';

import './index.css';

export const HomeView = ({tasks}) => {
    return (
        <div class="home-view-container">
            <TaskBanner tasks={tasks} /> 
            <FastPromptSection />
            <ChatInput />
        </div>
    );
}