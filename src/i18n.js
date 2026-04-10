import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNavbar from "./locales/en/navbar.json";
import deNavbar from "./locales/de/navbar.json";

i18n
  .use(LanguageDetector) // 👈 detects navigator.language automatically
  .use(initReactI18next)
  .init({
    resources: {
      en: { navbar: enNavbar },
      de: { navbar: deNavbar },
    },
    fallbackLng: "en", // 👈 default when language not supported
    supportedLngs: ["en", "de"], // 👈 only these two, nothing else
    detection: {
      order: [ "navigator"], // saved choice takes priority over browser
      caches: [""], // persist the choice
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
