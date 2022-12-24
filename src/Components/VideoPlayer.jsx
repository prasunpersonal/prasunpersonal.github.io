import React from 'react';

export const VideoPlayer = ({ src }) => {
    const vdoRef = React.useRef(null);
    React.useEffect(()=> {
        vdoRef.current.load();
    }, [src])

    return (
        <video className="fullscreen-vdo" preload="auto" controls autoPlay controlsList="nofullscreen nodownload" ref={vdoRef} >
            <source src={src}></source>
        </video>
    )
}
