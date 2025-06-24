import React from "react";
import { useTranslation } from "react-i18next";
import { FiUserCheck, FiLayers, FiGlobe } from "react-icons/fi";

export default function About() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FiUserCheck className="text-3xl text-emerald-500 mb-3" />,
      title: t("about_feature1_title"),
      desc: t("about_feature1_desc"),
    },
    {
      icon: <FiLayers className="text-3xl text-emerald-500 mb-3" />,
      title: t("about_feature2_title"),
      desc: t("about_feature2_desc"),
    },
    {
      icon: <FiGlobe className="text-3xl text-emerald-500 mb-3" />,
      title: t("about_feature3_title"),
      desc: t("about_feature3_desc"),
    },
  ];

  const stats = [
    { value: "30+", label: t("about_stat1") },
    { value: "12", label: t("about_stat2") },
    { value: "5", label: t("about_stat3") },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white via-emerald-50 to-white border-b border-green-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* العنوان والوصف */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-black text-green-800 mb-4 tracking-tight">
            {t("about_title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            {t("about_desc")}
          </p>
        </div>
        {/* المميزات - أعمدة ثلاثية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {features.map((f, i) => (
            <div key={i} className="bg-white/90 rounded-2xl shadow-lg border-t-4 border-emerald-400 p-8 text-center flex flex-col items-center hover:shadow-2xl transition">
              {f.icon}
              <h3 className="font-bold text-lg text-green-800 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-base font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
        {/* إحصائيات */}
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-emerald-50 rounded-xl px-7 py-5 shadow border border-emerald-100 min-w-[110px]"
            >
              <div className="text-3xl font-extrabold text-emerald-600 mb-1">{stat.value}</div>
              <div className="text-gray-700 text-base font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
