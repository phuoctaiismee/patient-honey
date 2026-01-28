"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion } from "motion/react";
import { FC } from "react";

/**
 * Props for `TreatmentShowcase`.
 */
export type TreatmentShowcaseProps =
  SliceComponentProps<Content.TreatmentShowcaseSlice>;

/**
 * Component for "TreatmentShowcase" Slices.
 */
const TreatmentShowcase: FC<TreatmentShowcaseProps> = ({ slice }) => {
  const { description, featured_image, title, video_embed } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-[#303030] px-4 py-12 lg:px-30 lg:py-25">
        <div className="container mx-auto space-y-8 lg:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-12"
          >
            <PrismicNextImage
              field={featured_image}
              className="lg:h-[364px] lg:w-[320px] object-cover"
            />
            <div className="space-y-7">
              <PrismicRichText
                field={title}
                components={{
                  heading2: ({ children }) => (
                    <h3 className="font-urbanist text-[28px] leading-[140%] [&>strong]:font-bold font-light tracking-[3.2px] text-white lg:text-[36px]">
                      {children}
                    </h3>
                  ),
                }}
              />
              <PrismicRichText
                field={description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-base leading-[170%] font-light tracking-[0%] text-[#F1F1F1] lg:text-lg lg:leading-[36px]">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-video w-full overflow-hidden">
              <div
                dangerouslySetInnerHTML={{
                  __html: video_embed.html || "",
                }}
                className="h-full w-full [&>iframe]:h-full [&>iframe]:w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentShowcase;
