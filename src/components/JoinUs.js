import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiCheckCircle } from "react-icons/fi";
import emailjs from "emailjs-com";

export default function JoinUs() {
  const { i18n, t } = useTranslation();
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const fields = [
    t("joinus_field_translation"),
    t("joinus_field_accounting"),
    t("joinus_field_marketing"),
    t("joinus_field_development"),
    t("joinus_field_design"),
    t("joinus_field_content"),
    t("joinus_field_realestate"),
    t("joinus_field_immigration"),
  ];

  const perks = [
    t("joinus_perk_env"),
    t("joinus_perk_career"),
    t("joinus_perk_salary"),
    t("joinus_perk_remote"),
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setStatus("success");
        formRef.current.reset();
      },
      () => {
        setStatus("error");
      }
    );
  };

  return (
    <section id="joinus" className="py-24 bg-gradient-to-br from-emerald-50 via-white to-green-50 border-b border-green-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* الجانب التحفيزي */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-green-800 mb-5 tracking-tight">
            {t("joinus_title")}
          </h2>
          <div className="text-lg text-gray-700 font-medium mb-8 leading-relaxed">
            {t("joinus_desc_1")}<br />
            {t("joinus_desc_2")}
          </div>
          <ul className="space-y-4">
            {perks.map((perk, i) => (
              <li key={i} className="flex items-center gap-2">
                <FiCheckCircle className="text-emerald-600" />
                <span className="text-gray-800 font-semibold">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* الاستمارة المختصرة */}
        <div className="relative">
          <div className="absolute -top-10 -left-8 w-28 h-28 bg-green-100 opacity-20 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-emerald-200 opacity-20 rounded-full blur-2xl -z-10"></div>
          <div className="bg-white/90 rounded-3xl shadow-2xl p-10">
            <h3 className="text-xl font-bold text-green-700 mb-5 text-center">
              {t("joinus_form_title")}
            </h3>

            {/* رسالة توجيه لإرسال السيرة الذاتية */}
            <div className="bg-blue-50 text-blue-900 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-center leading-relaxed">
              <strong>{t("joinus_send_cv_title")}</strong><br />
              {t("joinus_send_cv_text")} <a href="mailto:emploi.mospuk@gmail.com" className="font-bold underline text-blue-700">emploi.mospuk@gmail.com</a>
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                required
                placeholder={t("joinus_placeholder_name")}
                className="p-3 border border-green-200 rounded-xl bg-white focus:outline-none focus:border-green-600 transition"
              />
              <input
                type="email"
                name="email"
                required
                placeholder={t("joinus_placeholder_email")}
                className="p-3 border border-green-200 rounded-xl bg-white focus:outline-none focus:border-green-600 transition"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder={t("joinus_placeholder_phone")}
                className={`p-3 border border-green-200 rounded-xl bg-white focus:outline-none focus:border-green-600 transition ${
                  i18n.language === "ar" ? "text-right" : "text-left"
                }`}
                style={{
                  direction: i18n.language === "ar" ? "ltr" : "ltr",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              />
              <select
                name="field"
                required
                className="p-3 border border-green-200 rounded-xl bg-white text-gray-700 focus:outline-none focus:border-green-600 transition"
              >
                <option value="">{t("joinus_select_field")}</option>
                {fields.map((f, i) => (
                  <option key={i} value={f}>{f}</option>
                ))}
              </select>
              <textarea
                name="motivation"
                rows={2}
                required
                placeholder={t("joinus_placeholder_motivation")}
                className="p-3 border border-green-200 rounded-xl bg-white focus:outline-none focus:border-green-600 transition resize-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-gradient-to-l from-green-700 to-emerald-400 text-white font-bold rounded-2xl py-3 shadow-lg text-lg hover:from-green-800 hover:to-emerald-500 hover:scale-105 transition-all"
              >
                {status === "loading" ? t("sending") : t("joinus_submit")}
              </button>
              
              {/* --- الرسالة تظهر تحت الزر مباشرة --- */}
              {status === "success" && (
                <div className="flex flex-col items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl shadow-lg px-4 py-5 my-2 animate-fade-in">
                  <FiCheckCircle className="text-emerald-600" size={38} />
                  <div className="font-bold text-emerald-800 text-lg">{t("joinus_sent_success")}</div>
                  <div className="text-emerald-700 text-sm">{t("joinus_sent_success_desc")}</div>
                </div>
              )}
              {status === "error" && (
                <div className="flex flex-col items-center justify-center gap-2 bg-red-50 border border-red-200 rounded-xl shadow-lg px-4 py-5 my-2 animate-fade-in">
                  <svg width="38" height="38" viewBox="0 0 20 20" fill="none" className="text-red-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-10V6a1 1 0 10-2 0v2a1 1 0 002 0zm-1 6a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/></svg>
                  <div className="font-bold text-red-800 text-lg">{t("joinus_sent_error")}</div>
                  <div className="text-red-700 text-sm">{t("joinus_sent_error_desc")}</div>
                </div>
              )}

              <div className="text-xs text-gray-400 text-center mt-2">
                {t("joinus_privacy")}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
