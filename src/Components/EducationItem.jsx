import React from 'react'

export const EducationItem = (props) => {
	return (
		<div className="education-item">
			<div className="education-item-top">
				<i className="fa-solid fa-graduation-cap"></i>
				<div className="education-item-details">
					<p className="education-title single-line-text">{props.education.title}</p>
					<p className="education-date single-line-text"> {props.education.startingYear} - {((props.education.completionYear) ? props.education.completionYear : "ongoing")} &#8226; {props.education.organisation}</p>
				</div>
			</div>
			<p className="education-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde similique neque cumque eos atque esse, a natus quo voluptate ullam magnam illo, omnis nesciunt!</p>
		</div>
	)
}
