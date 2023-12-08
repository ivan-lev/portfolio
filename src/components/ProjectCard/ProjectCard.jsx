import React, { useContext } from 'react';
import './ProjectCard.scss';

import { LanguageContext } from '../../contexts/languageContext.js';

export default function ProjectCard({
  preview,
  title,
  stack,
  description,
  previewLink,
  githubLink
}) {
  const language = useContext(LanguageContext);

  return (
    <li className="project-card">
      <img src={preview} alt={`Preview of project ${title}`} className="project-card-image"></img>
      <div className="project-card-content">
        <h3 className="project-card-title">{title ? title : 'Title here'}</h3>
        <p className="project-card-text">
          {description
            ? description
            : 'This is a sample project description with random things are here in description.'}
        </p>
        <p className="project-card-tech-stack">{stack}</p>
        <p className="project-card-links">
          <a href={previewLink} className="project-card-link-preview">
            {language.projectCardPreviewLinkText}
          </a>
          <a href={githubLink} className="project-card-link-github">
            {language.projectCardGithubLinkText}
          </a>
        </p>
      </div>
    </li>
  );
}

//export default ProjectCard;
