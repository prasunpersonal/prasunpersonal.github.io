import React from 'react'

export const SkillItemClickable = (props) => {
    return (
        <div className="skill-item">
            <a className='skill-image-link' href={props.skill.skillLink} target="_blank" rel="noopener noreferrer">
                <div className="skill-item-img-container">
                    <img src={props.skill.skillImageUrl} alt={props.skill.skillName} />
                </div>
            </a>
            <a className='skill-title-link' href={props.skill.skillLink} target="_blank" rel="noopener noreferrer"><p className="skill-title single-line-text">{props.skill.skillName}</p></a>
        </div>
    )
}
