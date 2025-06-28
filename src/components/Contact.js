import React from "react";
import { useTranslation } from "react-i18next";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white via-emerald-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col items-center gap-10">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 text-center mb-2 tracking-tight">
            {t("contact_title")}
          </h2>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="flex flex-col items-center gap-2 border rounded-xl shadow-sm p-6 bg-gradient-to-br from-emerald-50 to-white">
              <FiPhone className="text-emerald-600 text-3xl mb-1" />
              <div className="text-base font-semibold text-gray-700">{t("contact_phone_label")}</div>
              <div dir="ltr" className="text-lg font-mono text-gray-800 select-all tracking-widest">{t("contact_phone")}</div>
            </div>
            <div className="flex flex-col items-center gap-2 border rounded-xl shadow-sm p-6 bg-gradient-to-br from-emerald-50 to-white">
              <FiMail className="text-emerald-600 text-3xl mb-1" />
              <div className="text-base font-semibold text-gray-700">{t("contact_email_label")}</div>
              <a
                href={`mailto:${t("contact_email")}`}
                className="text-lg text-blue-700 hover:underline select-all"
              >
                {t("contact_email")}
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 border rounded-xl shadow-sm p-6 bg-gradient-to-br from-emerald-50 to-white">
              <svg className="text-emerald-600 mb-1" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="text-base font-semibold text-gray-700">{t("contact_hours_label") || "Working Hours"}</div>
              <div className="text-gray-800 text-sm text-center leading-relaxed">
                {t("contact_hours") || "Mon–Fri: 09:00–18:00"}
              </div>
            </div>
          </div>
          {/* Address/Maps */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {/* Main Office */}
            <div className="flex flex-col bg-white rounded-2xl border shadow-sm p-5">
              <div className="flex items-center gap-2 mb-2 text-green-900 font-bold text-lg">
                <FiMapPin />
                {t("contact_main_office")}
              </div>
              <a
                href={t("contact_main_maps_link")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline text-xs"
              >
                {t("contact_show_map")}
              </a>
              <div className="rounded-xl overflow-hidden border mt-4">
                <iframe
                  title={t("contact_main_office")}
                  src={t("contact_main_maps_iframe")}
                  width="100%"
                  height="160"
                  allowFullScreen
                  loading="lazy"
                  className="w-full"
                  style={{ border: "none" }}
                ></iframe>
              </div>
            </div>
            {/* Branch Office */}
            <div className="flex flex-col bg-white rounded-2xl border shadow-sm p-5">
              <div className="flex items-center gap-2 mb-2 text-green-900 font-bold text-lg">
                <FiMapPin />
                {t("contact_branch_office")}
              </div>
              <a
                href={t("contact_branch_maps_link")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline text-xs"
              >
                {t("contact_show_map")}
              </a>
              <div className="rounded-xl overflow-hidden border mt-4">
                <iframe
                  title={t("contact_branch_office")}
                  src={t("contact_branch_maps_iframe")}
                  width="100%"
                  height="160"
                  allowFullScreen
                  loading="lazy"
                  className="w-full"
                  style={{ border: "none" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
