"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
type CaseShowcaseProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const CaseShowcaseSection: React.FC<CaseShowcaseProps> = ({ images }) => {
  return (
    <div className="bg-[#252525]">
      <div className="container mx-auto px-4 py-12 lg:px-30 lg:py-25">
        <PhotoProvider>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16"
          >
            {images.slice(0, 7).map((item, index) => {
              if (index < 6) {
                return (
                  <motion.div
                    key={item.url}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PhotoView src={item.url}>
                      <Image
                        src={item.url}
                        alt={item.alt}
                        className="aspect-square border-[15px] border-white object-cover"
                        width={500}
                        height={500}
                      />
                    </PhotoView>
                  </motion.div>
                );
              }
              return (
                <motion.div
                  key={item.url}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="lg:col-start-2"
                >
                  <PhotoView src={item.url}>
                    <Image
                      src={item.url}
                      alt={item.alt}
                      className="aspect-square border-[15px] border-white object-cover"
                      width={500}
                      height={500}
                    />
                  </PhotoView>
                </motion.div>
              );
            })}
          </motion.div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default CaseShowcaseSection;
