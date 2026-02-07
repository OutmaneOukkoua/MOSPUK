import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const languages = [
  { code: "ar", label: "العربية" },
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

const SUPPORTED_SECTIONS = ["hero", "about", "services", "joinus", "contact"];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { section } = useParams();

  const currentSection = SUPPORTED_SECTIONS.includes(section) ? section : "hero";

  const onSwitch = async (code) => {
    if (i18n.language === code) return;

    await i18n.changeLanguage(code);
    localStorage.setItem("lang", code);

    // حافظ على نفس section
    navigate(`/${code}/${currentSection}`, { replace: true });
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`px-2 py-1 rounded font-bold ${
            i18n.language === lang.code
              ? "bg-green-700 text-white"
              : "text-gray-600 hover:text-green-700"
          }`}
          onClick={() => onSwitch(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
