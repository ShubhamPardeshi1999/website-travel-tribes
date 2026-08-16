"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DomesticTrips() {
  const trips = [
    {
      name: "Himachal Retreats",
      desc: "6 Days • Mountains & Monasteries",
      price: "From ₹24,999",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP-Tcr8V_pAtclL9cKRqDuv5wre4RHBTG7CQ280z1KgkyjJksLrtqOrVA47uSGG0TatwegwAaKj84KTeeKwd44sQ0QRmxohqYPpilBsM0KySOsv171jHWLJHv11zvUw0eRvX-gIXT45lF5jHKaN0Kr6UJX_ktIw4Lnv_uXnzwr9gobIZ_MXj0f4psEXhHtpvDcjua-8s1Bozk-rL0icexq4V7LB6IH_8OINOK-mUNkQxvosyGETiN-"
    },
    {
      name: "Kerala Backwaters",
      desc: "5 Days • Nature & Serenity",
      price: "From ₹18,500",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB52__eYZgsFdXujf8SYO4L0L_9t2TVBtAm1lbqz1zDSuT35mkLPEi5k9O4_-KRr_7hjKU6Gejhx8n3RrKrw2yQeMAp046sGJEuFDC-9zwLDGOxjMNGKba_-VoLPyu1g3eexXj4xoq_76N_XSUrk_bj4kRBQfe7KQo0PM4tQHUt1R3VCI5hTHfy3ohj56AKw68dcDBDi4cHCnBMFM3Lc8jq9X1ObeRnry_vNnZP3mUM4T0RjYDzPdMH"
    },
    {
      name: "Royal Rajasthan",
      desc: "7 Days • Heritage & Deserts",
      price: "From ₹29,999",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuRjpxm4zWI8lMQl4BwC7bI0Qb1HATG6gXOJgunjabqU08UumPai7FBCXWFY4BGqcRogpiCVJCQet8TYYtwyyPswgRV7e00rwaURjfYZNAx3aiaZkUBtYlVCQ_JE3MWrjI3CTyGEYloECiSmgf0et65-1ahxlhpRUPYV-P_HRRv3gC5FiV08HVJ9awZJOIn1h6AtX9R0fsjpOxbVD3OVeDIk7Mn2C7ytQze9C3gvNqwaHW9eXHvL_V"
    },
    {
      name: "Mystical Meghalaya",
      desc: "5 Days • Waterfalls & Caves",
      price: "From ₹22,000",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUZdC4cbP6enyWXmXSMVKFL7ZBcuIATV1E-T-ixsy3_lewrJ04DMQjnuq0qKp_Om001apSti8p39s0HL8z9teSaj6egcAqA3VQgTtetIURWRYhE56JJNPBrr1Ic1dmjV4-Riagwi-ydpDt9W9xgnzxo5MdmbSbod9rw0qqjh8ENJ9XkqSkYmgz3Po98g6Rt0nx2HLR1zseLlGZ6fm5vNJmgEelVtoC6d_cpXzeunlAOes8t7DPdhqN"
    }
  ];

  return (
    <section className="py-section-gap px-grid-margin max-w-[1440px] mx-auto bg-surface-container-low rounded-[2rem] my-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-section-heading-mobile md:font-section-heading text-section-heading-mobile md:text-section-heading text-on-background mb-4">
          Incredible India
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Explore the diverse landscapes, rich culture, and untamed beauty of our homeland.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trips.map((trip, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={trip.img}
                alt={trip.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-label-bold text-lg mb-2">{trip.name}</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-4">{trip.desc}</p>
              <div className="flex justify-between items-center">
                <span className="font-label-bold text-[#FF6B35]">{trip.price}</span>
                <button className="text-primary hover:text-[#FF6B35] transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
