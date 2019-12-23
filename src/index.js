import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ClassesProvider } from './contexts/ClassesContext'
import App from './App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <ClassesProvider>
                <App />
        </ClassesProvider>
    </BrowserRouter>, 
    document.getElementById('root'));
