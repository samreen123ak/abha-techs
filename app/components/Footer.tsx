"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-12 overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-bold mb-2">Digital Agency</h2>
          <p className="text-gray-400">We build stunning websites, AI solutions & marketing strategies.</p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex gap-6 mt-6 md:mt-0"
        >
          {[
            { icon: <FaFacebook />, href: "#" },
            { icon: <FaTwitter />, href: "#" },
            { icon: <FaInstagram />, href: "#" },
            { icon: <FaLinkedin />, href: "#" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-gray-300 hover:text-white transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="relative z-10 text-center mt-8 text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
