import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const BASE_URL = 'https://mohamed-khassar.ma';

const useMetaData = () => {
  const { t, i18n } = useTranslation('meta');

  useEffect(() => {
    document.title = t('title');
    document.documentElement.lang = i18n.language;
    document.documentElement.dir  = i18n.language === 'ar' ? 'rtl' : 'ltr';

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]',        'content', t('description'));
    setMeta('meta[name="keywords"]',           'content', t('keywords'));
    setMeta('meta[name="author"]',             'content', t('author'));
    setMeta('meta[name="publisher"]',          'content', t('publisher'));
    setMeta('meta[property="og:title"]',       'content', t('og.title'));
    setMeta('meta[property="og:description"]', 'content', t('og.description'));
    setMeta('meta[property="og:site_name"]',   'content', t('og.siteName'));
    setMeta('meta[property="og:url"]',         'content', `${BASE_URL}?lang=${i18n.language}`);

    // 👇 hreflang — tells Google which language version to show per user
    setHreflang([
      { lang: 'en',    url: `${BASE_URL}?lang=en` },
      { lang: 'de',    url: `${BASE_URL}?lang=de` },
      { lang: 'x-default', url: BASE_URL },        // 👈 default for unmatched languages
    ]);

  }, [i18n.language]);
};

// injects/updates <link rel="alternate" hreflang="..."> in <head>
const setHreflang = (langs) => {
  // remove old hreflang tags first
  document.querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach(el => el.remove());

  langs.forEach(({ lang, url }) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', lang);
    link.setAttribute('href', url);
    document.head.appendChild(link);
  });
};

export default useMetaData;