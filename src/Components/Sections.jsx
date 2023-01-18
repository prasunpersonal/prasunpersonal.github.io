import React from 'react'
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Contact } from './Contact';
import Apis from "../Apis";

export const Sections = () => {
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

	return (
		<div className="sections">
			<Home />
			<About educations={educations} experiences={experiences} />
			<Projects categories={categories} allProjects={projects} />
			<Skills languages={languages} databases={databases} profiles={profiles} certificates={certificates} />
			<Contact />
		</div>
	)
}
