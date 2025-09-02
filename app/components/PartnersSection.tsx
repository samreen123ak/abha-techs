"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partners = [
  {
    name: "Google",
    description: "Collaborating on AI-driven innovations and cloud solutions.",
    logo: "/logos/google.png",
  },
  {
    name: "Microsoft",
    description: "Empowering businesses with enterprise-grade software.",
    logo: "/logos/microsoft.png",
  },
  {
    name: "Amazon",
    description: "Scaling global infrastructure with AWS solutions.",
    logo: "/logos/amazon.png",
  },
  {
    name: "Meta",
    description: "Building the future of social and immersive experiences.",
    logo: "/logos/meta.png",
  },
];

function PartnerCard({
  name,
  description,
  logo,
}: {
  name: string;
  description: string;
  logo: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 80%", "start 30%"], // animate per card
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative pl-8 sm:pl-12 mb-16"
    >
      {/* Solid bullet */}
      <div className="absolute left-[-18px] top-4 w-6 h-6 bg-[#0B4EA1] border-4 border-white dark:border-gray-900 rounded-full shadow-lg" />

      {/* Card */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition p-6">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center shadow">
            <Image
              src={logo}
              alt={name}
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#0B4EA1]">
            {name}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function PartnersTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Trusted <span className="text-[#0B4EA1]">Partners</span>
        </h2>

        <div ref={containerRef} className="relative ml-6 sm:ml-12">
          {/* Timeline Line */}
          <div className="absolute left-0 sm:left-2 top-0 bottom-0 w-2 bg-[#0B4EA1] rounded-full" />

          {partners.map((partner) => (
            <PartnerCard
              key={partner.name}
              name={partner.name}
              description={partner.description}
              logo={partner.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
