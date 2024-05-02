import { Experience } from '../types/Experience';

import yandexWebdevCertificate from '../assets/images/certificates/yandex-webdev.jpg';

export const educations: Experience[] = [
  {
    id: 3,
    position: { ru: 'Курс TypeScript', en: 'TypeScript Course' },
    type: { ru: 'Дополнительное', en: 'Additional' },
    organization: { ru: 'https://code-basics.com', en: 'https://code-basics.com' },
    // location: '',
    period: { ru: 'Апр 2024', en: 'April 2024' }
  },
  {
    id: 4,
    position: { ru: 'Курс Введение в TypeScript', en: 'Introduction to TypeScript Course' },
    type: { ru: 'Дополнительное', en: 'Additional' },
    organization: {
      ru: 'https://stepik.org/course/118563/',
      en: 'https://stepik.org/course/118563/'
    },
    // location: '',
    period: { ru: 'Апр 2024', en: 'April 2024' }
  },
  {
    id: 2,
    position: { ru: 'Веб-разработчик', en: 'Web Developer' },
    type: { ru: 'Дополнительное', en: 'Additional' },
    organization: { ru: 'Яндекс.Практикум', en: 'Yandex.Practicum' },
    // location: '',
    period: { ru: 'Мар 2023 - Мар 2024', en: 'Mar 2023 - Mar 2024' },
    certificate: yandexWebdevCertificate
  },
  {
    id: 1,
    position: { ru: 'Менеджер', en: 'Manager' },
    type: { ru: 'Высшее', en: 'Higher education' },
    organization: { ru: 'Магнитогорский Гос. Университет', en: 'Magnitogorsk State University' },
    // location: '',
    period: { ru: 'Сен 2004 - Май 2009', en: 'Sep 2004 - May 2009' }
  }
];

export const jobs = [
  {
    id: 1,
    position: 'Junior Web Developer',
    type: 'Full Time',
    organization: 'Yandex Co.',
    location: 'St. Petersburg',
    period: 'Jan 2024 - Dec 2025'
  },
  {
    id: 2,
    position: 'Junior Web Developer',
    type: 'Internship',
    organization: 'Mail.ru Co. Ltd',
    location: 'Moscow',
    period: 'Jan 2023 - Dec 2024'
  }
];
