"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Sparkles } from "lucide-react";

export default function WhyEvento() {
  const items = [
    {
      icon: <Award size={42} />,
      title: "خبرة احترافية",
      desc: "سنوات من الخبرة في تنظيم حفلات التخرج والفعاليات الجامعية بأعلى مستوى.",
    },
    {
      icon: <Users size={42} />,
      title: "فريق متكامل",
      desc: "فريق متخصص في التنظيم، الإخراج المسرحي، والتقديم الاحترافي.",
    },
    {
      icon: <Clock size={42} />,
      title: "التزام ودقة",
      desc: "تنفيذ البرنامج الزمني للحفل بدقة بدون تأخير أو ارتباك.",
    },
    {
      icon: <Sparkles size={42} />,
      title: "إبداع وتميّز",
      desc: "أفكار مبتكرة ولمسات إبداعية تجعل حفلك مختلفاً عن الجميع.",
    },
  ];

  return (
    <section
      id="why"
      className="py-28 px-4 md:px-6 bg-gradient-to-b from-white to-[#f8f4f1]"
    >
      <div className="max-w-7xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#165ba2] mb-20"
        >
          لماذا Evento؟
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 group border border-[#f2c4ac]"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 text-[#ba684c] group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#165ba2] group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}