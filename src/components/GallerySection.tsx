"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GallerySection() {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA652U2uEK1Kv-ZcjPn3okAgmuHC35-F2XEIwVF4l60hZuAW7WCxJpeqkiaSQlHINjdlRJ2DhF0X2QI76lL4ultDVYGM0lf857bBAUa2lEScnzGIaOhkuAtNpRKdpqyknLmdd_lf1JmfX5WHOn_w0MgETbhCOOi4IPC8ZfQQC2K5bfTFlgAlsCSzyFVtWzxgS9WLH3YSsjiBgfkMkWHkysYHCKpZm3CM5jjodgJS3O9MbzonvWkj20n",
      alt: "Campfire",
      className: "col-span-2 row-span-2"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6_7Vh7Suu3pEoHETSk0OdeIwNsO7wETXBlZOdegOI3bE2aJmOXXX5hAskMOPqLN5uvceMDpxTesXtv_lEzTJLIfCKss0u25xs1ssoTRzBVt4zHlPuL9vrx-T_wtBHmgSX3KxWLZtcqHZ1jvoxXK5LmDlXJmlhNTSfCZ5hLnNvGM1NG8ovCRquxwnUYiIDgxeC1W5QKucLaScYkL8WPFsYeqfq86QvwIB0a2-D2aHEIVD34putRj9E",
      alt: "Trekking",
      className: ""
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQnTRfsSf_9vn5JLBxFRsWq3iHBI4L4zK4lYDZH2eeQd7Yucc-5MmtvHAdoo-FElzrQsVGmbE4W6YCZOCK1nOsO4d4j36enZofTIGSPmT7QW0zpfJbv6xS0lCN6o0Hl5QPl2xYOi7vwkvbQbT007UqlFh0vqcUC8R1dbGvl9T-LobQizgYeEkzdPOmF4Yd3a_SXzVo0DYc0ndN4lcPK819gdNPhbZ730Qlz_iHbcrZritfjb3HD43K",
      alt: "Roadtrip",
      className: ""
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBQzM9yfXo7AwwD12xV5YduZCE4pmP7EBu3gAsHJUaoaxVZwuan1vxYQnCWypFD_LvFeYAoe8e6REqFljSbm5lCVfXLTyBIELsxR0ZcLnS71eEaJPZj114MNO7QcbxsWWop40DG0KywCvrA9vb3WSJ9lWFRrMC0een3ImPdyyMnp69DN2otphq7RFDCOEOe798Fmob62R7pIxaonD2n6YJu36q6gB6bIxDNZ0IHUzXksVGW8eG4JKR",
      alt: "Group Pic",
      className: "col-span-2"
    }
  ];

  return (
    <section className="py-section-gap px-grid-margin max-w-[1440px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-section-heading-mobile md:font-section-heading text-section-heading-mobile md:text-section-heading text-on-background mb-4">
          Life In The Tribe
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Moments captured by our travelers. Real people, real adventures.
        </p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`rounded-xl overflow-hidden relative ${img.className}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
