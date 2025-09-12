import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Projects from "./components/Projects"
import Homepage from './components/Homepage';
import Publications from "./components/Publications"
import Header from './components/Header';
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link href="/dist/output.css" rel="stylesheet"/>
        </head>
        <div className="h-full flex flex-col bg-neutral w-full overflow-x-hidden">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="Publications" element={<Publications/>}/>
                    <Route path="aboutme" element={<AboutMe/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    </React.StrictMode>

);
