"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    university: "",
    service: "",
    packageType: "",
    guests: "",
    date: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
مرحباً Evento 👋
لدي طلب حجز:

الاسم: ${formData.name}
رقم الهاتف: ${formData.phone}
الجامعة: ${formData.university}
نوع الخدمة: ${formData.service}
الباقة: ${formData.packageType}
عدد الحضور: ${formData.guests}
تاريخ الحفل: ${formData.date}

تفاصيل إضافية:
${formData.details}
`;

    const whatsappNumber = "9647XXXXXXXX"; // ضع رقمك هنا بدون +
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="booking"
      className="py-28 px-4 md:px-6 bg-gradient-to-b from-[#f8f4f1] to-white"
    >
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#165ba2] mb-16"
        >
          احجز حفلك الآن
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-2xl border border-[#f2c4ac] grid md:grid-cols-2 gap-6 text-right"
        >
          <input
            type="text"
            name="name"
            placeholder="الاسم الكامل"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none"
          />

          <input
            type="text"
            name="university"
            placeholder="اسم الجامعة"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none"
          />

          <input
            type="number"
            name="guests"
            placeholder="عدد الحضور المتوقع"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none"
          />

          <select
            name="service"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none"
          >
            <option value="">اختر نوع الخدمة</option>
            <option value="حفل تخرج كامل">حفل تخرج كامل</option>
            <option value="إخراج مسرحي">إخراج مسرحي</option>
            <option value="توثيق وتصوير">توثيق وتصوير</option>
            <option value="تنظيم جزئي">تنظيم جزئي</option>
          </select>

          <select
            name="packageType"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none"
          >
            <option value="">اختر الباقة</option>
            <option value="برونزية">برونزية</option>
            <option value="فضية">فضية</option>
            <option value="ذهبية">ذهبية</option>
            <option value="مخصصة">مخصصة حسب الطلب</option>
          </select>

          <input
            type="date"
            name="date"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none md:col-span-2"
          />

          <textarea
            name="details"
            placeholder="تفاصيل إضافية"
            rows={4}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none md:col-span-2"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-[#ba684c] text-white py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            إرسال الطلب عبر واتساب
          </button>
        </motion.form>
      </div>
    </section>
  );
}