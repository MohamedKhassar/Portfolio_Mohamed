import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNavbar from "./locales/en/navbar.json";
import deNavbar from "./locales/de/navbar.json";
import enHero from "./locales/en/hero.json";
import deHero from "./locales/de/hero.json";
import enAbout from "./locales/en/about.json";
import deAbout from "./locales/de/about.json";
import enSkills from "./locales/en/skills.json";
import deSkills from "./locales/de/skills.json";
import enCertificate from "./locales/en/certificate.json";
import deCertificate from "./locales/de/certificate.json";
import enProjects from "./locales/en/projects.json";
import deProjects from "./locales/de/projects.json";
import enReviews from "./locales/en/reviews.json";
import deReviews from "./locales/de/reviews.json";
import enContact from "./locales/en/contact.json";
import deContact from "./locales/de/contact.json";
import enFooter from "./locales/en/footer.json";
import deFooter from "./locales/de/footer.json";

i18n
  .use(LanguageDetector) // 👈 detects navigator.language automatically
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: enNavbar,
        hero: enHero,
        about: enAbout,
        skills: enSkills,
        certificate: enCertificate,
        projects: enProjects,
        reviews: enReviews,
        contact: enContact,
        footer: enFooter,
      },
      de: {
        navbar: deNavbar,
        hero: deHero,
        about: deAbout,
        skills: deSkills,
        certificate: deCertificate,
        projects: deProjects,
        reviews: deReviews,
        contact: deContact,
        footer: deFooter,
      },
    },
    fallbackLng: "en", // 👈 default when language not supported
    supportedLngs: ["en", "de"], // 👈 only these two, nothing else
    detection: {
      order: ["navigator"], // saved choice takes priority over browser
      caches: [""], // persist the choice
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
