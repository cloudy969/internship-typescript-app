import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import 'antd/dist/antd.min.css'
import {QueryClient, QueryClientProvider} from "react-query";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {GoogleOAuthProvider} from "@react-oauth/google";

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId={'697645029989-4n6jih11qhigv68dv5v66pe12iclja85.apps.googleusercontent.com'}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </QueryClientProvider>
        </GoogleOAuthProvider>
    </Provider>


);

reportWebVitals();
