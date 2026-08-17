"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-10 bg-[#0284c7] text-center px-grid-margin overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-hero-display-mobile md:font-hero-display text-4xl md:text-6xl text-on-primary mb-6">
          Your Next Adventure Is Waiting.
        </h2>
        <p className="font-body-lg text-on-primary/80 mb-10 text-xl">
          Stop dreaming. Start planning. Join our next departure and find your tribe.
        </p>
        <button className="w-full md:w-fit bg-[#FF6B35] text-on-primary font-label-bold text-label-bold px-10 py-5 rounded-full hover:bg-[#FF6B35]/90 transition-opacity text-lg cursor-pointer">
          Plan My Trip Now
        </button>
      </motion.div>
    </section>
  );
}
