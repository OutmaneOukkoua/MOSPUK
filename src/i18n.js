import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationAR from "./locales/ar/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
  ar: { translation: translationAR },
  fr: { translation: translationFR },
  en: { translation: translationEN },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ar",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
