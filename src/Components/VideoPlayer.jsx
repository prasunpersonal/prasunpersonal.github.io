import React from 'react';
import { VideoController } from './VideoController';

export const VideoPlayer = ({src, project, active, setActiveProjectId}) => {
    const vdoRef = React.useRef(null);

    return (
        <>
            <video loop className="project-vdo" preload="auto" muted={vdoRef.muted} controls={false} ref={vdoRef} >
                <source src={src}></source>
            </video>
            <VideoController vdoRef={vdoRef} active={active} project={project} setActiveProjectId={setActiveProjectId} />
        </>
    )
}
