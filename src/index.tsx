import React from 'react';
import { createRoot } from 'react-dom/client';
import { Web3ReactProvider } from '@web3-react/core';

import { getLibrary } from './utils/web3React';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { ToastsProvider } from './components/Toast';
import { ModalProvider } from './components/Modal';
import GlobalStyle from './theme/GlobalStyle';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './theme';
import ToastListener from './components/Toast/Listener';

const root = createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
            <ToastsProvider>
                <ThemeProvider>
                    <ModalProvider>
                        <HashRouter>
                            <GlobalStyle />
                            <App />
                            <ToastListener />
                        </HashRouter>
                    </ModalProvider>
                </ThemeProvider>
            </ToastsProvider>
        </Web3ReactProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
