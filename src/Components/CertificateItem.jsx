import React from 'react'

export const CertificateItem = (props) => {
    return (
        <div>
            <img className="certificate-img" draggable={false} src={props.certificate.certificateImageUrl} alt={props.certificate.certificateName} />
            <div className="certificate-details">
                    <p className="certificate-title single-line-text">{props.certificate.certificateName}</p>
                    <p className="certificate-date single-line-text">{props.certificate.certificateDate}</p>
                </div>
        </div>
    )
}
