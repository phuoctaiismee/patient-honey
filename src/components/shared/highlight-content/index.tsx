"use client";

import GhostTitle from "@/components/shared/ghost-title";
import { ShineBorder } from "@/components/shared/shine-border";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Content, KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "motion/react";
import React from "react";

interface HighlightSectionProps {
  title: RichTextField;
  coverText: KeyTextField;
  description: RichTextField;
  bottomContent?: RichTextField;
  bottomCtas?: Content.QualityCareMessageSliceWithButtonsPrimaryCtaButtonsItem[];
  hasDecoration?: boolean;
}

const HighlightSection = ({
  title,
  coverText,
  description,
  bottomContent,
  bottomCtas,
  hasDecoration = true,
}: HighlightSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
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
  [].reverse;

  const highlightBoxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex flex-col justify-center gap-12 py-12 lg:py-25 overflow-hidden"
      style={{
        background:
          "linear-gradient(270deg, #181818 0%, rgba(64, 64, 64, 0) 100%)",
      }}
    >
      <motion.div variants={itemVariants as never}>
        <GhostTitle title={title} coverText={coverText} />
      </motion.div>

      {description && description.length > 0 && (
        <div className="container">
          <motion.div
            variants={highlightBoxVariants as never}
            className="relative z-10 rounded-2xl bg-[#63636314] py-5 space-y-4 shadow-[inset_-8px_-8px_32px_rgba(255,255,255,0.08)] backdrop-blur-[10px] p-4 lg:p-20"
            // style={{
            //   border: '1px solid',
            //   borderImageSource: 'linear-gradient(80.65deg, #000000 -0.1%, #FFFFFF 82.97%, #000000 119.83%)',
            // }}
          >
            <ShineBorder
              borderWidth={1}
              shineColor={["#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF"]}
            />
            <div>
              <PrismicRichText
                field={description}
                components={{
                  paragraph: ({ children }) => (
                    <div
                      className={cn(
                        "text-lg leading-[170%] font-light tracking-[0%] [&>strong]:font-bold [&>em]:italic lg:text-xl lg:leading-[200%]",
                        {
                          "text-center": bottomCtas && bottomCtas.length > 0,
                        },
                      )}
                    >
                      {children}
                    </div>
                  ),
                }}
              />
            </div>

            {bottomCtas && bottomCtas.length > 0 && (
              <div className="flex items-center gap-2 justify-center">
                {bottomCtas.map((cta, index) => (
                  <Button
                    key={index}
                    variant={index % 2 === 0 ? "default" : "secondary"}
                    className="rounded-full"
                    size="lg"
                  >
                    <PrismicNextLink field={cta.action}>
                      {cta.action.text}
                    </PrismicNextLink>
                  </Button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}

      {bottomContent && bottomContent.length > 0 && (
        <div className="container   space-y-8">
          <PrismicRichText
            field={bottomContent}
            components={{
              image: ({ node }) => {
                return (
                  <PrismicNextImage
                    field={node}
                    width={node.dimensions.width}
                    height={node.dimensions.height}
                    className="object-cove mx-auto"
                  />
                );
              },
              heading4: ({ children }) => (
                <h4 className="font-urbanist text-[28px] leading-[100%] font-light [&>strong]:font-bold tracking-[5%] text-white lg:text-[48px]">
                  {children}
                </h4>
              ),
              paragraph: ({ children }) => (
                <p className="text-base leading-[150%] font-light [&>strong]:font-bold tracking-[0%] text-[#F1F1F1] lg:text-lg">
                  {children}
                </p>
              ),
              listItem: ({ children }) => (
                <li className="text-base list-disc list-inside leading-[150%] [&>strong]:font-bold font-light tracking-[0%] text-[#F1F1F1] lg:text-lg">
                  {children}
                </li>
              ),
            }}
          />
        </div>
      )}

      {/* decoration */}
      {hasDecoration && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="absolute top-0 right-0"
        >
          <CircleDecoration />
        </motion.div>
      )}
    </motion.div>
  );
};

export default HighlightSection;

const CircleDecoration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="783"
    height="643"
    fill="none"
    viewBox="0 0 783 643"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx="676" cy="119" r="526" fill="url(#b)"></circle>
    </g>
    <defs>
      <radialGradient
        id="b"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(0 526 -526 0 676 119)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#545454"></stop>
        <stop offset="1" stopColor="#141414" stopOpacity="0"></stop>
      </radialGradient>
      <filter
        id="a"
        width="1352"
        height="1352"
        x="0"
        y="-557"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_324_30726"
          stdDeviation="75"
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg>
);
