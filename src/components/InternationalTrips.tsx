"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Carousel from "./ui/Carousel";

export default function InternationalTrips() {
  const trips = [
    {
      name: "Vietnam",
      desc: "From Hanoi's bustling streets to the serene waters of Ha Long Bay.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjWwRRz_jGrLvCs4Yp83KLelEu8AdfubR49MPehhMLfNjEWb8V5V8KVlpLoWnPgZZFF-LZU23u7q9lTYZQIBGs_JhnLsGBpgCja3dDCTQcoYTxDmCDLWKOuYfEI3mnb2C5sHK5xPXLFybcv5HaxP93ZhwEBjQ6htdbzT0ShpG8c9XfFgp2DPA18au2ZcVBs55qLXGT7pvqqhC4c1eRW8t9HhWCOr8D6uTPS7Qz2u772S0KWoE1echA",
      popular: true
    },
    {
      name: "Thailand",
      desc: "A perfect blend of culture, cuisine, and stunning island beaches.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2zm1Fhz10rHSiObjpRem0wdaDDFbOPduwFNFJbvlKuKt0F4eOGvx1e-MTUXlk63gdxO7gr3S3Mn7LOlYXXv2k3v9P5DrFSD3ZReT3PsgvyjGGkR-GhsW32wOpKMu7C_vZKgzeSWalCFCpZ8QtEjuLrVTsQ4WCiwMzZ1tf1G8Zy7pXOPLxqbBMKon6YfdggCDDpNkTPtzOV06i9V8HYXPTg6e1y7IWdwsWF_ndl3lmwuixAICTb3Lf",
      popular: false
    },
    {
      name: "Bhutan",
      desc: "Journey into the mystical Kingdom of Happiness in the Himalayas.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuANjAH7kFfSr0xHGamYqTSaC6TIblL7RLxM2Pj9zjWEHfM0mWOE3ACDf43z4qbJvBbMyC7VOJBjK1xuVTCabimgwRNe1T8WJZOP_wMGhuHeHqcJS9cRDv1gXHZFAvQxM97UkxCbgq1vreJmQDlae8UTT7WVZdAf6BbVnB9wjt9MDcEXJA6Jrnp9b_ca-eu6uocA5KEClU79gbk_n40yB9n-7L6m90AWNPOr7iWRmxX1tjE4GacGjfJ0",
      popular: false
    }
  ];

  return (
    <section className="py-10 max-w-[1440px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-end mb-8 gap-2 px-grid-margin"
      >
        <div>
          <h2 className="font-section-heading-mobile md:font-section-heading text-section-heading-mobile md:text-section-heading text-on-background mb-4">
            Global Adventures
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Cross borders and collect stories with our curated international expeditions.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center gap-2 font-label-bold text-label-bold text-[#FF6B35] hover:opacity-80 transition-opacity"
        >
          Explore All <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
      <Carousel
        className="w-full"
        slideClassName="md:flex-[0_0_33.333333%] pr-4 sm:pr-6"
        showArrows
      >
        {trips.map((trip, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative rounded-xl overflow-hidden h-[400px] md:h-[500px] cursor-pointer"
          >
            <Image
              src={trip.img}
              alt={trip.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              {trip.popular && (
                <span className="inline-block px-3 py-1 bg-[#FF6B35] text-on-primary text-xs font-label-bold rounded-full w-fit mb-3">
                  Popular
                </span>
              )}
              <h3 className="font-section-heading-mobile text-3xl text-on-primary mb-2">
                {trip.name}
              </h3>
              <p className="font-body-md text-on-primary/90 mb-4">{trip.desc}</p>
              <button className="flex items-center gap-2 text-on-primary font-label-bold hover:text-[#FF6B35] transition-colors w-fit">
                View Itinerary <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </section>
  );
}
