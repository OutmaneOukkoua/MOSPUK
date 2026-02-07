import React, { useEffect } from "react";
import { Routes, Route, Navigate, useParams, useNavigate, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import JoinUs from "./components/JoinUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SUPPORTED_LANGS = ["ar", "fr", "en"];
const SUPPORTED_SECTIONS = ["hero", "about", "services", "joinus", "contact"];

function AppLayout() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "ar") {
      document.documentElement.dir = "rtl";
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.documentElement.dir = "ltr";
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }, [i18n.language]);

  const titles = {
    ar: "MOSPUK | مكتب خدمات الأعمال بالناظور",
    fr: "MOSPUK | Bureau de services professionnels à Nador",
    en: "MOSPUK | Business Services Office in Nador",
  };

  const descriptions = {
    ar: "مكتب MOSPUK يقدم خدمات الترجمة، المحاسبة، التسويق الرقمي، تطوير المواقع، الاستشارات العقارية والهجرة في الناظور والمغرب.",
    fr: "MOSPUK propose des services de traduction, comptabilité, marketing digital, développement web, conseil immobilier et immigration à Nador et au Maroc.",
    en: "MOSPUK offers translation, accounting, digital marketing, web development, real estate consulting, and immigration services in Nador and Morocco.",
  };

  const keywords = {
    ar: "مكتب MOSPUK, خدمات الترجمة بالناظور، محاسبة، تسويق رقمي، تطوير مواقع، استشارات عقارية، هجرة المغرب",
    fr: "MOSPUK, services de traduction Nador, comptabilité, marketing digital, développement web, conseil immobilier, immigration Maroc",
    en: "MOSPUK, translation services Nador, accounting, digital marketing, web development, real estate consulting, immigration Morocco",
  };

  const lang = i18n.language || "ar";

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={lang} />
        <title>{titles[lang]}</title>
        <meta name="description" content={descriptions[lang]} />
        <meta name="keywords" content={keywords[lang]} />
        <meta name="author" content="MOSPUK" />
        <link rel="canonical" href={`https://mospuk.com/${lang}/hero`} />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <div className="font-[Cairo] bg-gray-50 min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <JoinUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

function LangSync() {
  const { lang, section } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // 1) sync language from URL
  useEffect(() => {
    if (!lang) return;

    // لغة غير مدعومة => رجع للعربية
    if (!SUPPORTED_LANGS.includes(lang)) {
      navigate(`/ar/hero`, { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
    }
  }, [lang, i18n, navigate]);

  // 2) validate section + scroll
  useEffect(() => {
    if (!lang) return;

    const safeSection = SUPPORTED_SECTIONS.includes(section) ? section : "hero";

    // إذا section غير صحيح، صحّحه في URL
    if (section && safeSection !== section) {
      navigate(`/${lang}/${safeSection}`, { replace: true });
      return;
    }

    const el = document.getElementById(safeSection);
    if (!el) return;

    const timer = setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);

    return () => clearTimeout(timer);
  }, [lang, section, navigate]);

  return <AppLayout />;
}

export default function App() {
  const location = useLocation();

  const saved = localStorage.getItem("lang");
  const defaultLang = SUPPORTED_LANGS.includes(saved) ? saved : "ar";

  return (
    <Routes>
      {/* / => redirect to /{lang}/hero */}
      <Route path="/" element={<Navigate to={`/${defaultLang}/hero`} replace />} />

      {/* /ar => redirect to /ar/hero */}
      <Route path="/:lang" element={<LangOnlyRedirect />} />

      {/* /ar/hero etc */}
      <Route path="/:lang/:section" element={<LangSync />} />

      {/* fallback */}
      <Route path="*" element={<Navigate to={`/${defaultLang}/hero`} replace state={{ from: location.pathname }} />} />
    </Routes>
  );
}

function LangOnlyRedirect() {
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const safeLang = SUPPORTED_LANGS.includes(lang) ? lang : "ar";
    navigate(`/${safeLang}/hero`, { replace: true });
  }, [lang, navigate]);

  return null;
}
