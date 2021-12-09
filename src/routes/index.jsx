import React from 'react'

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import './styles.css'

import { routes } from './routes';
import Header from '../components/header';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {routes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default Router
