import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const CertificateItem = (props) => {
    const navigate = useNavigate();
    return (
        <div className={"certificate-item " + (props.hidden ? "hidden" : "")}>
            <img className="certificate-img" draggable={false} src={props.certificate.certificateImage} alt={props.certificate.certificateName} onClick={()=> navigate({pathname: '/certificates', search:('?index=' + props.index)})}  />
            <div className="certificate-details">
                <p className="certificate-title single-line-text">{props.certificate.certificateName}</p>
                <p className="certificate-date single-line-text"><FaCalendarCheck/>{props.certificate.certificateDate}</p>
            </div>
        </div>
    )
}
