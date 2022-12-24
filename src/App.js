import './App.css';
import React from 'react';
import { Sections } from './Components/Sections';
import { Main } from './Components/Main';
import { FullcreenProject } from './Components/FullcreenProject';
import { FullscreenCertificate } from './Components/FullscreenCertificate';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Apis from './Apis';

function App() {
	const [educations, addEducations] = React.useState([]);
	const [experiences, addExperiences] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [projects, setProjects] = React.useState([]);
	const [certificates, addCertificates] = React.useState([]);
	const [languages, addLanguages] = React.useState([]);
	const [databases, addDatabases] = React.useState([]);
	const [profiles, addProfiles] = React.useState([]);

	React.useEffect(() => {
		fetch(Apis.GET_ALL_EDUCATIONS).then((res) => res.json()).then(addEducations).catch((e) => console.log(e));
        fetch(Apis.GET_ALL_EXPERIENCES).then((res) => res.json()).then(addExperiences).catch((e) => console.log(e));
        fetch(Apis.GET_ALL_PROJECTS).then((res) => res.json()).then(setProjects).catch((e) => console.log(e));
        fetch(Apis.GET_ALL_CATEGORIES).then((res) => res.json()).then(setCategories).catch((e) => console.log(e));
        fetch(Apis.GET_ALL_CERTIFICATES).then((res) => res.json()).then(addCertificates).catch((e) => console.log(e));
        fetch(Apis.GET_ALL_LANGUAGES).then((res) => res.json()).then(addLanguages).catch((e) => console.log(e));
        fetch(Apis.GET_ALL_DATABASES).then((res) => res.json()).then(addDatabases).catch((e) => console.log(e));
        fetch(Apis.GET_ALL_PROFILES).then((res) => res.json()).then(addProfiles).catch((e) => console.log(e));
	}, []);

    console.log("ok");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} >
                    <Route path="/" element={<Sections educations={educations} experiences={experiences} categories={categories} projects={projects} languages={languages} databases={databases} profiles={profiles} certificates={certificates} />} />
                    <Route path="/projects" element={<FullcreenProject projects={projects} />} />
                    <Route path="/certificates" element={<FullscreenCertificate certificates={certificates} />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
