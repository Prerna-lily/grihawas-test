import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FormProvider } from './FormContext';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>  {/* Wrap with BrowserRouter */}
            <FormProvider>
                <App />
            </FormProvider>
        </BrowserRouter> {/* Close BrowserRouter */}
    </React.StrictMode>
);