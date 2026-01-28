"use client";

import { cn } from "@/lib/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "motion/react";

interface ServiceCardsProps {
  services: Content.ServiceCardSliceDefaultPrimaryFeaturesItem[];
}
const ServicesCardsSection = ({ services }: ServiceCardsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const imageVariantsReverse = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
        delay: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="bg-[#303030] px-4 py-12 lg:px-30 lg:py-25">
      <div className="container mx-auto flex flex-col gap-8 lg:gap-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={cn(
              "grid grid-cols-1 items-center gap-12 lg:grid-cols-2",
            )}
          >
            <motion.div
              variants={
                index % 2 === 0
                  ? (imageVariants as never)
                  : (imageVariantsReverse as never)
              }
              className={cn(
                "w-full order-2", // mobile: image dưới
                index % 2 === 0 ? "lg:order-1" : "lg:order-2",
              )}
            >
              <PrismicNextImage
                field={service.feature_image}
                className="h-[480px] w-full object-cover lg:h-[576px] aspect-square"
                width={576}
                height={576}
              />
            </motion.div>

            <motion.div
              variants={contentVariants as never}
              className={cn(
                "space-y-7 order-1", // mobile: content trên
                index % 2 === 0 ? "lg:order-2" : "lg:order-1",
              )}
            >
              <h3 className="font-urbanist text-[28px] leading-[140%] font-light tracking-[3.2px] text-white uppercase lg:text-[64px]">
                {service.feature_name}
              </h3>
              <div className="space-y-7">
                <PrismicRichText
                  field={service.feature_description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-base leading-[36px] font-light tracking-[0%] text-[#F1F1F1] lg:text-lg">
                        {children}
                      </p>
                    ),
                    list: ({ children }) => (
                      <ul className="grid list-disc grid-cols-1 pl-5 lg:grid-cols-2">
                        {children}
                      </ul>
                    ),
                    listItem: ({ children }) => (
                      <motion.li
                        variants={listItemVariants as never}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-base leading-[36px] font-semibold tracking-[0%] lg:text-lg"
                      >
                        {children}
                      </motion.li>
                    ),
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCardsSection;
