import React from 'react'

export const ProjectItem = (props) => {
    return (
        <div className="project-item">
            <div className="project-item-card">
                <div className="project-thumbnail">
                    <img draggable={false} src={props.project.projectThumblailUrl} alt={props.project.projectTitle} className="project-img" />
                    <div className="project-info">
                        <a href="/"><i className="fa-solid fa-circle-info"></i></a>
                    </div>
                </div>
                <div className="project-details">
                    <p className="project-title ">{props.project.projectTitle}</p>
                    <p className="project-date ">{props.project.projectDate}</p>
                </div>
            </div>
        </div>
    )
}
