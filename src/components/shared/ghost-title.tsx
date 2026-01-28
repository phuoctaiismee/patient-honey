"use client";
import { asText, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "motion/react";

interface GhostTitleProps {
  title: RichTextField;
  coverText?: string;
}

const GhostTitle = ({ title, coverText }: GhostTitleProps) => {
  const titleBlur = asText(title);
  return (
    <div className="relative z-10 flex h-[96px] w-full items-center justify-center overflow-hidden lg:h-[115px]">
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        viewport={{ once: true }} // <-- Chỉ chạy 1 lần
        className="absolute top-1/2 left-1/2 line-clamp-2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[40px] leading-[100%] font-extrabold tracking-[5%] uppercase opacity-5 lg:line-clamp-1 lg:text-[96px] lg:whitespace-nowrap"
      >
        {coverText ?? titleBlur}
      </motion.span>

      <PrismicRichText
        field={title}
        components={{
          heading2: ({ children }) => (
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }} // <-- Chỉ chạy 1 lần
              className="text-center text-[28px] leading-[100%] font-light [&>strong]:font-bold tracking-[5%] lg:text-[48px]"
            >
              {children}
            </motion.h2>
          ),
        }}
      />
    </div>
  );
};

export default GhostTitle;
