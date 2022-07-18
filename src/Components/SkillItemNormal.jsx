import React from 'react'

export const SkillItemNormal = (props) => {
    return (
        <div className="skill-item">
            <div className="skill-item-img-container">
                <img src={props.skill.skillImageUrl} alt={props.skill.skillName} />
            </div>
            <p className="skill-title single-line-text">{props.skill.skillName}</p>
        </div>
    )
}