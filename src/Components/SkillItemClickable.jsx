import React from 'react'

export const SkillItemClickable = (props) => {
    return (
        <div className="skill-item">
            <a href={props.skill.skillLink} target="_blank" rel="noopener noreferrer">
                <div className="skill-item-img-container">
                    <img src={props.skill.skillImageUrl} alt={props.skill.skillName} />
                </div>
            </a>
            <a href={props.skill.skillLink} target="_blank" rel="noopener noreferrer"><p className="">{props.skill.skillName}</p></a>
        </div>
    )
}
