// "use client";
// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

// export default function HomePage() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const el = sectionRef.current;

//     // Initial folded shape
//     gsap.set(el, {
//       clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
//       borderRadius: "0 0 40% 10%",
//     });

//     // Animate on scroll
//     gsap.fromTo(
//       el,
//       {
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         borderRadius: "0 0 0 0",
//       },
//       {
//         clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
//         borderRadius: "0 0 40% 10%",
//         ease: "power1.inOut",
//         scrollTrigger: {
//           trigger: el,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       }
//     );
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="relative h-screen z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden flex items-center justify-between px-0"
//     >
//       {/* LEFT SIDE - BIG TEXT */}
//       <div className="z-10 max-w-2xl">
//         <motion.h1
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text-6xl md:text-7xl font-extrabold leading-tight"
//         >
//           <span className="block overflow-hidden">
//             <motion.span
//               initial={{ y: "100%" }}
//               whileInView={{ y: "0%" }}
//               transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//               className="inline-block text-purple-400"
//             >
//               Creative
//             </motion.span>
//           </span>
//           <span className="block overflow-hidden">
//             <motion.span
//               initial={{ y: "100%" }}
//               whileInView={{ y: "0%" }}
//               transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
//               className="inline-block"
//             >
//               Digital
//             </motion.span>
//           </span>
//           <span className="block overflow-hidden">
//             <motion.span
//               initial={{ y: "100%" }}
//               whileInView={{ y: "0%" }}
//               transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
//               className="inline-block"
//             >
//               Agency
//             </motion.span>
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 1.5, duration: 1 }}
//           className="mt-6 text-lg text-gray-300 max-w-lg"
//         >
//           We design websites, brands & digital experiences that stand out with
//           bold creativity and smooth animations.
//         </motion.p>
//       </div>

//       {/* RIGHT SIDE - CIRCLE WITH EYE + ROTATING TEXT */}
//       <div className="relative w-[250px] h-[250px] flex items-center justify-center">
//         {/* Eye in center */}
//         <div className="absolute w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
//           <div className="w-8 h-8 bg-black rounded-full"></div>
//         </div>

//         {/* Rotating Circular Text */}
//         <motion.svg
//           className="w-full h-full"
//           viewBox="0 0 250 250"
//           initial={{ rotate: 0 }}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//         >
//           <defs>
//             <path
//               id="circlePath"
//               d="M 125, 125 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
//             />
//           </defs>
//           <text fill="#a855f7" fontSize="14" fontWeight="bold" letterSpacing="2">
//             <textPath href="#circlePath" startOffset="0">
//               CREATIVE • AGENCY • DESIGN • DEVELOPMENT • BRANDING •
//             </textPath>
//           </text>
//         </motion.svg>
//       </div>

//       {/* Background Accent */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 0.2, scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//         className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-purple-500 blur-3xl"
//       ></motion.div>
//     </div>
//   );
// }

import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PartnersSection from "./components/PartnersSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <PartnersSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
