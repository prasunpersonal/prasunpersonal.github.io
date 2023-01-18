import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { FaCalendarCheck } from 'react-icons/fa';
import { SlGlobe } from 'react-icons/sl'
import {useNavigate, useParams} from 'react-router-dom';
import Apis from "../Apis";

export const FullscreenCertificate = () => {
    const [certificate, setCertificate] = React.useState(null);
    const navigate = useNavigate();
    const {id} = useParams();

    React.useEffect(() => {
        fetch(Apis.GET_CERTIFICATE.concat(id)).then(res => res.json()).then(c => {
            setCertificate(c);
        }).catch(e => {
            alert(e.message);
            navigate(-1);
        })
    }, [id, navigate])

    return (
        <section id="fullScreenCertificates">
            <div className="topbar">
                <MdArrowBack className="back-btn" onClick={(e) => navigate(-1)} />
                <div className="topbarHeadingSection">
                    <p className="topbarHeading">{(certificate) ? certificate.certificateName : ""}</p>
                    <p className="topbarSubHeading"><FaCalendarCheck /> {(certificate) ? certificate.certificateDate : ""}</p>
                </div>
                <div className="topbarOptions">
                    <a target="_blank" rel="noopener noreferrer" href={(certificate) ? certificate.certificateLink : ""}><SlGlobe className="menu-btn" /></a>
                </div>
            </div>
            <div className="fullscreenArea">
                <img className="fullscreenCertificate" draggable={false} src={(certificate) ? certificate.certificateImage : ""} alt={(certificate) ? certificate.certificateName : ""} />
            </div>
        </section>
    )
}
