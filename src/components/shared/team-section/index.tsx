"use client";

import GhostTitle from "@/components/shared/ghost-title";
import ImageWithInfo from "@/components/shared/image-with-info";
import { cn } from "@/lib/utils";
import { ImageField, RichTextField } from "@prismicio/client";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

const titleVariants = {
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
    },
  },
};

const memberVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

interface TeamMember {
  id: number;
  name: RichTextField;
  photo: ImageField;
  description: RichTextField;
}

interface TeamSectionProps {
  title: RichTextField;
  members: TeamMember[];
  className?: string;
  reverse?: boolean;
}

const TeamSection = ({
  title,
  members,
  className,
  reverse = false,
}: TeamSectionProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 bg-[#252525] px-4 py-12 lg:gap-16 lg:px-30 lg:py-25",
        className,
      )}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={titleVariants as never}
      >
        <GhostTitle title={title} />
      </motion.div>

      <motion.div
        className="container mx-auto space-y-8 lg:space-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {members.map((members, index) => (
          <motion.div key={members.id} variants={memberVariants as never}>
            <ImageWithInfo
              image={members.photo}
              title={members.name}
              description={members.description}
              variant={
                index % 2 === 0
                  ? reverse
                    ? "image-right"
                    : "image-left"
                  : reverse
                    ? "image-left"
                    : "image-right"
              }
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamSection;
