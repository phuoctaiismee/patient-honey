"use client";

import { cn } from "@/lib/utils";
import { ImageField, KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { motion } from "framer-motion";
import React from "react";

interface HoverCardProps {
  id: number;
  title: KeyTextField;
  icon: ImageField;
  link: LinkField;
}

const HoverCard = ({ title, icon, link }: HoverCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <PrismicNextLink
      field={link}
      className={cn(
        "group relative flex h-[297px] cursor-pointer flex-col items-center justify-center gap-9 overflow-hidden rounded-[20px] border-t-4 border-[#1089C0] bg-[#303030] p-12 transition-colors duration-300 hover:bg-[#1089C0]",
        {
          "bg-[#1089C0]": isHovered,
        },
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 1,
          y: isHovered ? 15 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <PrismicNextImage field={icon} className="size-20 text-white" />
      </motion.div>

      <motion.h3
        className="text-center text-2xl leading-[100%] font-semibold tracking-[2%] text-white"
        animate={{
          fontSize: isHovered ? "1.875rem" : "1.5rem",
          y: isHovered ? 15 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>

      <motion.button
        className="w-fit text-center text-xl leading-[100%] font-bold tracking-[5%] text-[#1089C0] group-hover:text-white"
        animate={{
          y: isHovered ? 20 : 0,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        Learn more
      </motion.button>
    </PrismicNextLink>
  );
};

export default HoverCard;
