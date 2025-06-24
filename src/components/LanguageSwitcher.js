import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "ar", label: "العربية" },
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

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
          onClick={() => i18n.changeLanguage(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
