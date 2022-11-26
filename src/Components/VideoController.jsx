import React from 'react';
import { MdForward10, MdReplay10, MdPlayArrow, MdPause, MdVolumeUp, MdVolumeOff, MdFullscreen, MdFullscreenExit, MdSpeed } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export const VideoController = ({ vdoRef, active, project, setActiveProjectId }) => {
    const [isPlaying, setPlaying] = React.useState(false);
    const [isMuted, setMuted] = React.useState(true);
    const [progress, setProgress] = React.useState(0);
    const [speed, setSpeed] = React.useState(1);

    React.useEffect(() => {
        setMuted(!active);
        setPlaying(active);
        setProgress(0);
        setSpeed(1);
    }, [active]);

    React.useEffect(() => {
        if (isPlaying) vdoRef.current.play();
        else vdoRef.current.pause();
    }, [vdoRef, isPlaying]);

    React.useEffect(() => {
        vdoRef.current.muted = isMuted;
    }, [vdoRef, isMuted]);

    React.useEffect(() => {
        vdoRef.current.playbackRate = speed;
    }, [vdoRef, speed]);

    React.useEffect(() => {
        const timerID = setInterval(() => setProgress(vdoRef.current.currentTime), 1000)
        return () => {
            clearInterval(timerID)
        }
    }, [vdoRef])

    const updateProgress = (val) => {
        vdoRef.current.currentTime = val; 
        setProgress(val);
    }

    const secondsToTime = (secs) => {
        var hours = Math.floor(secs / 3600);
        var divisor_for_minutes = secs % 3600;
        var minutes = Math.floor(divisor_for_minutes / 60);
        var divisor_for_seconds = divisor_for_minutes % 60;
        var seconds = Math.ceil(divisor_for_seconds);
        return (hours > 0) ? hours + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2)
            : ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    }

    return (
        <div className="project-vdo-overlay">
            {active ?
                <div className="controller">
                    <div className="main-buttons">
                        <MdReplay10 className="control-btn" onClick={() => updateProgress(vdoRef.current.currentTime - 10)} />
                        {isPlaying ? <MdPause className="control-btn" onClick={() => setPlaying(false)} /> : <MdPlayArrow className="control-btn" onClick={() => setPlaying(true)} />}
                        <MdForward10 className="control-btn" onClick={() => updateProgress(vdoRef.current.currentTime + 10)} />
                    </div>
                    <div className="buttons">
                        <div className="left-buttons">
                            <div className="timestamp">
                                <span id="played" >{secondsToTime(vdoRef.current.currentTime)}</span> / <span id="duration">{secondsToTime(vdoRef.current.duration)}</span>
                            </div>
                        </div>
                        <div className="right-buttons">
                            <a target="_blank" rel="noopener noreferrer" href={project.linkedinLink}><AiFillLinkedin className="control-btn" /></a>
                            <a target="_blank" rel="noopener noreferrer" href={project.githubLink}><AiFillGithub className="control-btn" /></a>
                            <MdSpeed className={(speed === 1) ? "control-btn" : "control-btn active"} onClick={() => setSpeed(((speed + 2) % 2) + 1)} />
                            {isMuted ? <MdVolumeOff className="control-btn" onClick={() => setMuted(false)} /> : <MdVolumeUp className="control-btn" onClick={() => setMuted(true)} />}
                            <MdFullscreenExit className="control-btn" onClick={() => setActiveProjectId("")} />
                        </div>
                    </div>
                    <input type="range" className="vdo-progress" min={0} max={vdoRef.current.duration} value={progress} onChange={(e)=> updateProgress(e.target.value)} />
                </div>
                :
                <div className="info-buttons">
                    <a target="_blank" rel="noopener noreferrer" href={project.linkedinLink}><AiFillLinkedin className="control-btn" /></a>
                    <MdFullscreen className="control-btn" onClick={() => setActiveProjectId(project._id)} />
                    <a target="_blank" rel="noopener noreferrer" href={project.githubLink}><AiFillGithub className="control-btn" /></a>
                </div>
            }
        </div>
    )
}
