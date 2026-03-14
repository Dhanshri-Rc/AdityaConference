import {
  Linkedin,
  MessageCircle,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

import logo from "../../assets/flogo.png";
import hub from "../../assets/hub.webp";

export default function Footer() {
  return (
    <footer className="bg-[#1f2b44] text-white pt-16 pb-4">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Aditya University"
            className="h-32 object-contain"
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6">
          <a className="border border-gray-500 p-3 rounded-md hover:bg-white hover:text-black transition">
            <Linkedin size={18} />
          </a>

          <a className="border border-gray-500 p-3 rounded-md hover:bg-white hover:text-black transition">
            <MessageCircle size={18} />
          </a>

          <a className="border border-gray-500 p-3 rounded-md hover:bg-white hover:text-black transition">
            <Twitter size={18} />
          </a>

          <a className="border border-gray-500 p-3 rounded-md hover:bg-white hover:text-black transition">
            <Instagram size={18} />
          </a>

          <a className="border border-gray-500 p-3 rounded-md hover:bg-white hover:text-black transition">
            <Youtube size={18} />
          </a>

          <a className="border border-gray-500 p-3 rounded-md hover:bg-white hover:text-black transition">
            <Facebook size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mb-6"></div>

        {/* Copyright */}
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
          <p>2026 © Copyright AGEC. All Rights Reserved, Powered By</p>

          <img src={hub} alt="Technical Hub" className="h-10 w-auto  object-contain" />
        </div>
      </div>
    </footer>
  );
}
