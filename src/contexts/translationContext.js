import React from 'react';

export const TranslationContext = React.createContext();

export const translations = {
  en: {
    name: 'en',
    menuHome: 'Home',
    menuAbout: 'About',
    menuUses: 'Uses',
    menuContact: 'Contact',
    menuCredits: 'Credits',
    heroTextFirst: 'Hi 👋,',
    heroTextSecond: 'My name is',
    heroName: 'Ivan Lev',
    heroTextThird: 'I build things for web',
    avatarAlt: 'My photo',
    techStack: 'My tech stack',
    technologies: 'Technologies I’ve been working with recently',
    projectsTitle: 'Projects',
    projectsSubtitle: 'Things I’ve built so far',
    projectCardPreviewLinkText: 'Live Preview',
    projectCardGithubLinkText: 'View Code',
    footerText: 'Designed and built by Ivan Lev with Love & Cup of Fine Chinese Tea',
    aboutmeTitle: 'About me',
    aboutmeInfo:
      'Hello! My name is Ivan. I am a web developer who is passionate about my work. I am interested in new technologies and try to introduce them into my practice. My personal interests include Chinese tea, Japanese culture, and practicing meditation.',
    contactText: 'For any questions please mail me:',
    workExperience: 'Work experience',
    education: 'Education',
    creditsTitle: 'Credits',
    creditsSubtitle:
      'On this page I want to mention all the resources that in one way or another helped me create my website',
    creditsSite:
      'The site was created based on a free template. It was heavily redesigned, responsiveness was added, unnecessary elements were removed, but the core was taken from here: ',
    creditsLogo: 'I found a good logo on ',
    creditsIcons: 'I took all the icons in svg format from ',
    creditsVitePlugin: 'Convenient work with svg files is carried out using this package: ',
    creditsSunMoonIcons: 'Nice sun and moon icons were founded here: ',
    creditsCssCustomProps:
      'An excellent article about custom CSS properties that will help you conveniently change themes on your site: ',

    usesTranslations: {
      usesTitle: 'Software I use. Gadgets I love. Things I recommend.',
      usesSubtitle:
        "If you ask me about the things I use to create software and stay productive (or buy these things in the hopes that I'll be productive but actually just procrastinate), here's my extensive list.",
      design: 'Design',
      frontend: 'Frontend',
      backend: 'Backend',
      hardware: 'Hardware',
      healthAndProductivity: 'Health and Productivity',
      figma:
        'For layout I use Figma, as it is the best application in its field. I have minimal experience with mockups created in Photoshop, but Figma de facto has become industry standard.',
      vscode: `Initially I wrote code in Sublime Text, then switched to Atom. Now I've settled on VSCode. Although there are other, more advanced development tools, I like its speed and accessibility. You can create projects on a 10-year-old MacBook and VSCode will not slow down. It is very good.`,
      reactjs:
        'I write web applications using React because it is a user-friendly tool with a rich ecosystem. According to a developer survey on Stack Overflow, as of 2023, React is the most popular library among the majority of respondents. This site is also built in React.',
      nodejs:
        'I have basic knowledge of creating a server in NodeJS using the Express.js library. A NodeJS server allows you to work with both the file system and databases using built-in tools and libraries that expand its functionality.',
      mongodb:
        'One of the most popular NoSQL databases, and the most common among those used with Node.js. The data is stored in structures similar to JSON and can be easily processed from JavaScript, which is very convenient.',
      postman:
        'Postman is a handy program that allows you to send requests to a server and check how the server responds to them. This is a flexible tool with which you can quickly test the operation of the API.',
      macbook:
        'Usually people write about their cool tech here, but I switched from a new 15-inch Lenovo to a 13-inch 2013 MacBook Air. He turned out to be very agile and can easily withstand loads.',
      jabra:
        'For focusing on work in new or noisy places, this is an excellent gadget with passive noise reduction. And if necessary, you can suppress noise actively by turning on music :)',
      insightTimer:
        'I use this program for meditation and practice. It reminds me every day to evaluate my condition and take time to practice. Maintaining balance is the key to productivity.'
    }
  },
  ru: {
    name: 'ru',
    menuHome: 'Домой',
    menuAbout: 'Обо мне',
    menuUses: 'Инструменты',
    menuContact: 'Контакты',
    menuCredits: 'Благодарности',
    heroTextFirst: 'Привет 👋 ,',
    heroTextSecond: 'Меня зовут',
    heroName: 'Иван Лев',
    heroTextThird: 'Я создаю вещи для веба',
    avatarAlt: 'Моя фотография',
    techStack: 'Мой стек технологий',
    technologies: 'Инструменты, которыми я обычно пользуюсь',
    projectsTitle: 'Проекты',
    projectsSubtitle: 'Вещи, которые я создал',
    projectCardPreviewLinkText: 'Проект',
    projectCardGithubLinkText: 'Посмотреть код',
    footerText: 'Разработано Иваном Львом с любовью и чашечкой китайского чая',
    aboutmeTitle: 'Обо мне',
    aboutmeInfo:
      'Привет! Меня зовут Иван. Я веб-разработчик, увлечённый своим делом. Я интересуюсь свежими технологиями и стараюсь внедрить их в свою практику. Из личных интересов я увлекаюсь китайским чаем, японской культурой и практикую медитацию.',
    contactText: 'Если у вас есть вопросы, пишите на этот адрес: ',
    workExperience: 'Опыт работы',
    education: 'Образование',
    creditsTitle: 'Благодарности',
    creditsSubtitle:
      'На этой странице я хочу упомянуть все ресурсы, которые так или иначе помогли мне создать мой сайт',
    creditsSite:
      'Сайт был создан на основе бесплатного шаблона. Он был значительно переработан, добавлена отзывчивость, убраны лишние элементы, но костяк был взят отсюда: ',
    creditsLogo: 'Неплохой логотип был найден мною здесь: ',
    creditsIcons: 'Все иконки в формате svg я взял с сайта ',
    creditsVitePlugin: 'Работа с svg файлами осуществлена посредством пакета ',
    creditsSunMoonIcons: 'Иконки солнца и луны были взяты из коллекции ',
    creditsCssCustomProps:
      'Отличная статья о кастомных CSS-свойствах, которая поможет вам удобно менять темы на сайте: ',

    usesTranslations: {
      usesTitle: 'Используемый софт. Любимые гаджеты. Полезные вещи.',
      usesSubtitle:
        'Если вы спросите меня о том, что я использую для создания программ и поддержания продуктивности (или в надежде на то, что я буду продуктивным, но на самом деле просто прокрастинирую), то вот мой обширный список.',
      design: 'Дизайн',
      frontend: 'Фронтенд',
      backend: 'Бэкенд',
      hardware: 'Оборудование',
      healthAndProductivity: 'Здоровье и продуктивность',
      figma:
        'Для вёрстки я использую Figma, так как это лучшее приложение в своей сфере. У меня есть минимальный опыт работы с макетами, созданными в Photoshop, но Figma де-факто стала стандартом в отрасли.',
      vscode:
        'Изначально я писал код в Sublime Text, потом перешёл на Atom. Сейчас я остановился на VSCode. Хотя есть и другие, более продвинутые инструменты разработки, мне нравится его скорость и доступность. Можно создавать проекты на МакБуке 10-летней давности и VSCode не будет тормозить. Он очень хорош.',
      reactjs:
        'Я пишу веб-приложения, используя React, так как это удобный инструмент с богатой экосистемой. Согласно опросу разработчиков на Stack Overflow, по состоянию на 2023 год, библиотека React - самая популярная среди большинства респондентов. Этот сайт создан также на React.',
      nodejs:
        'У меня есть базовые знания по созданию сервера на NodeJS с использованием библиотеки Express.js. Сервер на NodeJS позволяет работать как с файловой системой, так и с базами данных посредством встроенных инструментов и библиотек, расширяющих его функционал.',
      mongodb:
        'Одна из популярнейших NoSQL баз данных, и самая распространённая среди используемых с Node.js. Данные хранятся в структурах, близких JSON и их просто обрабатывать из JavaScript, что очень удобно.',
      postman:
        'Postman - удобная программа, которая позволяет отправлять на сервер запросы и проверять, как на них реагирует сервер. Это гибкий инструмент, с помощью которого можно быстро протестировать работу API.',
      macbook:
        'Обычно здесь пишут о своей крутой технике, но я перешёл с нового 15-дюймового Lenovo на 13-дюймовый MacBook Air 2013 года. Он оказался очень проворным, и спокойно выдерживает нагрузки.',
      jabra:
        'Для фиксации внимания на рабочем процессе в новых или шумных местах - это отличный гаджет с пассивным шумоподавлением. А при необходимости, можно подавить шум и активно, включив музыку :)',
      insightTimer:
        'Я пользуюсь этой программой для медитации и практик. Она ежедневно напоминает мне о том, что нужно оценить своё состояние и уделить время для практикe. Поддерживать баланс - это залог продуктивности.'
    }
  }
};

