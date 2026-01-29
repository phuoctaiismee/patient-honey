"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ImageField,
  KeyTextField,
  LinkField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

interface HeroSectionProps {
  backgroundImageUrl?: ImageField;
  title?: RichTextField;
  subTitle?: KeyTextField;
  description?: RichTextField;
  ctaButtons?: LinkField;
  hasFadeOverlayLeft?: boolean;
  reverseHeading?: boolean;
  backgroundSize?: string;
  backgroundPosition?: string;
  className?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}

const HeroSection = ({
  backgroundImageUrl,
  title,
  subTitle,
  description,
  hasFadeOverlayLeft = false,
  reverseHeading = false,
  ctaButtons,
  className,
  titleClassName,
  subTitleClassName,
}: HeroSectionProps) => {
  console.log("🚀 ~ HeroSection ~ description:", description);

  return (
    <section
      className={cn(
        "relative flex min-h-145 flex-col justify-center gap-8 px-4 py-12 lg:min-h-160 lg:gap-12 lg:px-30 lg:py-20",

        className,
      )}
      style={{
        backgroundColor:
          "linear-gradient(90.01deg, #000000 25.98%, rgba(0, 0, 0, 0) 94.08%)",
        // // backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none',
        // backgroundSize,
        // backgroundPosition,
        backgroundRepeat: "no-repeat",
      }}
    >
      <PrismicNextImage
        field={backgroundImageUrl}
        fill
        className="object-cover z-0 pointer-events-none"
      />
      {/* overlay */}
      {hasFadeOverlayLeft && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"
          style={{
            background:
              "linear-gradient(90deg, #000000 0%, #000000 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 70%)",
          }}
        />
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="contents"
      >
        {/* subtitle */}
        {subTitle && !reverseHeading && (
          <motion.h4
            variants={itemVariants as never}
            className={cn(
              "relative z-10 font-urbanist text-2xl leading-[100%] font-normal tracking-[5%] lg:text-[40px] text-shadow-2xs",
              subTitleClassName,
            )}
          >
            {subTitle}
          </motion.h4>
        )}

        {/* title */}
        {title && (
          <PrismicRichText
            field={title}
            components={{
              heading1: ({ children }) => (
                <motion.h1
                  variants={itemVariants as never}
                  className={cn(
                    "relative z-10 font-urbanist text-[48px] leading-[110%] font-bold tracking-[5%] lg:text-[112px] text-shadow-2xs",
                    titleClassName,
                  )}
                >
                  {children}
                </motion.h1>
              ),
            }}
          />
        )}

        {/* subtitle */}
        {subTitle && reverseHeading && (
          <motion.h4
            variants={itemVariants as never}
            className={cn(
              "relative z-10 font-urbanist text-2xl leading-[100%] font-normal tracking-[5%] lg:text-[40px] text-shadow-2xs",
              subTitleClassName,
            )}
          >
            {subTitle}
          </motion.h4>
        )}

        {/* description */}
        {description && (
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => (
                <motion.p
                  variants={itemVariants as never}
                  className="relative z-10 text-base leading-[200%] font-normal tracking-[0%] lg:max-w-264 lg:text-lg text-shadow-2xs"
                >
                  {children}
                </motion.p>
              ),
            }}
          />
        )}

        {/* bottom button */}
        {ctaButtons?.text && (
          <motion.div variants={itemVariants as never}>
            <Button
              asChild
              className="relative z-10 w-fit rounded-[24px] uppercase animate__animated animate__fadeInDown"
              size="lg"
            >
              <PrismicNextLink field={ctaButtons}>
                {ctaButtons.text || "Book now"}
              </PrismicNextLink>
            </Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;
