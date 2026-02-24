"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/events/grad1.jpg"
          alt="Evento Graduation Event"
          fill
          priority
          className="object-cover scale-110"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 px-4 md:px-6 max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Evento
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl font-light mb-6 text-[#f2c4ac]"
        >
          نصنع لحظات تخرج لا تُنسى
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm md:text-lg text-gray-200 mb-10"
        >
          تنظيم احترافي لحفلات التخرج والفعاليات الجامعية
          مع إخراج مسرحي مميز وتوثيق عالي الجودة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#booking"
            className="bg-[#ba684c] px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            احجز الآن
          </a>

          <a
            href="#gallery"
            className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            شاهد أعمالنا
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#f2c4ac] text-sm">
        ↓
      </div>

    </section>
  );
}