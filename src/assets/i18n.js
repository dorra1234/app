import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Vos clés de traduction pour l'anglais ici
        },
      },
      fr: {
        translation: {
          // Vos clés de traduction pour le français ici
        },
      },
    },
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Langue de secours en cas de non-correspondance
    interpolation: {
      escapeValue: false, // Ne pas échapper les variables dans les traductions
    },
  });

export default i18n;