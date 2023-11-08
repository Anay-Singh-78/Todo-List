import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { ChngContextProvider} from './context/Toggle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <ContextProvider>
        <App/>
        </ContextProvider>
        <ToastContainer/>
    </div>

);