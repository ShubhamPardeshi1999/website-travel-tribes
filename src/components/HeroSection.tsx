"use client";

import { Search, CalendarDays } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center pt-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAffGmdLPE4HXXOkW_7uSHImptt7oEaA7GfPr1Rco3JDsZexbPMtgqeyxftO4iYQ2_Jsh-ts0oSFe0WtnIdyzCy80YSD_7gn0sgytNK7TdE9NBIIiBH83Uz1BQBkpWD8mLI545bH8kzTP7VCdotmlHcE4azxGFU8q-AZBX-WT-UYn1j-Clmvfek6noot9O-iG-WR8HKXVqZydu1PGdJmGW6FI0vLIWi0_JWXcq7DgtyWcqIAz41t3Yk"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>
      <div className="relative z-10 text-center px-grid-margin max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-hero-display-mobile md:font-hero-display text-hero-display-mobile md:text-hero-display text-on-primary mb-8 drop-shadow-lg"
        >
          Find Your Tribe.<br />Travel Your Story.
        </motion.h1>

        {/* Floating Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-2 shadow-2xl w-full max-w-3xl mt-8"
        >
          <div className="flex-1 flex items-center gap-3 px-4 py-2 text-on-surface-variant w-full md:w-auto">
            <Search className="w-5 h-5 text-outline" />
            <input
              className="bg-transparent border-none focus:ring-0 outline-none w-full font-body-md text-on-surface placeholder:text-outline p-0"
              placeholder="Where do you want to go?"
              type="text"
            />
          </div>
          <div className="hidden md:block w-px h-8 bg-surface-variant"></div>
          <div className="flex-1 flex items-center gap-3 px-4 py-2 text-on-surface-variant w-full md:w-auto">
            <CalendarDays className="w-5 h-5 text-outline" />
            <input
              className="bg-transparent border-none focus:ring-0 outline-none w-full font-body-md text-on-surface placeholder:text-outline p-0"
              placeholder="When?"
              type="text"
            />
          </div>
          <button className="w-full md:w-auto bg-[#FF6B35] text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            Explore
          </button>
        </motion.div>
      </div>
    </section>
  );
}
