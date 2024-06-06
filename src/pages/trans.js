import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          home: 'Home',
          ourcourses: 'Our Courses',
          kinder: 'KinderGarten',
          about: 'About Us',
          register: 'Register',
          contact: 'Contact Us',
        },
      },
      ar: {
        translation: {
          home: 'الرئيسية',
          ourcourses: 'دوراتنا',
          kinder: 'رياض الاطفال',
          about: 'عن الاكاديمية',
          certificates : 'الشهادات',
          contact: 'اتصل بنا',        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

