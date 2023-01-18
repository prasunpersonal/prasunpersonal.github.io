import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { FaCalendarCheck } from 'react-icons/fa';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import { VideoPlayer } from './VideoPlayer';
import Apis from "../Apis";

export const FullscreenProject = () => {
    const [project, setProject] = React.useState(null);
    const navigate = useNavigate();
    const {id} = useParams();

    React.useEffect(() => {
        fetch(Apis.GET_PROJECT.concat(id)).then(res => res.json()).then(p => {
            setProject(p);
        }).catch(e => {
            alert(e.message);
            navigate(-1);
        })
    }, [id, navigate])

    return (
        <section id="fullScreenProjects">
            <div className="topbar">
                <MdArrowBack className="back-btn" onClick={(e) => navigate(-1)} />
                <div className="topbarHeadingSection">
                    <p className="topbarHeading">{(project) ? project.projectTitle : ""}</p>
                    <p className="topbarSubHeading"><FaCalendarCheck /> {(project) ? project.projectDate : ""}</p>
                </div>
                <div className="topbarOptions">
                    <a target="_blank" rel="noopener noreferrer" href={(project) ? project.linkedinLink : ""}><AiFillLinkedin className="menu-btn" /></a>
                    <a target="_blank" rel="noopener noreferrer" href={(project) ? project.githubLink : ""}><AiFillGithub className="menu-btn" /></a>
                </div>
            </div>
            <div className="fullscreenArea">
                <VideoPlayer src={(project) ? project.projectVideo : "" } />
            </div>
        </section>
    )
}
