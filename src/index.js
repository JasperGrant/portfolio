import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Projects from "./components/Projects"
import Homepage from './components/Homepage';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link href="/dist/output.css" rel="stylesheet"/>
        </head>
        <div className="h-screen flex flex-col">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="projects" element={<Projects/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    </React.StrictMode>
);
