import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { FaCalendarCheck } from 'react-icons/fa';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { VideoPlayer } from './VideoPlayer';

export const FullcreenProject = ({ projects }) => {
    const [query] = useSearchParams();
    const index = query.get('index');
    const project = projects[index];
    const navigate = useNavigate();
    return (
        <section id="fullScreenProjects">
            <div className="topbar">
                <MdArrowBack className="back-btn" onClick={(e) => navigate(-1)} />
                <div className="topbarHeadingSection">
                    <p className="topbarHeading">{(project === null || project === undefined) ? "" : project.projectTitle}</p>
                    <p className="topbarSubHeading"><FaCalendarCheck /> {(project === null || project === undefined) ? "" : project.projectDate}</p>
                </div>
                <div className="topbarOptions">
                    <a target="_blank" rel="noopener noreferrer" href={(project === null || project === undefined) ? "" : project.linkedinLink}><AiFillLinkedin className="menu-btn" /></a>
                    <a target="_blank" rel="noopener noreferrer" href={(project === null || project === undefined) ? "" : project.githubLink}><AiFillGithub className="menu-btn" /></a>
                </div>
            </div>
            <div className="fullscreenArea">
                <VideoPlayer src={(project === null || project === undefined) ? "" : project.projectVideo } />
            </div>
            <div className="controlButtons">
                <button className={(parseInt(index) === 0) ? "btn disabled" : "btn"} onClick={() => navigate({pathname: '/projects', search:('?index=' + (parseInt(index)-1))}, {replace: true})}>Prev</button>
                <button className={(parseInt(index) === projects.length-1) ? "btn disabled" : "btn"} onClick={() => navigate({pathname: '/projects', search:('?index=' + (parseInt(index)+1))}, {replace: true})}>Next</button>
            </div>
        </section>
    )
}
