"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const events = [
    {
      image: "grad1.jpg",
      university: "جامعة بغداد",
      year: "2024",
    },
    {
      image: "grad2.jpg",
      university: "جامعة البصرة",
      year: "2023",
    },
    {
      image: "grad3.jpg",
      university: "الجامعة المستنصرية",
      year: "2024",
    },
    {
      image: "grad4.jpg",
      university: "جامعة الكوفة",
      year: "2022",
    },
    {
      image: "grad5.jpg",
      university: "جامعة بابل",
      year: "2023",
    },
    {
      image: "grad6.jpg",
      university: "جامعة ديالى",
      year: "2024",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-24 px-4 md:px-6 bg-gradient-to-b from-[#f8f4f1] to-white"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-[#165ba2] mb-16">
          أبرز حفلاتنا
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
              onClick={() =>
                setSelectedImage(`/events/${event.image}`)
              }
            >
              {/* Golden Frame */}
              <div className="absolute inset-0 border-4 border-[#ba684c] rounded-2xl z-10 pointer-events-none"></div>

              {/* Image */}
              <Image
  src={`/events/${event.image}`}
  alt={event.university}
  width={600}
  height={400}
  className="w-full h-[320px] object-cover"
/>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-500 flex flex-col justify-center items-center text-white text-center px-4">

                {/* Decorative Line */}
                <div className="w-10 h-1 bg-[#ba684c] mb-4"></div>

                <h3 className="text-lg md:text-xl font-bold">
                  {event.university}
                </h3>

                <p className="text-sm md:text-base mt-2 text-[#f2c4ac]">
                  دفعة {event.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl w-full"
          >
            <Image
  src={selectedImage}
  alt="Evento Event"
  width={1200}
  height={800}
  className="w-full rounded-xl shadow-2xl border-4 border-[#ba684c]"
/>
          </motion.div>
        </div>
      )}
    </section>
  );
}