import PropTypes from "prop-types";
import { LanguageContext } from "../context/LanguageContext";
import { useState } from "react";
import i18n from "../i18n";

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(i18n.language);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
}