import i18n from "i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


import sv from "./locales/sv/translation.json"
import en from "./locales/en/translation.json"

i18n.use(LanguageDetector)
i18n.use(initReactI18next)
.init({
    resources: {
      sv: { translation: sv },
      en: { translation: en },
    },
    fallbackLng: 'sv',
    interpolation: {
      escapeValue: false,
    },
  });

  export default i18n;