import React from 'react';
import { SkillItemNormal } from './SkillItemNormal';
import { SkillItemClickable } from './SkillItemClickable';
import { CertificateItem } from './CertificateItem';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

export const Skills = ({languages, databases, profiles, certificates}) => {
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
                        {languages.length > 0 ? languages.map((skill) => (<SkillItemNormal key={skill._id} skill={skill} />)) : <p className="loading-message" >Please wait while the skills are loading...</p>}
                    </div>
                </div>
                <div className="sub-heading-container">
                    <h2 className="sub-heading ">Databases</h2>
                    <div className="skill-item-container">
                        {databases.length > 0 ? databases.map((skill) => (<SkillItemNormal key={skill._id} skill={skill} />)) : <p className="loading-message" >Please wait while the skills are loading...</p>}
                    </div>
                </div>
                <div className="sub-heading-container">
                    <h2 className="sub-heading ">Profiles</h2>
                    <div className="skill-item-container">
                        {profiles.length > 0 ? profiles.map((skill) => (<SkillItemClickable key={skill._id} skill={skill} />)) : <p className="loading-message" >Please wait while the skills are loading...</p>}
                    </div>
                </div>
                <div className="sub-heading-container">
                    <h2 className="sub-heading ">Certificates</h2>
                    <div className="certificate-container">
                        {certificates.length > 0 ? certificates.map((certificate, i) => (<CertificateItem key={certificate._id} certificate={certificate} hidden={i >= maxCertificatesLimit && !showAll} index={i} />)) : <p className="loading-message" >Please wait while the certificates are loading...</p>}
                    </div>
                    {certificates.length > maxCertificatesLimit ?
                        <button id="certificate-expand-btn" className="btn" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Less" : "Show More"}{showAll ? <FaAngleUp /> : <FaAngleDown />}</button>
                        : ""
                    }
                </div>
            </div>
        </section>
    )
}
