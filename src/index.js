import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ClassesProvider } from './contexts/ClassesContexts'
import { HomeworkProvider} from './contexts/HomeworkContexts'
import App from './App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <ClassesProvider>
            <HomeworkProvider>
                <App />

            </HomeworkProvider>
        </ClassesProvider>
    </BrowserRouter>, 
    document.getElementById('root'));
