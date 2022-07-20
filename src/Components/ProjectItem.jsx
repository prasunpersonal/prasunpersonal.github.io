import React from 'react'

export const ProjectItem = (props) => {
    return (
        <div className="project-item">
            <div className="project-item-card">
                <div className="project-thumbnail">
                    <video className="project-vdo" autoPlay muted loop>
                        <source src={props.project.projectVideoUrl}></source>
                    </video>
                    {/* <img draggable={false} src={props.project.projectThumblailUrl} alt={props.project.projectTitle} className="project-img" /> */}
                    <div className="project-info">
                        <a target="_blank" rel="noopener noreferrer" href={props.project.githubLink}><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="project-details">
                    <p className="project-title single-line-text">{props.project.projectTitle}</p>
                    <p className="project-date single-line-text">{props.project.projectDate}</p>
                </div>
            </div>
        </div>
    )
}
