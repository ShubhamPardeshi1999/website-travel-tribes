"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HoneymoonSection() {
  return (
    <section className="py-10 bg-[#0284c7]">
      <div className="px-grid-margin max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3 text-on-primary"
        >
          <h2 className="font-section-heading-mobile md:font-section-heading text-section-heading-mobile md:text-section-heading mb-4">
            Romantic Escapes
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 mb-4">
            Curated honeymoon experiences designed for couples seeking premium comfort, intimate moments, and unforgettable settings.
          </p>
          <button className="bg-[#FF6B35] w-full sm:w-fit text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-full hover:bg-[#FF6B35]/90 transition-opacity cursor-pointer">
            Plan Your Honeymoon
          </button>
        </motion.div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden h-64 md:h-[350px] group"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBydmJRHl-4TPxdBzn-B5yQ-hmuWu5k1Ivx4rZcR_S23BOJa70HdwWEBlf1PMvZaXZ7YvqiiHVAltBzd1FMQhW1wzcPoEBwN9d3p6tkDr7u1FGxfV1BvS2xiW5J8olFPmH_QD8Jg0sIN8MnUHC_JuvI_vn0kfWG16hBc1OXU3IKDnK_WR446teKfR53sOVnwJTbt8YAMeIBLFddTwwyJ8HHhcWmuFsYZ6kindQFGcjgrCLLAs8hg3Te"
              alt="Maldives"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-on-primary font-section-heading-mobile text-3xl text-center px-4">
                Maldives<br />
                <span className="text-lg font-body-md font-normal">Overwater Luxury</span>
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden h-64 md:h-[350px] group mt-0 md:mt-12"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmrG7QPhr_5kDEBOswJAN61h6-zpxmz7IxTOAyXHXaloBz64nuI1AOM_vrXdVC86TqxhvaFuDwfvqmcJAH6mxjAL9e2f0DrMFIJLvjH0JEsIxLnv98NO4uAGXUK8QbutbWo21hggflA015a45Sl31zAXbwPF2Ce9S4yMc4s8CCBOTSKpJ6kZHB-ar2DdgJ-WiQkhJVHpNiNN7N9HeZTDu1EUfOrZI4cXu4cICBNqK1ZW0SUmLWTTHl"
              alt="Bali Villas"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-on-primary font-section-heading-mobile text-3xl text-center px-4">
                Ubud, Bali<br />
                <span className="text-lg font-body-md font-normal">Jungle Retreats</span>
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
