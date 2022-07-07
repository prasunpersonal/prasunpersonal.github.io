import React from 'react'
import { ProjectItem } from './ProjectItem'

export const Projects = (props) => {
	const [categories, setCategories] = React.useState([]);
	const [subCategories, setSubCategories] = React.useState([]);
	const [projects, setProjects] = React.useState([]);
	const [projectFilterCategory, setProjectFilterCategory] = React.useState("All");
	const [projectFilterSubCategory, setProjectFilterSubCategory] = React.useState("All");
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
		setCategories(Array.from(props.categories.keys()).sort());
	}, [props.categories]);

	React.useEffect(() => {
		setProjects(props.projects);
	}, [props.projects]);

	React.useEffect(() => {
		if (projectFilterCategory === "All") {
			setSubCategories([]);
			setProjects(props.projects);
		} else {
			setSubCategories(props.categories.get(projectFilterCategory));
			setProjects(props.projects.filter((p) => {
				return p.projectCategory.toLowerCase() === projectFilterCategory.toLowerCase();
			}));
		}
		setProjectFilterSubCategory("All");
		setShowAll(false);
	}, [props.categories, props.projects, projectFilterCategory]);

	React.useEffect(() => {
		if (projectFilterSubCategory === "All") {
			if (projectFilterCategory === "All") {
				setProjects(props.projects);
			} else {
				setProjects(props.projects.filter((p) => {
					return p.projectCategory.toLowerCase() === projectFilterCategory.toLowerCase();
				}));
			}
		} else {
			setProjects(props.projects.filter((p) => {
				return p.projectCategory.toLowerCase() === projectFilterCategory.toLowerCase() && p.projectSubCategory.toLowerCase() === projectFilterSubCategory.toLowerCase();
			}));
		}
	}, [projectFilterCategory, props.projects, projectFilterSubCategory]);

	React.useEffect(() => {
		setLimitedProjects(projects);
	}, [showAll, maxProjectLimit, projects]);

	if (!showAll && limitedProjects.length > maxProjectLimit) setLimitedProjects(limitedProjects.slice(0, maxProjectLimit));

	return (
		<section id="projects">
			<h1 className="heading ">Projects</h1>
			<div className="main-body">
				{categories.length > 1 ?
					<ul className="project-filters" id="project-filters">
						<li key="All" className={projectFilterCategory === "All" ? "active" : ""} onClick={() => setProjectFilterCategory("All")}>All</li>
						{categories.map((catagory) => (<li key={catagory} className={projectFilterCategory === catagory ? "active" : ""} onClick={() => setProjectFilterCategory(catagory)}>{catagory}</li>))}
					</ul>
					: ""
				}
				{subCategories.length > 1 ?
					<ul className="project-sub-filters" id="project-sub-filters">
						<li key="All" className={projectFilterSubCategory === "All" ? "active" : ""} onClick={() => setProjectFilterSubCategory("All")}>All</li>
						{subCategories.map((subCatagory) => (<li key={subCatagory} className={projectFilterSubCategory === subCatagory ? "active" : ""} onClick={() => setProjectFilterSubCategory(subCatagory)}>{subCatagory}</li>))}
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
