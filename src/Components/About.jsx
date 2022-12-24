import React from 'react';
import { EducationItem } from './EducationItem';
import { ExperienceItem } from './ExperienceItem';

export const About = ({educations, experiences}) => {

	return (
		<section id="about">
			<h1 className="heading ">About Me</h1>
			<div className="main-body">
				<div className="description">
					<ul className="my-info">
						<li>Name: <span>Prasun Sarkar</span></li>
						<li>Age: <span>{Math.abs(new Date(Date.now() - new Date(2002, 9 - 1, 12).getTime()).getFullYear() - 1970)}</span></li>
						<li>Qualification: <span>B.Tech (CSE)</span></li>
						<li>Passion: <span>Programming | Development</span></li>
						<li>Main Skill: <span>Android Development</span></li>
						<li>Language: <span>Bengali, Hindi, English</span></li>
					</ul>
					<div className="vartical-divider"></div>
					<p>I am Prasun Sarkar, from Nabadwip Nadia. I am a student of JIS College of Engineering, Kalyani, Nadia. I am pursuing my BTech in CSE. Coding is my passion, specifically, I love to do projects based on DSA, Android App development, Web App Development, Java, Python, JavaScript, C, C++, etc. I can also use some frameworks such as Django, React JS, Node JS, etc. Doing projects on these topics always boosts my confidence and I feel energetic. I always think about some new project ideas and try to make that into reality.</p>
				</div>
				<div className="partition-container">
					<div className="partition-left">
						<h2 className="sub-heading">Education</h2>
						<div className="educations-container">
							{educations.map((education) => (<EducationItem key={education._id} education={education} />))}
						</div>
					</div>
					<div className="partition-right">
						<h2 className="sub-heading">Experience</h2>
						<div className="experience-container">
							{experiences.length === 0 ? <p>I'm still a fresher.</p> :  experiences.map((experience) => (<ExperienceItem key={experience._id} experience={experience} />))}
						</div>
					</div>
				</div>
			</div>
		</section >
	)
}