export const usesTranslations = {
  en: {
    figma:
      'For layout I use Figma, as it is the best application in its field. I have minimal experience with mockups created in Photoshop, but Figma de facto has become industry standard.',
    vscode: `Initially I wrote code in Sublime Text, then switched to Atom. Now I've settled on VSCode. Although there are other, more advanced development tools, I like its speed and accessibility. You can create projects on a 10-year-old MacBook and VSCode will not slow down. It is very good.`,
    reactjs:
      'I write web applications using React because it is a user-friendly tool with a rich ecosystem. According to a developer survey on Stack Overflow, as of 2023, React is the most popular library among the majority of respondents. This site is also built in React.',
    nodejs:
      'I have basic knowledge of creating a server in NodeJS using the Express.js library. A NodeJS server allows you to work with both the file system and databases using built-in tools and libraries that expand its functionality.',
    mongodb:
      'One of the most popular NoSQL databases, and the most common among those used with Node.js. The data is stored in structures similar to JSON and can be easily processed from JavaScript, which is very convenient.',
    postman:
      'Postman is a handy program that allows you to send requests to a server and check how the server responds to them. This is a flexible tool with which you can quickly test the operation of the API.',
    macbook:
      'Usually people write about their cool tech here, but I switched from a new 15-inch Lenovo to a 13-inch 2013 MacBook Air. He turned out to be very agile and can easily withstand loads.',
    jabra:
      'For focusing on work in new or noisy places, this is an excellent gadget with passive noise reduction. And if necessary, you can suppress noise actively by turning on music :)',
    insightTimer:
      'I use this program for meditation and practice. It reminds me every day to evaluate my condition and take time to practice. Maintaining balance is the key to productivity.'
  },
  ru: {
    figma:
      'Для вёрстки я использую Figma, так как это лучшее приложение в своей сфере. У меня есть минимальный опыт работы с макетами, созданными в Photoshop, но Figma де-факто стала стандартом в отрасли.',
    vscode:
      'Изначально я писал код в Sublime Text, потом перешёл на Atom. Сейчас я остановился на VSCode. Хотя есть и другие, более продвинутые инструменты разработки, мне нравится его скорость и доступность. Можно создавать проекты на МакБуке 10-летней давности и VSCode не будет тормозить. Он очень хорош.',
    reactjs:
      'Я пишу веб-приложения, используя React, так как это удобный инструмент с богатой экосистемой. Согласно опросу разработчиков на Stack Overflow, по состоянию на 2023 год, библиотека React - самая популярная среди большинства респондентов. Этот сайт создан также на React.',
    nodejs:
      'У меня есть базовые знания по созданию сервера на NodeJS с использованием библиотеки Express.js. Сервер на NodeJS позволяет работать как с файловой системой, так и с базами данных посредством встроенных инструментов и библиотек, расширяющих его функционал.',
    mongodb:
      'Одна из популярнейших NoSQL баз данных, и самая распространённая среди используемых с Node.js. Данные хранятся в структурах, близких JSON и их просто обрабатывать из JavaScript, что очень удобно.',
    postman:
      'Postman - удобная программа, которая позволяет отправлять на сервер запросы и проверять, как на них реагирует сервер. Это гибкий инструмент, с помощью которого можно быстро протестировать работу api.',
    macbook:
      'Обычно здесь пишут о своей крутой технике, но я перешёл с нового 15-дюймового Lenovo на 13-дюймовый MacBook Air 2013 года. Он оказался очень проворным, и спокойно выдерживает нагрузки.',
    jabra:
      'Для фиксации внимания на рабочем процессе в новых или шумных местах - это отличный гаджет с пассивным шумоподавлением. А при необходимости, можно подавить шум и активно, включив музыку :)',
    insightTimer:
      'Я пользуюсь этой программой для медитации и практик. Она ежедневно напоминает мне о том, что нужно оценить своё состояние и уделить время для практикe. Поддерживать баланс - это залог продуктивности.'
  }
};
