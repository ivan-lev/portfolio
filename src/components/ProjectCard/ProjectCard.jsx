import React from 'react';
import './ProjectCard.scss';

export default function ProjectCard(props) {
  return (
    <li className="project-card">
      <img src={props.filler} alt="Some of my projects" className="project-card-image"></img>
      <div className="project-card-content">
        <h3 className="project-card-title">Project Title goes here</h3>
        <p className="project-card-text">
          This is sample project description random things are here in description This is sample
          project lorem ipsum generator for dummy content
        </p>
        <p className="project-card-tech-stack">HTML , JavaScript, SASS, React</p>
        <p className="project-card-links">
          <a href="#" className="project-card-link-preview">
            Live Preview
          </a>
          <a href="#" className="project-card-link-github">
            View Code
          </a>
        </p>
      </div>
    </li>
  );
}

//export default ProjectCard;
