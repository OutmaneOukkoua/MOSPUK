import React from "react";
import { useTranslation } from "react-i18next";
import { FiCheckCircle } from "react-icons/fi";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services_1_title"),
      desc: t("services_1_desc"),
    },
    {
      title: t("services_2_title"),
      desc: t("services_2_desc"),
    },
    {
      title: t("services_3_title"),
      desc: t("services_3_desc"),
    },
    {
      title: t("services_4_title"),
      desc: t("services_4_desc"),
    },
    {
      title: t("services_5_title"),
      desc: t("services_5_desc"),
    },
    {
      title: t("services_6_title"),
      desc: t("services_6_desc"),
    },
    {
      title: t("services_7_title"),
      desc: t("services_7_desc"),
    },
    {
      title: t("services_8_title"),
      desc: t("services_8_desc"),
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-green-50 via-white to-emerald-50 border-b border-green-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-black text-green-800 mb-12 text-center tracking-tight">
          {t("services_section_title")}
        </h2>
        <ol className="relative border-s-4 border-emerald-200">
          {services.map((s, i) => (
            <li key={i} className="mb-12 ms-6 group">
              <span className="absolute -start-5 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-400 via-green-400 to-emerald-600 rounded-full shadow-lg border-4 border-white group-hover:scale-105 transition">
                <span className="text-white font-black text-xl">{i + 1}</span>
              </span>
              <div className="bg-white/90 rounded-xl shadow p-6 pl-10 hover:shadow-lg transition-all">
                <h3 className="font-bold text-green-800 text-lg mb-2 flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-600" />
                  {s.title}
                </h3>
                <div className="text-gray-600 text-base">{s.desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
