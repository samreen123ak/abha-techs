"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // Mask expand animation with video
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top center",
        end: "+=800 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.fromTo(
      ".mask-clip-path",
      { width: "300px", height: "300px", borderRadius: "50%" },
      {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        ease: "power2.inOut",
      }
    );

    // Text word-by-word fade-in animation
    const headingWords = gsap.utils.toArray("#about-heading span");
    headingWords.forEach((word, index) => {
      gsap.fromTo(
        word,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          delay: index * 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#about-heading",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  });

  return (
    <div
      id="about"
      className="relative min-h-screen w-screen text-white overflow-hidden pt-16"
    >
      {/* Scroll Animation with Video and Text Overlay */}
      <div
        className="h-[100vh] w-screen relative z-10"
        id="clip"
      >
        <div className="mask-clip-path relative mx-auto w-[300px] h-[300px] rounded-[50%] overflow-hidden">
          {/* Single Video inside mask */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute left-0 top-0 w-full h-full object-cover"
          >
            <source src="/videos/earth-rotate.mp4" type="video/mp4" />
          </video>
          {/* Text at Top Center */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20 text-center w-[min(1200px,92%)]">
            <h1
              id="about-heading"
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              {["A", "truly", "global", "network", "for", "lightning-fast", "inference"].map((word, index) => (
                <span key={index} className="inline-block mr-2 last:mr-0">
                  {word}
                </span>
              ))}
            </h1>
            <p
              id="about-sub"
              className="mt-6 text-white/80 text-lg md:text-xl max-w-prose"
            >
              Our edge network spans 160+ locations—bringing compute closer to your
              users for blazing-fast experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;