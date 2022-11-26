import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { VideoPlayer } from './VideoPlayer';

export const ProjectItem = (props) => {
    React.useEffect(() => {
        if(props.active && props.hidden) props.setActiveProjectId("");
    }, [props, props.active, props.hidden]);

    return (
        <div className={"project-item " + (props.active ? "active " : "") + (props.hidden ? "hidden " : "")}>
            <div className="project-item-card">
                <div className="project-video-container">
                    <VideoPlayer src={props.project.projectVideoUrl} project={props.project} active={props.active} setActiveProjectId={props.setActiveProjectId} />
                </div>
                <div className="project-details">
                    <p className="project-title single-line-text">{props.project.projectTitle}</p>
                    <p className="project-date single-line-text"><FaCalendarCheck />{props.project.projectDate}</p>
                </div>
            </div>
        </div>
    )
}


/* 

<video className="project-vdo" preload="auto" loop muted={isMuted} controls={false} ref={vdoRef} onTimeUpdate={() => vdoRef.current.currentTime = parseInt(vdoRef.current.currentTime)} >
                        <source src={props.project.projectVideoUrl}></source>
                    </video>
                    <div className="project-vdo-overlay">
                        {props.active ?
                            <div className="controller">
                                <div className="main-buttons">
                                    <MdReplay10 className="control-btn" onClick={() => vdoRef.current.currentTime -= 10} />
                                    {isPlaying ? <MdPause className="control-btn" onClick={() => setPlaying(!isPlaying)} /> : <MdPlayArrow className="control-btn" onClick={() => setPlaying(!isPlaying)} />}
                                    <MdForward10 className="control-btn" onClick={() => vdoRef.current.currentTime += 10} />
                                </div>
                                <div className="buttons">
                                    <div className="left-buttons">
                                        <div className="timestamp">
                                            <span id="played" >{secondsToTime(vdoRef.current.currentTime)}</span> / <span id="duration">{secondsToTime(vdoRef.current.duration)}</span>
                                        </div>
                                    </div>
                                    <div className="right-buttons">
                                        <a target="_blank" rel="noopener noreferrer" href={props.project.linkedinLink}><AiFillLinkedin className="control-btn" /></a>
                                        <a target="_blank" rel="noopener noreferrer" href={props.project.githubLink}><AiFillGithub className="control-btn" /></a>
                                        <MdSpeed className={(speed === 1) ? "control-btn" : "control-btn active"} onClick={()=> setSpeed(((speed+2)%2)+1) } />
                                        {isMuted ? <MdVolumeOff className="control-btn" onClick={() => setMuted(!isMuted)} /> : <MdVolumeUp className="control-btn" onClick={() => setMuted(!isMuted)} />}
                                        <MdFullscreenExit className="control-btn" onClick={() => props.setActiveProjectId("")} />
                                    </div>
                                </div>
                                <input type="range" className="vdo-progress" min="0" max={parseInt(vdoRef.current.duration)} value={parseInt(vdoRef.current.currentTime)} onChange={(e) => vdoRef.current.currentTime = e.target.value} />
                            </div>
                            :
                            <div className="info-buttons">
                                <a target="_blank" rel="noopener noreferrer" href={props.project.linkedinLink}><AiFillLinkedin className="control-btn" /></a>
                                <MdFullscreen className="control-btn" onClick={() => props.setActiveProjectId(props.project._id)} />
                                <a target="_blank" rel="noopener noreferrer" href={props.project.githubLink}><AiFillGithub className="control-btn" /></a>
                            </div>
                        }
                    </div>

*/