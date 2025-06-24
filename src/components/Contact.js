import React from "react";
import { useTranslation } from "react-i18next";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-emerald-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto rounded-3xl shadow-2xl bg-white/80 p-10 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-green-800 mb-8 text-center tracking-tight">
          {t("contact_title")}
        </h2>
        <div className="w-full flex flex-col gap-8 mb-8">
          {/* رقم الهاتف */}
          <div className="flex items-center gap-4 bg-white/80 border border-green-100 rounded-2xl shadow p-5 hover:shadow-lg transition">
            <FiPhone className="text-green-700 text-3xl" />
            <div className="text-right">
              <div className="font-semibold text-lg text-green-800">{t("contact_phone_label")}</div>
              <div dir="ltr" className="text-xl text-gray-700 select-all tracking-widest">{t("contact_phone")}</div>
            </div>
          </div>
          {/* البريد الإلكتروني */}
          <div className="flex items-center gap-4 bg-white/80 border border-green-100 rounded-2xl shadow p-5 hover:shadow-lg transition">
            <FiMail className="text-green-700 text-3xl" />
            <div className="text-right">
              <div className="font-semibold text-lg text-green-800">{t("contact_email_label")}</div>
              <div className="text-xl">
                <a href={`mailto:${t("contact_email")}`} className="text-blue-700 hover:underline select-all">
                  {t("contact_email")}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* المواقع الجغرافية */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* الموقع الأول */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2 text-green-800 font-bold text-lg">
              <FiMapPin />
              {t("contact_main_office")}
            </div>
            <div className="mb-2 text-gray-700 font-medium text-center">
              {t("contact_main_address")}<br />
              <a
                href={t("contact_main_maps_link")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                {t("contact_show_map")}
              </a>
            </div>
            <iframe
              title={t("contact_main_office")}
              src={t("contact_main_maps_iframe")}
              width="100%"
              height="210"
              allowFullScreen
              loading="lazy"
              className="rounded-xl border shadow"
            ></iframe>
          </div>
          {/* الموقع الثاني */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2 text-green-800 font-bold text-lg">
              <FiMapPin />
              {t("contact_branch_office")}
            </div>
            <div className="mb-2 text-gray-700 font-medium text-center">
              {t("contact_branch_address")}<br />
              <a
                href={t("contact_branch_maps_link")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                {t("contact_show_map")}
              </a>
            </div>
            <iframe
              title={t("contact_branch_office")}
              src={t("contact_branch_maps_iframe")}
              width="100%"
              height="210"
              allowFullScreen
              loading="lazy"
              className="rounded-xl border shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
