import './Credits.scss';

// hooks
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// components
import MeshSpinComponent from '../MeshSpin/MeshSpin.tsx';

//variables and contexts
import { LanguageContext } from '../../contexts/languageContext.ts';
import { TranslationContext } from '../../contexts/translationContext.ts';

export default function Credits(): JSX.Element {
  const LANG = useContext(LanguageContext);
  const TRANSLATION = useContext(TranslationContext);

  return (
    <article className="credits">
      <h2 className="title-gray">{TRANSLATION?.CREDITS.TITLE[LANG]}</h2>
      <p className="subtitle">{TRANSLATION?.CREDITS.SUBTITLE[LANG]}</p>

      <p className="text">
        <span className="credits__text">{TRANSLATION?.CREDITS.WIFE[LANG]}</span>
      </p>

      <MeshSpinComponent />

      <div className="text">
        <span className="credits__text">{TRANSLATION?.CREDITS.SITE[LANG]}</span>
        <Link
          className="credits__link"
          to="https://www.figma.com/file/WrsiAQStgOWMzBWLzPHDAi/Developer-Portfolio-Design-(Community)?type=design&t=hRTNcG4J9JY8YIR6-6"
        >
          Figma
        </Link>

        <span className="credits__text">{TRANSLATION?.CREDITS.LOGO[LANG]}</span>
        <Link className="credits__link" to="https://www.flaticon.com/free-icon/coding_1159385">
          Flaticon.com
        </Link>

        <span className="credits__text">{TRANSLATION?.CREDITS.ICONS[LANG]}</span>
        <Link className="credits__link" to="https://www.svgrepo.com/">
          Svgrepo.com
        </Link>

        <span className="credits__text">{TRANSLATION?.CREDITS.THEME_CHANGE_ICONS[LANG]}</span>
        <Link
          className="credits__link"
          to="https://www.svgrepo.com/collection/solar-outline-icons/"
        >
          Solar Outline Icons
        </Link>

        <span className="credits__text">{TRANSLATION?.CREDITS.SVG_PLUGIN[LANG]}</span>
        <Link className="credits__link" to="https://www.npmjs.com/package/vite-plugin-svgr">
          vite-plugin-svgr
        </Link>

        <span className="credits__text">{TRANSLATION?.CREDITS.CSS_PROPS_ARTICLE[LANG]}</span>
        <Link
          className="credits__link"
          to="https://tproger.ru/articles/custom-properties-in-css-part-1"
        >
          Tproger
        </Link>

        <span className="credits__text">{TRANSLATION?.CREDITS.MESH_SPIN[LANG]}</span>
        <Link className="credits__link" to="https://kickstart.ch/pages/meshspin-js.html">
          meshspin-js
        </Link>
      </div>
    </article>
  );
}
