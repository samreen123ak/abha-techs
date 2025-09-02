"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 overflow-hidden"
    >
      {/* Background cinematic zoom */}
      <motion.div
        initial={{ scale: 1, y: 0 }}
        whileInView={{ scale: 1.2, y: -50 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-white via-gray-200 to-gray-300 blur-xl"
      />

     
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="relative z-10 w-[600px] bg-white/70 backdrop-blur-2xl rounded-2xl shadow-2xl p-10 [transform-origin:left]"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Contact Us
        </h2>
        <form className="space-y-6">
          <motion.input
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-white/40 backdrop-blur-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
          <motion.input
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-white/40 backdrop-blur-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
          <motion.textarea
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
            rows={4}
            placeholder="Your Message"
            className="w-full p-3 rounded-xl bg-white/40 backdrop-blur-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 25px rgba(99,102,241,0.6)",
            }}
            transition={{ duration: 0.3 }}
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
