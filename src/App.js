import './App.css';
import React from 'react';
import { Sections } from './Components/Sections';
import { Main } from './Components/Main';
import { FullscreenProject } from './Components/FullscreenProject';
import { FullscreenCertificate } from './Components/FullscreenCertificate';
import {Routes, Route, Navigate, HashRouter} from "react-router-dom";

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main />} >
                    <Route path="/projects/:id" element={<FullscreenProject />} />
                    <Route path="/certificates/:id" element={<FullscreenCertificate />} />
                    <Route path="/" element={<Sections  />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>

            </Routes>

        </HashRouter>
    );
}

export default App;
