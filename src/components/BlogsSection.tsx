"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogsSection() {
  const blogs = [
    {
      category: "Travel Tips",
      title: "The Ultimate Minimalist Packing Guide for Backpacking",
      desc: "Learn how to pack light without sacrificing essentials for your next multi-week adventure across varied climates.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdeSD7wbNfocYGFnwHT5wL8gLAKXF3eEZ1QiA6P3iA_US0G3lPW6v96uE8CXsclWjAguNunPYlF5Pmyz2shKtXWG3pO_AM4KvFcLDilt6wItmbZJkMXt2ehMEb2j9lzDqlEchanIx8UalGs-BuwEGwMQzQ7ha5zuAAtRIZ95xxqbP6720cn44aW9dPy7hHy-ZxLBNLa76J7oonZgLBaOZSzFWajjx6InYA3xcFbqUMO1rZv3yvXEub"
    },
    {
      category: "Destinations",
      title: "5 Offbeat Himalayan Villages You Must Visit",
      desc: "Escape the crowds and discover pristine nature and warm hospitality in these hidden gems of the north.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmKkdWU_tAEBg3kRzVsYKpnEc5CF7SCEIbaTYdUhXlDfP7WDZrIdY31XttYWpoip4_mZNHM5cE9mILceGUe-tf__XWD54nmZNt2OQC97sywagHZm7hSD7x3Sqp9FgQdNV_PVnu9SvKbljWazqTVtafur96cqKdRccCZ8HxRIi2Ds-nGx-VLEsJuRhRs8s0hFz33cbIYZmAaI8r-9mg9Ef6pZY-kWwpvuI6GUml3Pcoh9EtgLG51QDn"
    },
    {
      category: "Stories",
      title: "Why Your First Solo Trip Will Change Your Life",
      desc: "A personal account of overcoming fear and finding independence while navigating foreign streets alone.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjkdO3j8HGxI-n_yGijAUv5Y7RY1igi1EJI1Hqnwsk47YqtirSxR2q1juACcWP7oX2z24Bht6IekcW3fr3iGga_Nxkl8Pw20-EFw9d8bYSKqMb-7XvjfxzuX-NG4n3D_OYBgVvXfTbc4KOvd9Jc5eweHRoS5WKM7p2WOxBDj8GdRQ7JOMwgfKEGxykRqyb4urvlv00Jf_fDIKTeUa4ARZ8yVgU0Byt23nyyKoRGdgPo-npLgUxRyuV"
    }
  ];

  return (
    <section className="py-section-gap px-grid-margin max-w-[1440px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-section-heading-mobile md:font-section-heading text-section-heading-mobile md:text-section-heading text-on-background mb-4">
          Get Inspired
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Travel guides, packing tips, and stories from the road.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="rounded-xl overflow-hidden mb-4 h-64 relative">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-[#FF6B35] font-label-bold text-xs uppercase tracking-wider mb-2 block">
              {blog.category}
            </span>
            <h3 className="font-section-heading-mobile text-xl mb-2 group-hover:text-primary transition-colors">
              {blog.title}
            </h3>
            <p className="font-body-md text-on-surface-variant text-sm line-clamp-2">
              {blog.desc}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
