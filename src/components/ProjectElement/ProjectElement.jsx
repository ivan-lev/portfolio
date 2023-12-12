import React, { useContext } from 'react';
import './ProjectElement.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

import filler from '../../assets/images/project-previews/filler.png';

export default function ProjectElement({ preview, title, stack, description, link, ghLink }) {
  const translation = useContext(TranslationContext);

  return (
    <li className="project-card">
      <img
        src={preview ? preview : filler}
        alt={`Preview of project ${title}`}
        className="project-card-image"
      ></img>
      <div className="project-card-content">
        <h3 className="project-card-title">{title ? title : 'Title here'}</h3>
        <p className="project-card-text">
          {description
            ? description
            : 'This is a sample project description with random things are here in description.'}
        </p>
        <p className="project-card-tech-stack">{stack}</p>
        <p className="project-card-links">
          <a href={link} className="project-card-link-preview">
            {translation?.projectCardPreviewLinkText}
          </a>
          <a href={ghLink} className="project-card-link-github">
            {translation?.projectCardGithubLinkText}
          </a>
        </p>
      </div>
    </li>
  );
}

//export default ProjectCard;
