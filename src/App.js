import './App.css';
import React from 'react';
import { Sections } from './Components/Sections';
import { Main } from './Components/Main';
import { FullscreenProject } from './Components/FullscreenProject';
import { FullscreenCertificate } from './Components/FullscreenCertificate';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Apis from './Apis';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} >
                    <Route path="/" element={<Sections  />} />
                    <Route path="/projects/:id" element={<FullscreenProject />} />
                    <Route path="/certificates/:id" element={<FullscreenCertificate />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
