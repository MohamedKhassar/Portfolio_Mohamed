import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // Ensure your i18n config is imported

import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Work from "./Work";
import Certificates from "./Certificates";
import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../hooks/useLanguage';

const SUPPORTED_LANGS = ['en', 'fr']; // Add more languages here if needed
const DEFAULT_LANG = 'en';

export const MainPortfolio = () => {
  const { lang } = useParams();
  const { t } = useTranslation("meta");
  const {changeLanguage}=useLanguage()

  // Determine language from URL, fallback to default if invalid
  const currentLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;

  // Sync i18n language with the active route
  useEffect(() => {
    if (i18n.language !== currentLang) {
      changeLanguage(currentLang);
    }
  }, [currentLang, changeLanguage]);

  // Redirect invalid language params back to home
  if (lang && !SUPPORTED_LANGS.includes(lang)) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {/* Localized Head Metadata */}
      <Helmet>
        <html lang={currentLang} />
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        
        {/* Alternate canonical links for SEO */}
        <link rel="alternate" hrefLang="en" href="https://yourportfolio.com/" />
        <link rel="alternate" hrefLang="fr" href="https://yourportfolio.com/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://yourportfolio.com/" />
      </Helmet>

      <Header currentLang={currentLang} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
};