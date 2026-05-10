// src/components/BookingForm.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormDataType = {
  // الحقول الأساسية
  name: string;
  phone: string;
  university: string;
  service: string;
  packageType: string;
  guests: string;
  date: string;
  details: string;

  // فريق الحفل
  presenter: string;
  photographer: string;
  artists: string[];

  // الفقرات الفنية (متضمنة فقرة مسرحية منفصلة)
  technicalServices: string[];
  theatricalPlay: string; // فقرة مسرحية (اختيار نوعها)
  graduationSong: string;
  operetta: boolean;

  // لجنة النظام
  systemTeam: string;

  // الضيافة والخدمات اللوجستية
  catering: {
    water: boolean;
    juices: boolean;
    cake: boolean;
    snacks: boolean;
  };
  logistics: {
    decoration: boolean;
    security: boolean;
    transport: boolean;
    hospitalityTeam: boolean;
  };

  // الرعاية والتجهيزات الإضافية
  sponsorship: string;
  emergencyFund: boolean;
  graduationOutfits: boolean;
};

export default function BookingForm() {
  const [formData, setFormData] = useState<FormDataType>({
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
    artists: [],
    technicalServices: [],
    theatricalPlay: "",
    graduationSong: "",
    operetta: false,
    systemTeam: "",
    catering: {
      water: false,
      juices: false,
      cake: false,
      snacks: false,
    },
    logistics: {
      decoration: false,
      security: false,
      transport: false,
      hospitalityTeam: false,
    },
    sponsorship: "",
    emergencyFund: false,
    graduationOutfits: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      if (name.startsWith("catering.")) {
        const key = name.split(".")[1] as keyof typeof formData.catering;
        setFormData(prev => ({
          ...prev,
          catering: { ...prev.catering, [key]: checked }
        }));
      } else if (name.startsWith("logistics.")) {
        const key = name.split(".")[1] as keyof typeof formData.logistics;
        setFormData(prev => ({
          ...prev,
          logistics: { ...prev.logistics, [key]: checked }
        }));
      } else if (name === "operetta") {
        setFormData(prev => ({ ...prev, operetta: checked }));
      } else if (name === "emergencyFund") {
        setFormData(prev => ({ ...prev, emergencyFund: checked }));
      } else if (name === "graduationOutfits") {
        setFormData(prev => ({ ...prev, graduationOutfits: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const toggleTechnicalService = (serviceName: string) => {
    setFormData(prev => {
      const exists = prev.technicalServices.includes(serviceName);
      return {
        ...prev,
        technicalServices: exists
          ? prev.technicalServices.filter(s => s !== serviceName)
          : [...prev.technicalServices, serviceName]
      };
    });
  };

  const toggleArtist = (artistName: string) => {
    setFormData(prev => {
      const exists = prev.artists.includes(artistName);
      return {
        ...prev,
        artists: exists
          ? prev.artists.filter(a => a !== artistName)
          : [...prev.artists, artistName]
      };
    });
  };

  const selectOption = (field: keyof FormDataType, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `مرحباً Evento 👋\nلدي طلب حجز:\n\n`;
    message += `═══════════════════════════════\n`;
    message += `📋 المعلومات الأساسية\n`;
    message += `═══════════════════════════════\n`;
    message += `الاسم: ${formData.name}\n`;
    message += `رقم الهاتف: ${formData.phone}\n`;
    message += `الجامعة: ${formData.university}\n`;
    message += `نوع الخدمة: ${formData.service}\n`;
    message += `الباقة: ${formData.packageType}\n`;
    message += `عدد الحضور: ${formData.guests}\n`;
    message += `تاريخ الحفل: ${formData.date}\n\n`;

    message += `═══════════════════════════════\n`;
    message += `🎭 فريق الحفل\n`;
    message += `═══════════════════════════════\n`;
    message += `المقدم: ${formData.presenter || "لم يتم الاختيار"}\n`;
    message += `المصور: ${formData.photographer || "لم يتم الاختيار"}\n`;
    message += `الفنانون: ${formData.artists.length ? formData.artists.join(", ") : "لا يوجد"}\n\n`;

    message += `═══════════════════════════════\n`;
    message += `🎪 الفقرات الفنية (بما فيها فقرة مسرحية)\n`;
    message += `═══════════════════════════════\n`;
    message += `الخدمات الفنية الأخرى: ${formData.technicalServices.length ? formData.technicalServices.join(", ") : "لا شيء"}\n`;
    message += `فقرة مسرحية: ${formData.theatricalPlay || "لا يوجد"}\n`;
    message += `أغنية الدفعة: ${formData.graduationSong || "لم يتم الاختيار"}\n`;
    message += `أوبريت الخريجين: ${formData.operetta ? "✅ نعم" : "❌ لا"}\n\n`;

    message += `═══════════════════════════════\n`;
    message += `👥 لجنة النظام\n`;
    message += `═══════════════════════════════\n`;
    message += `${formData.systemTeam || "لم يتم الاختيار"}\n\n`;

    message += `═══════════════════════════════\n`;
    message += `🍽️ الضيافة والخدمات اللوجستية\n`;
    message += `═══════════════════════════════\n`;
    const cateringItems = [];
    if (formData.catering.water) cateringItems.push("ماء");
    if (formData.catering.juices) cateringItems.push("عصائر");
    if (formData.catering.cake) cateringItems.push("كيك");
    if (formData.catering.snacks) cateringItems.push("مقبلات");
    message += `الضيافة: ${cateringItems.length ? cateringItems.join(", ") : "لا شيء"}\n`;

    const logisticsItems = [];
    if (formData.logistics.decoration) logisticsItems.push("ديكور");
    if (formData.logistics.security) logisticsItems.push("أمن");
    if (formData.logistics.transport) logisticsItems.push("نقل");
    if (formData.logistics.hospitalityTeam) logisticsItems.push("فريق ضيافة");
    message += `الخدمات اللوجستية: ${logisticsItems.length ? logisticsItems.join(", ") : "لا شيء"}\n\n`;

    message += `═══════════════════════════════\n`;
    message += `💎 الرعاية والتجهيزات الإضافية\n`;
    message += `═══════════════════════════════\n`;
    message += `مستوى الرعاية: ${formData.sponsorship || "لا يوجد"}\n`;
    message += `احتياطي طوارئ: ${formData.emergencyFund ? "✅ نعم" : "❌ لا"}\n`;
    message += `مستلزمات التخرج: ${formData.graduationOutfits ? "✅ نعم" : "❌ لا"}\n\n`;

    message += `═══════════════════════════════\n`;
    message += `📝 تفاصيل إضافية\n`;
    message += `═══════════════════════════════\n`;
    message += `${formData.details || "لا توجد تفاصيل إضافية"}`;

    const whatsappNumber = "96775388127";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // البيانات الثابتة
  const presenters = [
    { id: "p1", name: "صدام القدسي", image: "/presenters/professional.jpg" },
    { id: "p2", name: "محمد هلال", image: "/presenters/energetic.jpg" },
    { id: "p3", name: "قادري المقطري", image: "/presenters/academic.jpg" },
  ];

  const photographers = [
    { id: "ph1", name: "خالد البناء", image: "/photographers/main.jpg" },
    { id: "ph2", name: "خلدون الشرعبي", image: "/photographers/pro.jpg" },
    { id: "ph3", name: "عمار ياسر", image: "/photographers/video.jpg" },
    { id: "ph4", name: "الربع ولد الشيخ", image: "/photographers/video2.jpg" },
  ];

  const artistsList = [
    { id: "a1", name: "منشد / مطرب", image: "/artists/singer.jpg" },
    { id: "a2", name: "عازف", image: "/artists/musician.jpg" },
    { id: "a3", name: "فريق استعراضي", image: "/artists/dance.jpg" },
  ];

  // خيارات الفقرة المسرحية (منفصلة عن تصميم المسرح)
  const theatricalPlayOptions = [
    { value: "تمثيلية قصيرة (5-10 دقائق)", desc: "فقرة تمثيلية خفيفة تناسب حفلات التخرج" },
    { value: "اسكتش كوميدي", desc: "فقرة فكاهية تزيد من حماسة الحضور" },
    { value: "مسرحية تفاعلية", desc: "مشاركة الجمهور والخريجين في الأحداث" },
    { value: "فقرة استعراضية تمثيلية", desc: "مزج بين التمثيل والاستعراض" },
  ];

  const systemTeams = [
    { id: "evento", name: "فريق Evento الرسمي", description: "تنظيم متكامل بإشراف فريقنا المعتمد", image: "/system/evento.jpg" },
    { id: "professional", name: "فريق احترافي موسع", description: "عدد أكبر من المنظمين لضبط الحفل", image: "/system/professional.jpg" },
    { id: "students", name: "فريق طلابي منظم", description: "تنظيم مرن يناسب حفلات التخرج", image: "/system/students.jpg" },
    { id: "vip", name: "تنسيق كامل VIP", description: "تنظيم شامل للحفل مع إشراف مباشر", image: "/system/vip.jpg" },
  ];

  const technicalServicesList = [
    { id: "coordination", name: "لجنة تنسيق وترتيب الخريجين", image: "/services/coordination.jpg" },
    { id: "shows", name: "الفقرات الفنية (غناء - استعراض)", image: "/services/shows.jpg" },
    { id: "flowers", name: "الزهرات", image: "/services/flowers.jpg" },
    { id: "projector", name: "جهاز العرض", image: "/services/projector.jpg" },
    { id: "sound", name: "الصوتيات", image: "/services/sound.jpg" },
    { id: "lighting", name: "الإضاءة الاحترافية", image: "/services/lighting.jpg" },
    { id: "led", name: "شاشة LED", image: "/services/led.jpg" },
  ];

  const graduationSongs = [
    "أغنية الدفعة 1",
    "أغنية الدفعة 2",
    "أغنية خاصة (طلب)"
  ];

  const sponsorshipLevels = [
    { value: "ماسي (رئيسي)", desc: "شعار في مقدمة المنصة، كلمة رسمية، شريك النجاح" },
    { value: "ذهبي", desc: "شعار في المنصة، بركات عند المدخل، تكريم خاص" },
    { value: "فضي", desc: "شعار في لوحة جماعية، شكر شفهي، شعار في التغطية" },
  ];

  return (
    <section id="booking" className="py-28 px-4 md:px-6 bg-gradient-to-b from-[#f8f4f1] to-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#165ba2] text-center mb-16"
        >
          احجز حفلك الآن
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-2xl border border-[#f2c4ac] space-y-12"
        >
          {/* ========== القسم 1: المعلومات الأساسية ========== */}
          <div className="border-b border-gray-200 pb-8">
            <h3 className="text-2xl font-bold text-[#165ba2] mb-6 flex items-center gap-2">
              <span>📋</span> المعلومات الأساسية
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="الاسم الكامل" required onChange={handleChange} className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none" />
              <input type="tel" name="phone" placeholder="رقم الهاتف" required onChange={handleChange} className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none" />
              <input type="text" name="university" placeholder="اسم الجامعة" required onChange={handleChange} className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none" />
              <input type="number" name="guests" placeholder="عدد الحضور المتوقع" required onChange={handleChange} className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none" />
              <select name="service" required onChange={handleChange} className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none">
                <option value="">اختر نوع الخدمة</option>
                <option value="حفل تخرج كامل">حفل تخرج كامل</option>
                <option value="إخراج مسرحي">إخراج مسرحي</option>
                <option value="توثيق وتصوير">توثيق وتصوير</option>
                <option value="تنظيم جزئي">تنظيم جزئي</option>
              </select>
              <select name="packageType" required onChange={handleChange} className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none">
                <option value="">اختر الباقة</option>
                <option value="برونزية">برونزية</option>
                <option value="فضية">فضية</option>
                <option value="ذهبية">ذهبية</option>
                <option value="مخصصة">مخصصة حسب الطلب</option>
              </select>
              <input type="date" name="date" required onChange={handleChange} className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none" />
            </div>
          </div>

          {/* ========== القسم 2: فريق الحفل ========== */}
          <div className="border-b border-gray-200 pb-8">
            <h3 className="text-2xl font-bold text-[#165ba2] mb-6 flex items-center gap-2">
              <span>🎭</span> فريق الحفل
            </h3>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">اختر مقدم الحفل</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {presenters.map(p => (
                  <div key={p.id} onClick={() => selectOption("presenter", p.name)} className={`border rounded-xl p-3 cursor-pointer transition hover:shadow-lg ${formData.presenter === p.name ? "border-[#165ba2] bg-blue-50" : ""}`}>
                    <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-lg mb-2" />
                    <p className="font-semibold text-center">{p.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">اختر المصور</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {photographers.map(p => (
                  <div key={p.id} onClick={() => selectOption("photographer", p.name)} className={`border rounded-xl p-3 cursor-pointer transition hover:shadow-lg ${formData.photographer === p.name ? "border-[#165ba2] bg-blue-50" : ""}`}>
                    <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-lg mb-2" />
                    <p className="font-semibold text-center">{p.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">اختر الفنانين</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {artistsList.map(artist => (
                  <div key={artist.id} onClick={() => toggleArtist(artist.name)} className={`border rounded-xl p-3 cursor-pointer transition hover:shadow-lg ${formData.artists.includes(artist.name) ? "border-[#165ba2] bg-blue-50" : ""}`}>
                    <img src={artist.image} alt={artist.name} className="w-full h-40 object-cover rounded-lg mb-2" />
                    <p className="font-semibold text-center">{artist.name}</p>
                  </div>
                ))}
              </div>
              {formData.artists.length > 0 && (
                <p className="text-sm text-green-600 mt-2">✓ تم اختيار {formData.artists.length} فنان/فنانين</p>
              )}
            </div>
          </div>

          {/* ========== القسم 3: الفقرات الفنية (مع فصل الفقرة المسرحية) ========== */}
          <div className="border-b border-gray-200 pb-8">
            <h3 className="text-2xl font-bold text-[#165ba2] mb-6 flex items-center gap-2">
              <span>🎪</span> الفقرات الفنية
            </h3>

            {/* الخدمات الفنية الأخرى (غناء، استعراض، إلخ) */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">الخدمات الفنية الأخرى</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {technicalServicesList.map(service => (
                  <div key={service.id} onClick={() => toggleTechnicalService(service.name)} className={`border rounded-xl p-3 cursor-pointer transition hover:shadow-lg ${formData.technicalServices.includes(service.name) ? "border-[#165ba2] bg-blue-50" : ""}`}>
                    <img src={service.image} alt={service.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                    <p className="text-center text-sm">{service.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* فقرة مسرحية منفصلة */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">🎭 فقرة مسرحية</h4>
              <p className="text-sm text-gray-500 mb-4">يمكنك اختيار نوع الفقرة المسرحية التي تريد إضافتها للحفل</p>
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  name="theatricalPlay"
                  value={formData.theatricalPlay}
                  onChange={handleChange}
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-[#165ba2] outline-none"
                >
                  <option value="">لا يوجد فقرة مسرحية</option>
                  {theatricalPlayOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {opt.value}
                    </option>
                  ))}
                </select>
                {formData.theatricalPlay && (
                  <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
                    📖 {theatricalPlayOptions.find(opt => opt.value === formData.theatricalPlay)?.desc}
                  </div>
                )}
              </div>
            </div>

            {/* الأغاني والأوبريت */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">🎵 أغنية بأسم الدفعة</label>
                <select name="graduationSong" value={formData.graduationSong} onChange={handleChange} className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-[#165ba2] outline-none">
                  <option value="">اختر الأغنية</option>
                  {graduationSongs.map(song => <option key={song} value={song}>{song}</option>)}
                </select>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse bg-gray-50 p-4 rounded-lg">
                <input type="checkbox" name="operetta" id="operetta" checked={formData.operetta} onChange={handleChange} className="w-5 h-5" />
                <label htmlFor="operetta" className="font-semibold text-lg">🎭 أوبريت بأسم الخريجين</label>
              </div>
            </div>
          </div>

          {/* ========== القسم 4: لجنة النظام ========== */}
          <div className="border-b border-gray-200 pb-8">
            <h3 className="text-2xl font-bold text-[#165ba2] mb-6 flex items-center gap-2">
              <span>👥</span> لجنة النظام والخدمات
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {systemTeams.map(team => (
                <div key={team.id} onClick={() => selectOption("systemTeam", team.name)} className={`border rounded-xl p-4 cursor-pointer transition hover:shadow-lg ${formData.systemTeam === team.name ? "border-[#165ba2] bg-blue-50" : ""}`}>
                  <img src={team.image} alt={team.name} className="w-full h-44 object-cover rounded-lg mb-3" />
                  <h4 className="font-bold text-lg">{team.name}</h4>
                  <p className="text-sm text-gray-600">{team.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ========== القسم 5: الضيافة والخدمات اللوجستية ========== */}
          <div className="border-b border-gray-200 pb-8">
            <h3 className="text-2xl font-bold text-[#165ba2] mb-6 flex items-center gap-2">
              <span>🍽️</span> الضيافة والخدمات اللوجستية
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-3">الضيافة (مشروبات - كيك - وغيره)</h4>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" name="catering.water" checked={formData.catering.water} onChange={handleChange} className="ml-2 w-5 h-5" />
                    <span>💧 ماء</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" name="catering.juices" checked={formData.catering.juices} onChange={handleChange} className="ml-2 w-5 h-5" />
                    <span>🧃 عصائر</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" name="catering.cake" checked={formData.catering.cake} onChange={handleChange} className="ml-2 w-5 h-5" />
                    <span>🎂 كيك</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" name="catering.snacks" checked={formData.catering.snacks} onChange={handleChange} className="ml-2 w-5 h-5" />
                    <span>🍪 مقبلات / سناك</span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3">الخدمات اللوجستية</h4>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" name="logistics.decoration" checked={formData.logistics.decoration} onChange={handleChange} className="ml-2 w-5 h-5" />
                    <span>🎨 ديكور وتجهيزات القاعة</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" name="logistics.security" checked={formData.logistics.security} onChange={handleChange} className="ml-2 w-5 h-5" />
                    <span>🛡️ أمن وتنظيم الدخول</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" name="logistics.transport" checked={formData.logistics.transport} onChange={handleChange} className="ml-2 w-5 h-5" />
                    <span>🚌 نقل (حافلات أو سيارات)</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" name="logistics.hospitalityTeam" checked={formData.logistics.hospitalityTeam} onChange={handleChange} className="ml-2 w-5 h-5" />
                    <span>🤝 فريق ضيافة وترحيب</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* ========== القسم 6: الرعاية والتجهيزات الإضافية ========== */}
          <div className="border-b border-gray-200 pb-8">
            <h3 className="text-2xl font-bold text-[#165ba2] mb-6 flex items-center gap-2">
              <span>💎</span> الرعاية والتجهيزات الإضافية
            </h3>
            <div className="mb-6">
              <label className="block font-semibold mb-2">مستوى الرعاية</label>
              <select name="sponsorship" value={formData.sponsorship} onChange={handleChange} className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-[#165ba2] outline-none">
                <option value="">لا يوجد رعاية</option>
                {sponsorshipLevels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.value} - {level.desc}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex items-center cursor-pointer p-3 bg-gray-50 rounded-lg">
                <input type="checkbox" name="emergencyFund" checked={formData.emergencyFund} onChange={handleChange} className="ml-2 w-5 h-5" />
                <span>💰 احتياطي طوارئ (نبات التخرج، القبعات، الوشاح، مصاريف غير متوقعة)</span>
              </label>
              <label className="flex items-center cursor-pointer p-3 bg-gray-50 rounded-lg">
                <input type="checkbox" name="graduationOutfits" checked={formData.graduationOutfits} onChange={handleChange} className="ml-2 w-5 h-5" />
                <span>🎓 توفير مشتملات التخرج (قبعة، وشاح مع تطريز، وغيرها)</span>
              </label>
            </div>
          </div>

          {/* ========== ملخص الطلب ========== */}
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 border rounded-xl p-6">
            <h3 className="font-bold text-xl text-[#165ba2] mb-4 flex items-center gap-2">
              <span>📊</span> ملخص الطلب
            </h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div><strong>المقدم:</strong> {formData.presenter || "-"}</div>
              <div><strong>المصور:</strong> {formData.photographer || "-"}</div>
              <div><strong>الفنانون:</strong> {formData.artists.length ? formData.artists.join(", ") : "-"}</div>
              <div><strong>أغنية الدفعة:</strong> {formData.graduationSong || "-"}</div>
              <div><strong>أوبريت:</strong> {formData.operetta ? "✅ نعم" : "❌ لا"}</div>
              <div><strong>فقرة مسرحية:</strong> {formData.theatricalPlay || "-"}</div>
              <div><strong>لجنة النظام:</strong> {formData.systemTeam || "-"}</div>
              <div><strong>الخدمات الفنية:</strong> {formData.technicalServices.length ? formData.technicalServices.join(", ") : "-"}</div>
              <div><strong>الضيافة:</strong> {Object.entries(formData.catering).filter(([,v]) => v).map(([k]) => k === "water" ? "ماء" : k === "juices" ? "عصائر" : k === "cake" ? "كيك" : "مقبلات").join(", ") || "-"}</div>
              <div><strong>الخدمات اللوجستية:</strong> {Object.entries(formData.logistics).filter(([,v]) => v).map(([k]) => k === "decoration" ? "ديكور" : k === "security" ? "أمن" : k === "transport" ? "نقل" : "فريق ضيافة").join(", ") || "-"}</div>
              <div><strong>مستوى الرعاية:</strong> {formData.sponsorship || "-"}</div>
              <div><strong>احتياطي طوارئ:</strong> {formData.emergencyFund ? "✅ نعم" : "❌ لا"}</div>
              <div><strong>مستلزمات التخرج:</strong> {formData.graduationOutfits ? "✅ نعم" : "❌ لا"}</div>
            </div>
          </div>

          <textarea name="details" placeholder="تفاصيل إضافية (اختياري) - يمكنك إضافة أي ملاحظات أو طلبات خاصة" rows={4} onChange={handleChange} className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-[#165ba2] outline-none"></textarea>

          <button type="submit" className="w-full bg-[#ba684c] text-white py-4 rounded-full font-semibold hover:scale-105 transition text-lg shadow-lg">
            📤 إرسال الطلب عبر واتساب
          </button>
        </motion.form>
      </div>
    </section>
  );
}