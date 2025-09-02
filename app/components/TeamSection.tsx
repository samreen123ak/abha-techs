"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const teamMembers = [
  { name: "Mark Stefon", role: "SEO Specialist", img: "https://i.pravatar.cc/200?img=5" },
  { name: "Sara Khan", role: "UI/UX Designer", img: "https://i.pravatar.cc/200?img=10" },
  { name: "Ahmed Raza", role: "Full Stack Dev", img: "https://i.pravatar.cc/200?img=15" },
  { name: "Emily Watson", role: "Digital Marketer", img: "https://i.pravatar.cc/200?img=20" },
];

export default function TeamSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black via-purple-900 to-blue-900"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { scaleY: 0, originY: 1 },
          visible: {
            scaleY: 1,
            originY: 1,
            transition: { duration: 1.2, ease: "easeInOut" },
          },
        }}
      />

      <div className="relative z-10 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            },
          }}
          className="text-4xl font-bold text-white mb-12 drop-shadow-lg"
        >
          Meet Our <span className="text-yellow-300">Premium Team</span>
        </motion.h2>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2, duration: 0.8 },
                },
              }}
              className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-xl cursor-pointer group overflow-hidden"
              whileHover={{ scale: 1.07, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              {/* Avatar */}
              <motion.img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                whileHover={{ rotate: -5, scale: 1.1 }}
              />

              {/* Name */}
              <motion.h3
                className="text-xl font-semibold text-white group-hover:text-yellow-300 transition-colors"
                whileHover={{ y: -5 }}
              >
                {member.name}
              </motion.h3>

              {/* Role */}
              <motion.p
                className="text-gray-200 mt-2 group-hover:text-white"
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                {member.role}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
