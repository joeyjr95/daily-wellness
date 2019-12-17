import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import {WellnessProvider} from './contexts/WellnessContext';
import './index.css'

ReactDOM.render(
   <WellnessProvider> 
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </WellnessProvider>, 
    document.getElementById('root')
);