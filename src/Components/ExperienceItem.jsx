import React from 'react'

export const ExperienceItem = (props) => {
	return (
		<div className="experience-item">
			<div className="experience-item-top">
				<i className="fa-solid fa-briefcase"></i>
				<div className="experience-item-details">
					<p className="experience-title single-line-text">{props.experience.title}</p>
					<p className="experience-date single-line-text"> {props.experience.startingYear} - {((props.experience.completionYear) ? props.experience.completionYear : "ongoing")} &#8226; {props.experience.organisation}</p>
				</div>
			</div>
			<p className="experience-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde similique neque cumque eos atque esse, a natus quo voluptate ullam magnam illo, omnis nesciunt!</p>
		</div>
	)
}
