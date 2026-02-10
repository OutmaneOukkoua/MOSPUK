import React from "react";
import { useTranslation } from "react-i18next";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-emerald-50 via-white to-green-50 border-b border-green-100"
    >
      {/* ديكور خلفي ناعم جداً */}
      <div className="absolute -top-20 -left-28 w-56 h-56 bg-green-100 rounded-full opacity-20 blur-2xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-emerald-100 rounded-full opacity-20 blur-2xl -z-10 pointer-events-none"></div>

      <div className="relative z-10 w-full flex flex-col items-center text-center px-4 md:px-0 max-w-3xl mx-auto py-20">
        {/* Brand + Divider */}
        <div className="flex flex-col items-center gap-2 mb-5">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-1 rounded bg-gradient-to-r from-green-600 via-emerald-400 to-green-600"></div>
            <span className="text-4xl md:text-5xl font-extrabold tracking-wide text-green-800 drop-shadow select-none">
              MOSPUK
            </span>
            <div className="w-8 h-1 rounded bg-gradient-to-r from-green-600 via-emerald-400 to-green-600"></div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="mb-4 text-2xl md:text-4xl font-black text-gray-900 leading-tight md:leading-snug tracking-tight">
          {t("hero_title")}
        </h1>

        {/* Description */}
        <p className="mb-8 text-base md:text-xl text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
          {t("hero_desc")}
        </p>

        {/* Call to Action Button */}
        <a
          href="joinus"
          className={
            "inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-l from-green-700 to-emerald-400 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-green-800 hover:to-emerald-500 focus:ring-2 focus:ring-green-700 focus:outline-none transition-all duration-200" +
            (isArabic ? " flex-row-reverse" : "")
          }
        >
          {/* زر عكسي: العربية النص ثم السهم، لغات أخرى السهم ثم النص */}
          {isArabic ? (
            <>
              <HiArrowLeft className="w-6 h-6" />
              {t("cta")}
            </>
          ) : (
            <>
              {t("cta")}
              <HiArrowRight className="w-6 h-6" />
              
            </>
          )}
        </a>
      </div>
    </section>
  );
}