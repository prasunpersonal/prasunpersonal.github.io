import React from 'react';
import { ProjectItem } from './ProjectItem';
import { MdFilterAlt } from 'react-icons/md';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

export const Projects = ({categories, allProjects}) => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const [colapse, setColapse] = React.useState(true);
    const [projects, setProjects] = React.useState([]);
    const [projectFilter, setProjectFilter] = React.useState("All Projects");
    const [showAll, setShowAll] = React.useState(false);
    const [maxProjectLimit, setMaxProjectLimit] = React.useState(0);

    React.useEffect(() => {
        window.onresize = () => {
            setWindowWidth(window.innerWidth);
        }
    }, []);

    React.useEffect(() => {
        (windowWidth > 1024) ? setMaxProjectLimit(6) : setMaxProjectLimit(4);
    }, [windowWidth]);

    React.useEffect(() => {
        if (projectFilter === "All Projects") {
            setProjects(allProjects);
        } else {
            setProjects(allProjects.filter((p) => {
                return p.projectCategory.toLowerCase() === projectFilter.toLowerCase();
            }));
        }
        setShowAll(false);
    }, [allProjects, projectFilter]);

    return (
        <section id="projects">
            <h1 className="heading ">Projects</h1>
            <div className="main-body">
                {categories.length > 1 ?
                    <div id="project-filter-dropdown">
                        <div id="project-filter-selected" onClick={() => setColapse(!colapse)}>
                            <MdFilterAlt className="fa-filter" />
                            <span id="selected-filter">{projectFilter}</span>
                            {colapse ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <ul id="project-filters" className={colapse ? "colapse" : ""}>
                            <li key="All" onClick={() => { setProjectFilter("All Projects"); setColapse(true) }}>All Projects</li>
                            {categories.map((catagory) => (<li key={catagory} onClick={() => { setProjectFilter(catagory); setColapse(true) }}>{catagory}</li>))}
                        </ul>
                    </div>
                    : ""
                }
                <div className="projects-container">
                    {projects.length > 0 ? projects.map((project, i) => (<ProjectItem key={project._id} project={project} hidden={i >= maxProjectLimit && !showAll} index={i} />)) : <p className="loading-message" >Please wait while the projects are loading...</p>}
                </div>
                {projects.length > maxProjectLimit ?
                    <button id="project-expand-btn" className="btn" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Less" : "Show More"}{showAll ? <FaAngleUp /> : <FaAngleDown />}</button>
                    : ""
                }
            </div>
        </section>
    )
}
