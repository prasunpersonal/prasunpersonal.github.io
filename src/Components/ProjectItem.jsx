import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdFullscreen } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const ProjectItem = (props) => {
    const vdoRef = React.useRef(null);
    const navigate = useNavigate();

    return (
        <div className={"project-item " + (props.active ? "active " : "") + (props.hidden ? "hidden " : "")}>
            <div className="project-item-card">
                <div className="project-video-container">
                    <video loop className="project-vdo" preload="auto" muted={vdoRef.muted} controls={false} ref={vdoRef} >
                        <source src={props.project.projectVideo}></source>
                    </video>
                    <div className="project-vdo-overlay">
                        <div className="info-buttons">
                            <a target="_blank" rel="noopener noreferrer" href={props.project.linkedinLink}><AiFillLinkedin className="control-btn" /></a>
                            <MdFullscreen className="control-btn" onClick={() => navigate({pathname: '/projects', search:('?index=' + props.index)})} />
                            <a target="_blank" rel="noopener noreferrer" href={props.project.githubLink}><AiFillGithub className="control-btn" /></a>
                        </div>
                    </div>
                </div>
                <div className="project-details">
                    <p className="project-title single-line-text">{props.project.projectTitle}</p>
                    <p className="project-date single-line-text"><FaCalendarCheck />{props.project.projectDate}</p>
                </div>
            </div>
        </div>
    )
}