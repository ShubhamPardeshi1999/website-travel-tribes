"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TrendingPlaces() {
  const places = [
    {
      name: "Kashmir",
      tagline: "The Paradise on Earth",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOzA0xmefeuQ-WaA0s0xGXyGQpnIi8xCi7-brm-v8P9Y7qy4sYM2dyvYP1XufpQtasf7AN--NGMU416bzCOI_aGvySyRvYv2xG05Zm4gJ4OMeFA6DgLW-DQJjqKjFtbywWkKzGYNhYvO3vCFa8_ojrF9-W9X6Y1Wub8GjQxyWXf8TMBwXAW61vqRUdisIq_9cl1Xgfz14-FYA3aWZw_tFB-k4P6wbYMyfgBMxk6YkIfxpvUK5ugaIv"
    },
    {
      name: "Spiti Valley",
      tagline: "Rugged Himalayan Adventures",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA-JTO_G8JhZ2yQj2ER_mvWARU5p_Us229JsRn7X5FSShzDocsm4-H9poKH1ao-woLl_qyXlJdjvzWWK1DVsbuLdHP81ZCcu-P5yjdWJCM0hRziRyR_JLQ6KuO9wzZRqW6nmj_U5WCu3rKbOnRbYvG1at5XMXR9wP9yxJN51DrVtzScPTxFCMEDnZDe_2r7biNdIltmnE4zHu8mseonGWPuXG4M4KlV6CDhPQ4UoUx43vJirLkOmj7"
    },
    {
      name: "Bali",
      tagline: "Tropical Island Escapes",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC83zmMkmy0zDjnyG_Rkk21wcmQx8mPqxAIcoYpPicokHcMgpIkFKZCI-SOBaxEzPiWKlSlEtQyVcI0g0B3pe-qoryn8zO-i5AbvP7fblu4tDC0EoZ33EXtuAMtC56_rqskBFyIm7O-rEB6QZ-anQCR0X1LyJpuhwv06UlUTUEgJgIdElGw_0Sm7jYfZff1WyHqvRu4uUjCWcYLYIbcV4vh7vfKXpRpFB_UUZhtSVPKATQfQqGVhQTt"
    }
  ];

  return (
    <section className="py-section-gap px-grid-margin max-w-[1440px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
      >
        <div>
          <h2 className="font-section-heading-mobile md:font-section-heading text-section-heading-mobile md:text-section-heading text-on-background mb-4">
            Trending Places
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Discover the most sought-after destinations our tribes are exploring right now.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center gap-2 font-label-bold text-label-bold text-[#FF6B35] hover:opacity-80 transition-opacity"
        >
          View All <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
        {places.map((place, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative rounded-xl overflow-hidden h-[400px] cursor-pointer editorial-overlay"
          >
            <Image
              src={place.img}
              alt={place.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
              <h3 className="font-section-heading-mobile text-2xl text-on-primary mb-2">
                {place.name}
              </h3>
              <p className="font-body-md text-on-primary/80">{place.tagline}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
