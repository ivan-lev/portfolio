import React from 'react';
import './Uses.scss';

import { techStackNew } from '../../variables/techStack.js';

export default function Uses() {
  return (
    <section className="uses__section">
      <p className="uses__paragraph">
        <img height="30px" src={techStackNew.vscode.logo}></img>Я пишу весь код в VSCode. Хотя есть
        и другие, более мощные инструменты разработки, мне нравится его скорость и доступность.
        Можно создавать проекты на макБуке 10летней давности и VSCode не будет тормозить.
      </p>
      <p className="uses__paragraph">
        <img height="30px" src={techStackNew.figma.logo}></img>
        Для вёрстки я использую Figma. У меня есть минимальный опыт работы с макетами, созданными в
        Photoshop, но Figma де-факто стала стандартом в части создания макетов.
      </p>
      <p className="uses__paragraph">
        <img height="30px" src={techStackNew.nodejs.logo}></img>У меня есть базовые знания по
        созданию сервера на NodeJS и использованию библиотеки ExpressJS для ускорения разработки.
        Сервер на NodeJS позволяет работать как с файловой системой, так и с базами данных
        посредством встроенных инструментов и библиотек, расширяющих его функционал. Также на нём
        можно создать удобный api, с которым будет взаимодействовать фронтенд сайта.
      </p>
    </section>
  );
}
