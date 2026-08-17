"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : "bg-white md:bg-transparent"
          }`}
      >
        <div className="flex justify-between items-center px-grid-margin py-6 w-full max-w-[1440px] mx-auto">
          <Link
            href="/"
            className={`nav-logo flex items-center gap-3 font-hero-display text-body-lg tracking-tighter font-black transition-colors duration-300 ${scrolled ? "text-primary" : "text-on-primary"
              }`}
          >
            <Image
              src="/logo.jpg"
              alt="Travel Tribes Logo"
              width={90}
              height={90}
            />
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              href="#"
              className={`nav-text font-label-bold text-label-bold transition-colors ${scrolled
                ? "text-primary/80 hover:text-primary"
                : "text-on-primary/80 hover:text-on-primary"
                }`}
            >
              Discover
            </Link>
            <Link
              href="#"
              className={`nav-text font-label-bold text-label-bold border-b-2 pb-1 transition-colors ${scrolled
                ? "text-primary border-primary"
                : "text-on-primary border-on-primary"
                }`}
            >
              Tribes
            </Link>
            <Link
              href="#"
              className={`nav-text font-label-bold text-label-bold transition-colors ${scrolled
                ? "text-primary/80 hover:text-primary"
                : "text-on-primary/80 hover:text-on-primary"
                }`}
            >
              Stories
            </Link>
            <Link
              href="#"
              className={`nav-text font-label-bold text-label-bold transition-colors ${scrolled
                ? "text-primary/80 hover:text-primary"
                : "text-on-primary/80 hover:text-on-primary"
                }`}
            >
              Itineraries
            </Link>
          </nav>
          <Link
            href="#"
            className="hidden md:inline-flex items-center justify-center bg-primary-fixed text-on-primary-fixed font-label-bold text-label-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Plan My Trip
          </Link>
          {/* Animated Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden z-[60] flex flex-col justify-center items-center w-10 h-10 transition-colors cursor-pointer ${scrolled || isOpen ? "text-primary" : "text-on-primary"
              }`}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] rounded-full mb-1.5 transition-colors bg-[#0086c1]"
            ></motion.span>
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] rounded-full mb-1.5 transition-colors bg-[#0086c1]"
            ></motion.span>
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] rounded-full transition-colors bg-[#0086c1]"
            ></motion.span>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white/95 backdrop-blur-xl z-50 md:hidden flex flex-col shadow-2xl rounded-l-3xl border-l border-white/20"
            >
              <div className="p-8 flex flex-col h-full overflow-y-auto pt-28">

                <div className="mb-12">
                  <span className="text-[#FF6B35] font-label-bold text-xs uppercase tracking-wider mb-2 block">
                    Menu
                  </span>
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                </div>

                <motion.nav
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                  }}
                  className="flex flex-col gap-8"
                >
                  {[
                    { name: "Discover", href: "#" },
                    { name: "Tribes", href: "#" },
                    { name: "Stories", href: "#" },
                    { name: "Itineraries", href: "#" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: 20 }
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between font-hero-display-mobile text-4xl text-on-surface hover:text-primary transition-colors"
                      >
                        <span>{item.name}</span>
                        <span className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-primary">
                          →
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>

                <div className="mt-auto pt-12 pb-6">
                  <Link
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center bg-[#FF6B35] text-white font-label-bold text-label-bold px-6 py-5 rounded-full shadow-lg shadow-[#FF6B35]/20 hover:bg-[#FF6B35]/90 transition-all hover:scale-[1.02]"
                  >
                    Plan My Trip
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
