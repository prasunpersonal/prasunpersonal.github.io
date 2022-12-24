import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { FaCalendarCheck } from 'react-icons/fa';
import { SlGlobe } from 'react-icons/sl'
import { useNavigate, useSearchParams } from 'react-router-dom';

export const FullscreenCertificate = ({ certificates }) => {
    const [query] = useSearchParams();
    const index = query.get('index');
    const certificate = certificates[index];
    const navigate = useNavigate();
    return (
        <section id="fullScreenCertificates">
            <div className="topbar">
                <MdArrowBack className="back-btn" onClick={(e) => navigate(-1)} />
                <div className="topbarHeadingSection">
                    <p className="topbarHeading">{(certificate === null || certificate === undefined) ? "" : certificate.certificateName}</p>
                    <p className="topbarSubHeading"><FaCalendarCheck /> {(certificate === null || certificate === undefined) ? "" : certificate.certificateDate}</p>
                </div>
                <div className="topbarOptions">
                    <a target="_blank" rel="noopener noreferrer" href={(certificate === null || certificate === undefined) ? "" : certificate.certificateLink}><SlGlobe className="menu-btn" /></a>
                </div>
            </div>
            <div className="fullscreenArea">
                <img className="fullscreenCertificate" draggable={false} src={(certificate === null || certificate === undefined) ? "" : certificate.certificateImage} alt={(certificate === null || certificate === undefined) ? "" : certificate.certificateName} />
            </div>
            <div className="controlButtons">
                <button className={(parseInt(index) === 0) ? "btn disabled" : "btn"} onClick={() => navigate({pathname: '/certificates', search:('?index=' + (parseInt(index)-1))}, {replace: true})}>Prev</button>
                <button className={(parseInt(index) === certificates.length-1) ? "btn disabled" : "btn"} onClick={() => navigate({pathname: '/certificates', search:('?index=' + (parseInt(index)+1))}, {replace: true})}>Next</button>
            </div>
        </section>
    )
}
