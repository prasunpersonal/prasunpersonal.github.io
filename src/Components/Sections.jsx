import React from 'react'
import Apis from '../Apis';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Contact } from './Contact';


export const Sections = (props) => {
	const [educations, addEducations] = React.useState([]);
	const [experiences, addExperiences] = React.useState([]);
	const [projects, addProjects] = React.useState([]);
	const [certificates, addCertificates] = React.useState([]);
	const [categories, addCategories] = React.useState([]);
	const [languages, addLanguages] = React.useState([]);
	const [databases, addDatabases] = React.useState([]);
	const [profiles, addProfiles] = React.useState([]);

	React.useEffect(() => {
		fetch(Apis.GET_ALL_EDUCATIONS).then((res) => res.json()).then((educations) => {
			addEducations(educations);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(Apis.GET_ALL_EXPERIENCES).then((res) => res.json()).then((experiences) => {
			addExperiences(experiences);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(Apis.GET_ALL_PROJECTS).then((res) => res.json()).then((projects) => {
			addProjects(projects);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(Apis.GET_ALL_CATEGORIES).then((res) => res.json()).then((categories) => {
			addCategories(categories);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(Apis.GET_ALL_CERTIFICATES).then((res) => res.json()).then((certificate) => {
			addCertificates(certificate);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(Apis.GET_ALL_LANGUAGES).then((res) => res.json()).then((languages) => {
			addLanguages(languages);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(Apis.GET_ALL_DATABASES).then((res) => res.json()).then((databases) => {
			addDatabases(databases);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(Apis.GET_ALL_PROFILES).then((res) => res.json()).then((profiles) => {
			addProfiles(profiles);
		}).catch((e) => console.log(e));
	}, []);

	return (
		<div className="sections">
			<Home />
			<About educations={educations} experiences={experiences} />
			<Projects projects={projects} categories={categories} />
			<Skills languages={languages} databases={databases} profiles={profiles} certificates={certificates} />
			<Contact />
		</div>
	)
}
