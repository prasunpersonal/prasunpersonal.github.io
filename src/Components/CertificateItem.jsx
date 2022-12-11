import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';

export const CertificateItem = (props) => {
    return (
        <div className={"certificate-item " + (props.hidden ? "hidden" : "")}>
            <img className="certificate-img" draggable={false} src={props.certificate.certificateImage} alt={props.certificate.certificateName} />
            <div className="certificate-details">
                <p className="certificate-title single-line-text">{props.certificate.certificateName}</p>
                <p className="certificate-date single-line-text"><FaCalendarCheck/>{props.certificate.certificateDate}</p>
            </div>
        </div>
    )
}
