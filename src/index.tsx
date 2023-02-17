import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { CookiesProvider } from 'react-cookie';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>

            <ProSidebarProvider>
              <App />
            </ProSidebarProvider>

        </BrowserRouter>
      </Provider>
    </CookiesProvider>
);


