"use client";

import { circle_blur } from "@/assets";
import GhostTitle from "@/components/shared/ghost-title";
import { ShineBorder } from "@/components/shared/shine-border";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Content, KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "motion/react";
import Image from "next/image";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.25, 0.4, 0.25, 1],
//     },
//   },
// };
// [].reverse;

// const highlightBoxVariants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.95,
//     y: 30,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.25, 0.4, 0.25, 1],
//     },
//   },
// };

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
  return (
    <motion.div
      // variants={containerVariants}
      // initial="hidden"
      // whileInView="visible"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex flex-col justify-center gap-12 py-12 lg:py-25 overflow-hidden"
      style={{
        background:
          "linear-gradient(270deg, #181818 0%, rgba(64, 64, 64, 0) 100%)",
      }}
    >
      <motion.div>
        <GhostTitle title={title} coverText={coverText} />
      </motion.div>

      {description && description.length > 0 && (
        <div className="container">
          <motion.div
            // variants={highlightBoxVariants as never}
            initial={{
              opacity: 0,
              y: 30,
              // scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              // scale: 1,
            }}
            // transition={{
            //   duration: 0.8,
            //   ease: [0.25, 0.4, 0.25, 1],
            // }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 rounded-2xl bg-[#63636314] py-5 space-y-4 shadow-[inset_-8px_-8px_32px_rgba(255,255,255,0.08)] backdrop-blur-[10px] p-4 lg:p-20"
            // style={{
            //   border: '1px solid',
            //   borderImageSource: 'linear-gradient(80.65deg, #000000 -0.1%, #FFFFFF 82.97%, #000000 119.83%)',
            // }}
            style={{ willChange: "opacity, transform" }}
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
        <div className="absolute top-0 lg:-top-20 right-0 z-0 pointer-events-none">
          <Image src={circle_blur} width={600} height={600} alt="decoration" />
        </div>
      )}
    </motion.div>
  );
};

export default HighlightSection;
