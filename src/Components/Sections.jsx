import React from 'react'
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Contact } from './Contact';

export const Sections = ({educations, experiences, categories, projects, languages, databases, profiles, certificates}) => {
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
