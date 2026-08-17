"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Search, CalendarDays } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function HeroSection() {
  const [date, setDate] = useState<Date>();

  return (
    <section className="relative h-screen w-full flex items-center justify-center pt-24">
      <div className="absolute inset-0 z-0 rounded-b-4xl overflow-hidden">
        <Image
          src="/hero.webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>
      <div className="relative z-10 md:text-center px-grid-margin max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-hero-display-mobile md:font-hero-display text-hero-display-mobile md:text-hero-display text-on-primary md:mb-8 drop-shadow-lg"
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
            <CalendarDays className="w-5 h-5 text-outline cursor-pointer" />
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className={cn(
                    "bg-transparent border-none focus:ring-0 outline-none w-full font-body-md text-left p-0 cursor-pointer",
                    !date ? "text-outline" : "text-on-surface text-label-bold font-label-bold"
                  )}
                >
                  {date ? format(date, "PPP") : <span>When?</span>}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <button className="w-full md:w-auto bg-[#FF6B35] text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity cursor-pointer">
            Explore
          </button>
        </motion.div>
      </div>
    </section>
  );
}
