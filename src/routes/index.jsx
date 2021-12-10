import React from 'react'

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import './styles.css'

import { routes } from './routes';
import Header from '../components/header';
import { CartContextProvider } from '../contexts/CartContext';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <CartContextProvider>
                <Routes>
                    {routes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    )
}

export default Router
