import React from 'react';
import { SkillItemNormal } from './SkillItemNormal';
import { SkillItemClickable } from './SkillItemClickable';
import { CertificateItem } from './CertificateItem';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = (props) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 1
		},
		tablet: {
			breakpoint: { max: 1024, min: 500 },
			items: 2,
			slidesToSlide: 1
		},
		mobile: {
			breakpoint: { max: 500, min: 0 },
			items: 1,
			slidesToSlide: 1
		}
	};


	return (
		<section id="skills">
			<h1 className="heading ">Skills</h1>
			<div className="main-body">
				<div className="sub-heading-container">
					<h2 className="sub-heading ">Languages &amp; Frameworks</h2>
					<div className="skill-item-container">
						{props.languages.map((skill) => (<SkillItemNormal key={skill._id} skill={skill} />))}
					</div>
				</div>
				<div className="sub-heading-container">
					<h2 className="sub-heading ">Databases</h2>
					<div className="skill-item-container">
						{props.databases.map((skill) => (<SkillItemNormal key={skill._id} skill={skill} />))}
					</div>
				</div>
				<div className="sub-heading-container">
					<h2 className="sub-heading ">Profiles</h2>
					<div className="skill-item-container">
						{props.profiles.map((skill) => (<SkillItemClickable key={skill._id} skill={skill} />))}
					</div>
				</div>
				<div className="sub-heading-container">
					<h2 className="sub-heading ">Certificates</h2>
					<Carousel 
						draggable={true}
						swipeable={true}
						showDots={true}
						renderDotsOutside={true}
						responsive={responsive}
						ssr={true}
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={2000}
						keyBoardControl={true}
						transitionDuration={500}
						containerClass="certificate-container"
						dotListClass="certificate-indicater"
						itemClass="certificate-item"
					>
						{props.certificates.map((certificate) => (<CertificateItem key={certificate._id} certificate={certificate} />))}
					</Carousel>
				</div>
			</div>
		</section>
	)
}
