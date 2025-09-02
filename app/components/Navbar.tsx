"use client";

import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Partners", href: "/partners" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const pathname = usePathname();

  useEffect(() => {
    const navElement = navContainerRef.current;
    if (!navElement) return;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navElement.style.background = "rgba(0,0,0,0.3)";
      navElement.style.backdropFilter = "blur(10px)";
      navElement.style.border = "none";
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false); // hide on scroll down
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true); // show on scroll up
      navElement.style.background = "rgba(0,0,0,0.7)";
      navElement.style.backdropFilter = "blur(16px)";
      navElement.style.border = "1px solid rgba(255,255,255,0.15)";
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
      ease: "power3.out",
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed top-6 inset-x-4 z-50 rounded-2xl shadow-lg transition-all duration-500"
    >
      <nav className="flex items-center justify-center px-6 py-4">
        <div className="hidden md:flex gap-8 text-white font-medium tracking-wide">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`relative group transition ${
                  isActive ? "text-green-400" : ""
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
