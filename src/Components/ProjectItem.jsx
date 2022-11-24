import React from 'react';
import { MdForward10, MdReplay10, MdPlayArrow, MdPause, MdVolumeUp, MdVolumeOff, MdFullscreen, MdFullscreenExit, MdSpeed } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaCalendarCheck } from 'react-icons/fa';

export const ProjectItem = (props) => {
    const vdoRef = React.useRef(null);
    const [isPlaying, setPlaying] = React.useState(false);
    const [isMuted, setMuted] = React.useState(true);
    const [progress, setProgress] = React.useState(0);
    const [speed, setSpeed] = React.useState(1);

    React.useEffect(() => {
        setMuted(!props.active);
        setProgress(0);
        setPlaying(props.active);
        setSpeed(1);
    }, [props.active]);

    React.useEffect(() => {
        if (isPlaying) vdoRef.current.play();
        else vdoRef.current.pause();
    }, [isPlaying]);

    React.useEffect(() => {
        vdoRef.current.playbackRate = speed;
    }, [speed]);

    const secondsToTime = (secs) => {
        var hours = Math.floor(secs / 3600);
        var divisor_for_minutes = secs % 3600;
        var minutes = Math.floor(divisor_for_minutes / 60);
        var divisor_for_seconds = divisor_for_minutes % 60;
        var seconds = Math.ceil(divisor_for_seconds);
        return (hours > 0) ? hours + ":" + ("0"+minutes).slice(-2) + ":" + ("0"+seconds).slice(-2)
            : ("0"+minutes).slice(-2) + ":" + ("0"+seconds).slice(-2);
    }

    return (
        <div className={"project-item " + (props.active ? "active " : "") + (props.hidden ? "hidden " : "")}>
            <div className="project-item-card">
                <div className="project-video-container">
                    <video className="project-vdo" loop muted={isMuted} controls={false} ref={vdoRef} onTimeUpdate={() => setProgress(parseInt(vdoRef.current.currentTime))}>
                        <source src={props.project.projectVideoUrl}></source>
                    </video>
                    <div className="project-info">
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
                                <input type="range" className="vdo-progress" min="0" max={parseInt(vdoRef.current.duration)} value={progress} onChange={(e) => vdoRef.current.currentTime = e.target.value} />
                            </div>
                            :
                            <div className="info-buttons">
                                <a target="_blank" rel="noopener noreferrer" href={props.project.linkedinLink}><AiFillLinkedin className="control-btn" /></a>
                                <MdFullscreen className="control-btn" onClick={() => props.setActiveProjectId(props.project._id)} />
                                <a target="_blank" rel="noopener noreferrer" href={props.project.githubLink}><AiFillGithub className="control-btn" /></a>
                            </div>
                        }
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
