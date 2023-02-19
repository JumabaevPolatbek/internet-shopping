import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { CookiesProvider } from 'react-cookie';
// notification
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <CookiesProvider>
        <ToastContainer/>
        <BrowserRouter>

            <ProSidebarProvider>
              <App />
            </ProSidebarProvider>

        </BrowserRouter>
    </CookiesProvider>
      </Provider>
);


