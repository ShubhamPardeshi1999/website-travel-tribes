"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "./ui/Carousel";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah M.",
      trip: "Spiti Valley Expedition",
      quote: "Traveling with Travel Tribes completely changed my perspective. I came alone but left with a family. The local experiences were authentic and the guides were fantastic.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBpH5Bfyo0sQfpEbEv1_UosskTOPRgkKavDPbN9Szhd6EU03d1gt-OdfbHt4nJsPrPYMuPH6Hg0cS38OKk7hoJmxMpjR-sewei4BsngNlX3obHcPmHIjL80bXSS-zT1ACS1QZ52A9YZJwIasl2Td6UUkrGXtDNg4xJJWe4jIr87IcKNcm4HnoZtnItCKntZoQ_LME_7vR228BCJ3jn8KpnpxK55duvL4Nk-SChx_Ll9Xlyzo95rzfv"
    },
    {
      name: "Rahul D.",
      trip: "Vietnam Backpacking",
      quote: "The itinerary was perfectly balanced between adventure and downtime. Everything was handled seamlessly, allowing us to just immerse ourselves in the journey.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIfryJZU3VE5mtgqclX-FAVvRGp-BQAF2ko49aKrOiBEmum48GwxyRZzriwclmIk1aIBUc4wThQQWEI5i_tGJI5HpO4AHyQasUGt6TIiHF4Gxxw6yCDpup8VOEIKZ9GQP2iRrA8uK516wuqZIdcVZex9IPK35NXDSPTyFA0ZRmrDxonB5DaqLjOtHexy891-A7yqTfxBqUa_ItiANcASDAgCU21kEDO_yIHN9gbVN5QTmKRAEg2GB8"
    },
    {
      name: "Priya & Aman",
      trip: "Maldives Honeymoon",
      quote: "They curated the most magical honeymoon for us. Every detail was personalized, and the resort recommendation was spot on. Highly recommend their premium services.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv6GXQiBAgCZN9xDKoNLP6B1licW1AJXysMYhJN3ovttFcTDMrteqWpEhCuGkXGo73Ouw5Dbza5-9DXFnjiWWEYLCAMTJCtvqV6XEC85aMuAMoXlITaLEUmN14hVqRPyU5rUT5Im7aRu0gpsI_QjDU_TfiWGp4s-kMRfJGBL3_fOn7VHNW3D1A6VbnrNLbAdyj9ecn6UxYKyBp9MJENRqgkNkG7SK2kENFVlNlvn55zNMSrRBVCfBX"
    }
  ];

  return (
    <section className="py-10 bg-surface-container-low overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-grid-margin font-section-heading-mobile md:font-section-heading text-section-heading-mobile md:text-section-heading text-on-background mb-6"
        >
          Stories From The Tribe
        </motion.h2>
        <Carousel
          className="w-full pb-8"
          slideClassName="md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] pr-4 sm:pr-6"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-surface p-8 rounded-2xl text-left shadow-sm h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={review.img}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-label-bold text-on-background">{review.name}</h4>
                  <p className="text-sm text-on-surface-variant">{review.trip}</p>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant italic">
                "{review.quote}"
              </p>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
