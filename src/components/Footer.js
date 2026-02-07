import React from "react";
import { useTranslation } from "react-i18next";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-950 text-gray-300 pt-14 pb-8 border-t-4 border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* عمود: عن الشركة */}
        <div>
          <div className="text-2xl font-black text-emerald-400 mb-4 tracking-tight">
            MOSPUK
          </div>
          <div className="text-gray-400 text-sm leading-relaxed">
            {t("footer_about")}
          </div>
        </div>

        {/* عمود: خدمات */}
        <div>
          <div className="font-bold text-emerald-300 mb-3">{t("footer_services")}</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-emerald-300 transition">{t("footer_service1")}</a></li>
            <li><a href="#services" className="hover:text-emerald-300 transition">{t("footer_service2")}</a></li>
            <li><a href="#services" className="hover:text-emerald-300 transition">{t("footer_service3")}</a></li>
            <li><a href="#services" className="hover:text-emerald-300 transition">{t("footer_service4")}</a></li>
            <li><a href="#services" className="hover:text-emerald-300 transition">{t("footer_service5")}</a></li>
            <li><a href="#services" className="hover:text-emerald-300 transition">{t("footer_service6")}</a></li>
          </ul>
        </div>

        {/* عمود: روابط سريعة */}
        <div>
          <div className="font-bold text-emerald-300 mb-3">{t("footer_quicklinks")}</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-emerald-300 transition">{t("footer_link_about")}</a></li>
            <li><a href="#joinus" className="hover:text-emerald-300 transition">{t("footer_link_joinus")}</a></li>
            <li><a href="#contact" className="hover:text-emerald-300 transition">{t("footer_link_contact")}</a></li>
          </ul>
        </div>

        {/* عمود: تواصل معنا */}
        <div>
          <div className="font-bold text-emerald-300 mb-3">{t("footer_contactus")}</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FiMail className="text-emerald-400" />
              <a href={`mailto:${t("footer_email")}`} className="hover:underline hover:text-emerald-300 transition select-all">
                {t("footer_email")}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-emerald-400" />
              <span dir="ltr" className="select-all tracking-widest">{t("footer_phone")}</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-emerald-400" />
              <span className="select-all">{t("footer_address1")}</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-emerald-400" />
              <span className="select-all">{t("footer_address2")}</span>
            </li>
          </ul>
        </div>
      </div>
      {/* شريط الحقوق السفلي */}
      <div className="mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500 tracking-wide">
        {t("footer_copyright")} &copy; MOSPUK 2025.
      </div>
    </footer>
  );
}