import React from 'react';
import { BsBriefcaseFill } from 'react-icons/bs';

export const ExperienceItem = (props) => {
	return (
		<div className="experience-item">
			<div className="experience-item-top">
				<BsBriefcaseFill />
				<div className="experience-item-details">
					<p className="experience-title single-line-text">{props.experience.title}</p>
					<p className="experience-date single-line-text"> {props.experience.startingYear} - {((props.experience.completionYear) ? props.experience.completionYear : "ongoing")} &#8226; {props.experience.organisation}</p>
				</div>
			</div>
			<p className="experience-description">{props.experience.description}</p>
		</div>
	)
}
