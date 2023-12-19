import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import { Helmet } from 'react-helmet';
import Header from './utils/components/header/Header';
import App from './App';
import Footer from './utils/components/footer/Footer';
import { OrderArrayProvider } from '../src/utils/components/OrderArray';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <OrderArrayProvider>
            <BrowserRouter>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Main page</title>
                </Helmet>
                <div className="wrapper">
                    <Header />
                    <main>
                        <App />
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </OrderArrayProvider>
    </React.StrictMode>
);
