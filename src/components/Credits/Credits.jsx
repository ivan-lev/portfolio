import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Credits.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

import logoFigure from '../../vendor/meshspin';

export default function Credits() {
  const translation = useContext(TranslationContext);

  const [isMeshLoaded, setIsMeshLoaded] = useState(false);

  useEffect(() => {
    setIsMeshLoaded(true);
  }, []);

  useEffect(() => {
    if (isMeshLoaded) {
      logoFigure();
    }
  }, [isMeshLoaded]);

  return (
    <article className="credits">
      <h2 className="title-gray">{translation.creditsTitle}</h2>
      <p className="subtitle">{translation.creditsSubtitle}</p>

      <div className="mesh-spin" id="wrapper"></div>

      <p className="text">
        <span className="credits__text">{translation.creditsSite}</span>
        <Link
          className="credits__link"
          to="https://www.figma.com/file/WrsiAQStgOWMzBWLzPHDAi/Developer-Portfolio-Design-(Community)?type=design&t=hRTNcG4J9JY8YIR6-6"
        >
          Figma
        </Link>
      </p>

      <p className="text">
        <span className="credits__text">{translation.creditsLogo}</span>
        <Link className="credits__link" to="https://www.flaticon.com/free-icon/coding_1159385">
          Flaticon.com
        </Link>
      </p>

      <p className="text">
        <span className="credits__text">{translation.creditsIcons}</span>
        <Link className="credits__link" to="https://www.svgrepo.com/">
          Svgrepo.com
        </Link>
      </p>

      <p className="text">
        <span className="credits__text">{translation.creditsSunMoonIcons}</span>
        <Link
          className="credits__link"
          to="https://www.svgrepo.com/collection/solar-outline-icons/"
        >
          Solar Outline Icons
        </Link>
      </p>

      <p className="text">
        <span className="credits__text">{translation.creditsVitePlugin}</span>
        <Link className="credits__link" to="https://www.npmjs.com/package/vite-plugin-svgr">
          vite-plugin-svgr
        </Link>
      </p>

      <p className="text">
        <span className="credits__text">{translation.creditsCssCustomProps}</span>
        <Link
          className="credits__link"
          to="https://tproger.ru/articles/custom-properties-in-css-part-1"
        >
          Tproger
        </Link>
      </p>

      <div className="text">
        <span className="credits__text">Вращающаяся фиговинка </span>
        <Link className="credits__link" to="https://kickstart.ch/pages/meshspin-js.html">
          meshspin-js
        </Link>
      </div>
    </article>
  );
}
