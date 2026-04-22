"use client";

import { useState } from "react";
import { motion } from "framer-motion";
type FormDataType = {
  name: string;
  phone: string;
  university: string;
  service: string;
  packageType: string;
  guests: string;
  date: string;
  details: string;

  presenter: string;
  photographer: string;
  stageDesign: string;
  systemTeam: string;

  technicalServices: string[];
};

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

  presenter: "",
  photographer: "",
  stageDesign: "",
  systemTeam: "",
  technicalServices: [] as string[],
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

المقدم المختار:
${formData.presenter}

المصور:
${formData.photographer}

تصميم المسرح:
${formData.stageDesign}
لجنة النظام:
${formData.systemTeam}

تفاصيل إضافية:
${formData.details}
الخدمات الفنية:
${formData.technicalServices.join(", ")}
`;

    const whatsappNumber = "96775388127"; // ضع رقمك هنا بدون +
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };
const presenters = [
  {
    id: "classic",
    name: "مقدم رسمي كلاسيكي",
    image: "/presenters/classic.jpg",
  },
  {
    id: "energetic",
    name: "مقدم شبابي محفز",
    image: "/presenters/energetic.jpg",
  },
  {
    id: "academic",
    name: "مقدم أكاديمي هادئ",
    image: "/presenters/academic.jpg",
  },
];

const photographers = [
  {
    id: "main",
    name: "مصور Evento الرسمي",
    image: "/photographers/main.jpg",
  },
];

const stageDesigns = [
  {
    id: "classic",
    name: "تصميم كلاسيكي",
    image: "/stages/classic.jpg",
  },
  {
    id: "school",
    name: "تصميم مدرسي",
    image: "/stages/school.jpg",
  },
  {
    id: "modern",
    name: "تصميم محفز عصري",
    image: "/stages/modern.jpg",
  },
  {
    id: "luxury",
    name: "تصميم فاخر",
    image: "/stages/luxury.jpg",
  },
];

const selectOption = (field: string, value: string) => {
  setFormData({
    ...formData,
    [field]: value,
  });
};

const systemTeams = [
  {
    id: "evento",
    name: "فريق Evento الرسمي",
    description: "تنظيم متكامل بإشراف فريقنا المعتمد",
    image: "/system/evento.jpg",
  },
  {
    id: "professional",
    name: "فريق احترافي موسع",
    description: "عدد أكبر من المنظمين لضبط الحفل",
    image: "/system/professional.jpg",
  },
  {
    id: "students",
    name: "فريق طلابي منظم",
    description: "تنظيم مرن يناسب حفلات التخرج",
    image: "/system/students.jpg",
  },
  {
    id: "vip",
    name: "تنسيق كامل VIP",
    description: "تنظيم شامل للحفل مع إشراف مباشر",
    image: "/system/vip.jpg",
  },
];

const technicalServices = [
  {
    id: "coordination",
    name: "لجنة تنسيق وترتيب الخريجين",
    image: "/services/coordination.jpg",
  },
  {
    id: "shows",
    name: "الفقرات الفنية",
    image: "/services/shows.jpg",
  },
  {
    id: "flowers",
    name: "الزهرات",
    image: "/services/flowers.jpg",
  },
  {
    id: "projector",
    name: "جهاز العرض",
    image: "/services/projector.jpg",
  },
  {
    id: "sound",
    name: "الصوتيات",
    image: "/services/sound.jpg",
  },
  {
    id: "lighting",
    name: "الإضاءة الاحترافية",
    image: "/services/lighting.jpg",
  },
  {
    id: "led",
    name: "شاشة LED",
    image: "/services/led.jpg",
  },
];

const toggleTechnicalService = (
  serviceName: string
) => {
  setFormData((prev: any) => {
    const exists =
      prev.technicalServices.includes(
        serviceName
      );

    return {
      ...prev,
      technicalServices: exists
        ? prev.technicalServices.filter(
            (s: string) => s !== serviceName
          )
        : [
            ...prev.technicalServices,
            serviceName,
          ],
    };
  });
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

<div className="md:col-span-2 text-right">

  <h3 className="text-xl font-bold text-[#165ba2] mb-4">
    اختر مقدم الحفل
  </h3>

  <div className="grid md:grid-cols-3 gap-4">

    {presenters.map((p) => (
      <div
        key={p.id}
        onClick={() => selectOption("presenter", p.name)}
        className={`border rounded-xl p-3 cursor-pointer transition hover:shadow-lg ${
          formData.presenter === p.name
            ? "border-[#165ba2]"
            : ""
        }`}
      >
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-40 object-cover rounded-lg mb-2"
        />

        <p className="font-semibold">
          {p.name}
        </p>

      </div>
    ))}

  </div>

</div>


<div className="md:col-span-2 text-right">

  <h3 className="text-xl font-bold text-[#165ba2] mb-2">
    اختر المصور
  </h3>

  <p className="text-sm text-gray-500 mb-4">
    حالياً نوفر مصورنا الرسمي،
    وسيتم إضافة مصورين آخرين قريباً.
  </p>

  <div className="grid md:grid-cols-3 gap-4">

    {photographers.map((p) => (
      <div
        key={p.id}
        onClick={() =>
          selectOption("photographer", p.name)
        }
        className={`border rounded-xl p-3 cursor-pointer hover:shadow-lg ${
          formData.photographer === p.name
            ? "border-[#165ba2]"
            : ""
        }`}
      >
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-40 object-cover rounded-lg mb-2"
        />

        <p className="font-semibold">
          {p.name}
        </p>

      </div>
    ))}

  </div>

</div>

<div className="md:col-span-2 text-right">

  <h3 className="text-xl font-bold text-[#165ba2] mb-4">
    اختر تصميم المسرح
  </h3>

  <div className="grid md:grid-cols-4 gap-4">

    {stageDesigns.map((d) => (
      <div
        key={d.id}
        onClick={() =>
          selectOption("stageDesign", d.name)
        }
        className={`border rounded-xl p-3 cursor-pointer hover:shadow-lg ${
          formData.stageDesign === d.name
            ? "border-[#165ba2]"
            : ""
        }`}
      >
        <img
          src={d.image}
          alt={d.name}
          className="w-full h-40 object-cover rounded-lg mb-2"
        />

        <p className="font-semibold text-center">
          {d.name}
        </p>

      </div>
    ))}

  </div>

</div>

<div className="md:col-span-2 text-right">

  <h3 className="text-xl font-bold text-[#165ba2] mb-4">
    اختر لجنة النظام والخدمات
  </h3>

  <p className="text-sm text-gray-500 mb-6">
    فريق التنظيم هو أساس نجاح الحفل، اختر المستوى المناسب
    لطبيعة حفل التخرج وعدد الحضور.
  </p>

  <div className="grid md:grid-cols-2 gap-4">

    {systemTeams.map((team) => (
      <div
        key={team.id}
        onClick={() =>
          selectOption("systemTeam", team.name)
        }
        className={`border rounded-xl p-4 cursor-pointer transition hover:shadow-lg ${
          formData.systemTeam === team.name
            ? "border-[#165ba2] bg-blue-50"
            : ""
        }`}
      >
        <img
          src={team.image}
          alt={team.name}
          className="w-full h-44 object-cover rounded-lg mb-3"
        />

        <h4 className="font-semibold text-lg">
          {team.name}
        </h4>

        <p className="text-sm text-gray-600">
          {team.description}
        </p>

      </div>
    ))}

  </div>

</div>

<div className="md:col-span-2 text-right">

  <h3 className="text-xl font-bold text-[#165ba2] mb-4">
    اختر الخدمات الفنية للحفل
  </h3>

  <p className="text-sm text-gray-500 mb-6">
    يمكنك اختيار أكثر من خدمة حسب احتياج حفل التخرج.
  </p>

  <div className="grid md:grid-cols-3 gap-4">

    {technicalServices.map((service) => (
      <div
        key={service.id}
        onClick={() =>
          toggleTechnicalService(service.name)
        }
        className={`border rounded-xl p-4 cursor-pointer transition hover:shadow-lg ${
          formData.technicalServices.includes(service.name)
            ? "border-[#165ba2] bg-blue-50"
            : ""
        }`}
      >
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />

        <p className="font-semibold text-center">
          {service.name}
        </p>

      </div>
    ))}

  </div>

</div>

<div className="md:col-span-2 bg-gray-50 border rounded-xl p-4 text-right">

  <h3 className="font-bold text-lg text-[#165ba2] mb-3">
    ملخص الطلب
  </h3>

  <p>
    <strong>المقدم:</strong>{" "}
    {formData.presenter || "لم يتم الاختيار"}
  </p>

  <p>
    <strong>المصور:</strong>{" "}
    {formData.photographer || "لم يتم الاختيار"}
  </p>

  <p>
    <strong>تصميم المسرح:</strong>{" "}
    {formData.stageDesign || "لم يتم الاختيار"}
  </p>

  <p>
    <strong>لجنة النظام:</strong>{" "}
    {formData.systemTeam || "لم يتم الاختيار"}
  </p>

  <div className="mt-2">
    <strong>الخدمات الفنية:</strong>

    {formData.technicalServices.length === 0 ? (
      <p>لا يوجد</p>
    ) : (
      <ul className="list-disc pr-5">
        {formData.technicalServices.map(
          (service, index) => (
            <li key={index}>
              {service}
            </li>
          )
        )}
      </ul>
    )}
  </div>

</div>

          <textarea
            name="details"
            placeholder="تفاصيل إضافية"
            rows={4}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none md:col-span-2"
          />


<div className="md:col-span-2 bg-gradient-to-r from-[#165ba2] to-[#1d74d1] text-white rounded-2xl p-6 text-right">

  <h3 className="text-xl font-bold mb-3">
    مزايا إضافية مع كل حفل
  </h3>

  <p className="text-sm mb-4">
    نحرص على تقديم تفاصيل إضافية تجعل حفل التخرج أكثر تنظيمًا وتميزًا،
    وذلك تقديرًا لثقتكم بنا.
  </p>

  <div className="grid md:grid-cols-3 gap-3 text-sm">

    <div className="flex items-center gap-2">
      ✔ تصميم وطباعة احترافية
    </div>

    <div className="flex items-center gap-2">
      ✔ تجهيزات تنظيمية متكاملة
    </div>

    <div className="flex items-center gap-2">
      ✔ دعم كامل لفريق الحفل
    </div>

    <div className="flex items-center gap-2">
      ✔ تفاصيل إضافية مميزة
    </div>

    <div className="flex items-center gap-2">
      ✔ هدايا وتنظيم خاص للخريجين
    </div>

    <div className="flex items-center gap-2">
      ✔ مفاجآت تنظيمية للحفل
    </div>

  </div>

</div>
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