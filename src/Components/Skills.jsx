import React from 'react'
import { SkillItemNormal } from './SkillItemNormal'
import { SkillItemClickable } from './SkillItemClickable'

export const Skills = (props) => {
	return (
		<section id="skills">
			<h1 className="heading ">Skills</h1>
			<div className="main-body">
				<div className="sub-heading-container">
					<h2 className="sub-heading ">Languages &amp; Frameworks</h2>
					{props.languages.map((skill) => (<SkillItemNormal key={skill._id} skill={skill} />))}
				</div>
				<div className="sub-heading-container">
					<h2 className="sub-heading ">Databases</h2>
					{props.databases.map((skill) => (<SkillItemNormal key={skill._id} skill={skill} />))}
				</div>
				<div className="sub-heading-container">
					<h2 className="sub-heading ">Profiles</h2>
					{props.profiles.map((skill) => (<SkillItemClickable key={skill._id} skill={skill} />))}
				</div>
			</div>
		</section>
	)
}
