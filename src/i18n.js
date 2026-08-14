import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNavbar from "./locales/en/navbar.json";
import frNavbar from "./locales/fr/navbar.json";
import enHero from "./locales/en/hero.json";
import frHero from "./locales/fr/hero.json";
import enAbout from "./locales/en/about.json";
import frAbout from "./locales/fr/about.json";
import enSkills from "./locales/en/skills.json";
import frSkills from "./locales/fr/skills.json";
import enCertificate from "./locales/en/certificate.json";
import frCertificate from "./locales/fr/certificate.json";
import enProjects from "./locales/en/projects.json";
import frProjects from "./locales/fr/projects.json";
import enReviews from "./locales/en/reviews.json";
import frReviews from "./locales/fr/reviews.json";
import enContact from "./locales/en/contact.json";
import frContact from "./locales/fr/contact.json";
import enFooter from "./locales/en/footer.json";
import frFooter from "./locales/fr/footer.json";
import enMeta from "./locales/en/meta.json";
import frMeta from "./locales/fr/meta.json";

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
        meta: enMeta,
      },
      fr: {
        navbar: frNavbar,
        hero: frHero,
        about: frAbout,
        skills: frSkills,
        certificate: frCertificate,
        projects: frProjects,
        reviews: frReviews,
        contact: frContact,
        footer: frFooter,
        meta: frMeta,
      },
    },
    fallbackLng: "en", // 👈 default when language not supported
    supportedLngs: ["en", "fr"], // 👈 only these two, nothing else
    detection: {
      order: ["querystring", "localStorage", "navigator"], // 👈 querystring first
      lookupQuerystring: "lang", // 👈 reads ?lang=de
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
