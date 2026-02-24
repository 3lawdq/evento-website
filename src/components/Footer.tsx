"use client";

import { Facebook, Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#165ba2] text-white pt-20 pb-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-right">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Evento</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            شركة متخصصة في تنظيم حفلات التخرج والفعاليات الجامعية
            بإخراج مسرحي احترافي وتوثيق مميز.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#services" className="hover:text-[#f2c4ac] transition">
                خدماتنا
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#f2c4ac] transition">
                أعمالنا
              </a>
            </li>
            <li>
              <a href="#booking" className="hover:text-[#f2c4ac] transition">
                احجز الآن
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>

          <div className="flex items-center justify-center md:justify-end gap-3 mb-3">
            <Phone size={18} />
            <span className="text-sm">+964 7XXXXXXXXX</span>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-3 mb-6">
            <MapPin size={18} />
            <span className="text-sm">العراق</span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="#"
              className="bg-white text-[#165ba2] p-2 rounded-full hover:scale-110 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="#"
              className="bg-white text-[#165ba2] p-2 rounded-full hover:scale-110 transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-16 border-t border-white/20 pt-6 text-center text-xs text-gray-200">
        © {new Date().getFullYear()} Evento. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}