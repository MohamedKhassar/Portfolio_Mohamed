import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNavbar from "./locales/en/navbar.json";
import deNavbar from "./locales/de/navbar.json";
import frNavbar from "./locales/fr/navbar.json";
import enHero from "./locales/en/hero.json";
import deHero from "./locales/de/hero.json";
import frHero from "./locales/fr/hero.json";
import enAbout from "./locales/en/about.json";
import deAbout from "./locales/de/about.json";
import frAbout from "./locales/fr/about.json";
import enSkills from "./locales/en/skills.json";
import deSkills from "./locales/de/skills.json";
import frSkills from "./locales/fr/skills.json";
import enCertificate from "./locales/en/certificate.json";
import deCertificate from "./locales/de/certificate.json";
import frCertificate from "./locales/fr/certificate.json";
import enProjects from "./locales/en/projects.json";
import deProjects from "./locales/de/projects.json";
import frProjects from "./locales/fr/projects.json";
import enReviews from "./locales/en/reviews.json";
import deReviews from "./locales/de/reviews.json";
import frReviews from "./locales/fr/reviews.json";
import enContact from "./locales/en/contact.json";
import deContact from "./locales/de/contact.json";
import frContact from "./locales/fr/contact.json";
import enFooter from "./locales/en/footer.json";
import deFooter from "./locales/de/footer.json";
import frFooter from "./locales/fr/footer.json";
import enMeta from "./locales/en/meta.json";
import deMeta from "./locales/de/meta.json";
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
        meta: deMeta,
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
    supportedLngs: ["en", "de","fr"], // 👈 only these two, nothing else
    detection: {
      order: ["querystring", "localStorage", "navigator"], // 👈 querystring first
      lookupQuerystring: "lang", // 👈 reads ?lang=de
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
