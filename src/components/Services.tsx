"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Mic,
  Camera,
  Sparkles,
  Users,
  Presentation,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <GraduationCap size={40} />,
      title: "تنظيم حفلات التخرج",
      desc: "تنظيم كامل لحفل التخرج من الفكرة حتى التنفيذ بأعلى مستوى.",
    },
    {
      icon: <Presentation size={40} />,
      title: "إخراج مسرحي احترافي",
      desc: "إعداد المسرح، الإضاءة، والمؤثرات البصرية بشكل مميز.",
    },
    {
      icon: <Mic size={40} />,
      title: "تقديم وعرض",
      desc: "مقدمين محترفين لإدارة فقرات الحفل بأسلوب راقٍ.",
    },
    {
      icon: <Camera size={40} />,
      title: "توثيق وتصوير",
      desc: "تصوير احترافي وفيديوهات تذكارية عالية الجودة.",
    },
    {
      icon: <Users size={40} />,
      title: "تنسيق الفقرات",
      desc: "تنظيم الفقرات والبرنامج الزمني بدقة وانسيابية.",
    },
    {
      icon: <Sparkles size={40} />,
      title: "خدمات حسب الطلب",
      desc: "تصميم باقات مخصصة حسب احتياجات كل دفعة.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-4 md:px-6 bg-gradient-to-b from-white to-[#f8f4f1]"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-[#165ba2] mb-16">
          خدماتنا
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group"
            >
              <div className="text-[#ba684c] mb-5 flex justify-center group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-6 h-1 w-0 bg-[#165ba2] group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}