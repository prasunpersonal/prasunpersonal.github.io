import React from 'react'

export const ProjectItem = (props) => {
    const [isActive, setActive] = React.useState(false);

    return (
        <div className={isActive ? "project-item active" : "project-item"}>
            <div className="project-item-card">
                <div className="project-video-container">
                    <video className="project-vdo" autoPlay muted={!isActive} loop controls={isActive}>
                        <source src={props.project.projectVideoUrl}></source>
                    </video>
                    <div className="project-info">
                        <a target="_blank" rel="noopener noreferrer" href={props.project.linkedinLink}><i class="fa-brands fa-linkedin"></i></a>
                        <i class={isActive ? "fa-solid fa-compress" : "fa-solid fa-expand"} onClick={()=> setActive(!isActive)}></i>
                        <a target="_blank" rel="noopener noreferrer" href={props.project.githubLink}><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="project-details">
                    <p className="project-title single-line-text">{props.project.projectTitle}</p>
                    <p className="project-date single-line-text"><i className="fa-regular fa-calendar-check"></i>{props.project.projectDate}</p>
                </div>
            </div>
        </div>
    )
}
