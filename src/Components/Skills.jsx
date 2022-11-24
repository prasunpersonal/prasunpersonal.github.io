import React from 'react';
import { SkillItemNormal } from './SkillItemNormal';
import { SkillItemClickable } from './SkillItemClickable';
import { CertificateItem } from './CertificateItem';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

export const Skills = (props) => {
    const [showAll, setShowAll] = React.useState(false);
    const [maxCertificatesLimit, setMaxCertificatesLimit] = React.useState(0);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        window.onresize = () => {
            setWindowWidth(window.innerWidth);
        }
    }, []);

    React.useEffect(() => {
        (windowWidth > 1024) ? setMaxCertificatesLimit(8) : (windowWidth > 425) ? setMaxCertificatesLimit(6) : setMaxCertificatesLimit(4);
    }, [windowWidth]);

    return (
        <section id="skills">
            <h1 className="heading ">Skills</h1>
            <div className="main-body">
                <div className="sub-heading-container">
                    <h2 className="sub-heading ">Languages &amp; Frameworks</h2>
                    <div className="skill-item-container">
                        {props.languages.length > 0 ? props.languages.map((skill) => (<SkillItemNormal key={skill._id} skill={skill} />)) : <p className="loading-message" >Please wait while the skills are loading...</p>}
                    </div>
                </div>
                <div className="sub-heading-container">
                    <h2 className="sub-heading ">Databases</h2>
                    <div className="skill-item-container">
                        {props.databases.length > 0 ? props.databases.map((skill) => (<SkillItemNormal key={skill._id} skill={skill} />)) : <p className="loading-message" >Please wait while the skills are loading...</p>}
                    </div>
                </div>
                <div className="sub-heading-container">
                    <h2 className="sub-heading ">Profiles</h2>
                    <div className="skill-item-container">
                        {props.profiles.length > 0 ? props.profiles.map((skill) => (<SkillItemClickable key={skill._id} skill={skill} />)) : <p className="loading-message" >Please wait while the skills are loading...</p>}
                    </div>
                </div>
                <div className="sub-heading-container">
                    <h2 className="sub-heading ">Certificates</h2>
                    <div className="certificate-container">
                        {props.certificates.length > 0 ? props.certificates.map((certificate, i) => (<CertificateItem key={certificate._id} certificate={certificate} hidden={i >= maxCertificatesLimit && !showAll} />)) : <p className="loading-message" >Please wait while the certificates are loading...</p>}
                    </div>
                    {props.certificates.length > maxCertificatesLimit ?
                        <button id="certificate-expand-btn" className="btn" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Less" : "Show More"}{showAll ? <FaAngleUp /> : <FaAngleDown />}</button>
                        : ""
                    }
                </div>
            </div>
        </section>
    )
}
