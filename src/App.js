import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import JoinUs from "./components/JoinUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { i18n, t } = useTranslation();

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

  // متغيرات العنوان والوصف حسب اللغة
  const titles = {
    ar: "MOSPUK | مكتب خدمات الأعمال بالناظور",
    fr: "MOSPUK | Bureau de services professionnels à Nador",
    en: "MOSPUK | Business Services Office in Nador"
  };
  const descriptions = {
    ar: "مكتب MOSPUK يقدم خدمات الترجمة، المحاسبة، التسويق الرقمي، تطوير المواقع، الاستشارات العقارية والهجرة في الناظور والمغرب.",
    fr: "MOSPUK propose des services de traduction, comptabilité, marketing digital, développement web, conseil immobilier et immigration à Nador et au Maroc.",
    en: "MOSPUK offers translation, accounting, digital marketing, web development, real estate consulting, and immigration services in Nador and Morocco."
  };

  // لغة الموقع الحالية
  const lang = i18n.language || "ar";

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={lang} />
        <title>{titles[lang]}</title>
        <meta name="description" content={descriptions[lang]} />
        <meta name="keywords" content={t("seo_keywords", {
          defaultValue: "MOSPUK, مكتب خدمات, الترجمة, المحاسبة, التسويق الرقمي, تطوير المواقع, الناظور, المغرب"
        })} />
        <meta name="author" content="MOSPUK" />
        {/* canonical URL: عدل الرابط لرابط موقعك النهائي */}
        <link rel="canonical" href="https://mospuk.com/" />
        {/* favicon افتراضي إن وُجد */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
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

export default App;