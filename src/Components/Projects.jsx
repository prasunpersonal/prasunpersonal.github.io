import React from 'react'
import { ProjectItem } from './ProjectItem'

export const Projects = (props) => {
	const [categories, setCategories] = React.useState([]);
	const [projects, setProjects] = React.useState([]);
	const [projectFilter, setProjectFilter] = React.useState("All");
	const [limitedProjects, setLimitedProjects] = React.useState([]);
	const [showAll, setShowAll] = React.useState(false);
	const [maxProjectLimit, setMaxProjectLimit] = React.useState(0);
	const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

	React.useEffect(() => {
		window.onresize = () => {
			setWindowWidth(window.innerWidth);
		}
	}, []);

	React.useEffect(() => {
		(windowWidth > 1300) ? setMaxProjectLimit(6) : setMaxProjectLimit(4);
	}, [windowWidth]);

	React.useEffect(() => {
		setCategories(props.categories);
	}, [props.categories]);

	React.useEffect(() => {
		setProjects(props.projects);
	}, [props.projects]);

	React.useEffect(() => {
		if (projectFilter === "All") {
			setProjects(props.projects);
		} else {
			setProjects(props.projects.filter((p) => {
				return p.projectCategory.toLowerCase() === projectFilter.toLowerCase();
			}));
		}
		setShowAll(false);
	}, [props.projects, projectFilter]);
	
	if (!showAll && limitedProjects.length > maxProjectLimit) setLimitedProjects(projects.slice(0, maxProjectLimit));
	else setLimitedProjects(projects);

	return (
		<section id="projects">
			<h1 className="heading ">Projects</h1>
			<div className="main-body">
				{categories.length > 1 ?
					<ul className="project-filters" id="project-filters">
						<li key="All" className={projectFilter === "All" ? "active" : ""} onClick={() => setProjectFilter("All")}>All</li>
						{categories.map((catagory) => (<li key={catagory} className={projectFilter === catagory ? "active" : ""} onClick={() => setProjectFilter(catagory)}>{catagory}</li>))}
					</ul>
					: ""
				}
				<div className="projects-container">
					{limitedProjects.map((project) => (<ProjectItem key={project._id} project={project} />))}
				</div>
				{projects.length > maxProjectLimit ?
					<button id="project-expand-btn" className="btn" data-type="expand" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Less" : "Show More"}<i className={showAll ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i></button>
					: ""
				}
			</div>
		</section>
	)
}
