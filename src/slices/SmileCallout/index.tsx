"use client";
import GhostTitle from "@/components/shared/ghost-title";
import { cn } from "@/lib/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion } from "motion/react";
import { FC } from "react";
/**
 * Props for `SmileCallout`.
 */
export type SmileCalloutProps = SliceComponentProps<Content.SmileCalloutSlice>;

/**
 * Component for "SmileCallout" Slices.
 */
const SmileCallout: FC<SmileCalloutProps> = ({ slice }) => {
  const { image, description, heading, padding_top } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={cn("container space-y-8 py-12 lg:py-20", {
          "pt-0": !padding_top,
        })}
      >
        {heading && heading.length > 0 && <GhostTitle title={heading} />}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-12",
          )}
        >
          <PrismicNextImage
            field={image}
            className="h-[480px] w-full object-cover lg:h-[576px] lg:max-w-[576px]"
          />
          <div className="space-y-3 lg:space-y-7">
            <PrismicRichText
              field={description}
              components={{
                heading2: ({ children }) => (
                  <h2 className="font-urbanist text-[28px] leading-[140%] font-light [&>strong]:font-bold tracking-[5%] text-white lg:text-[48px]">
                    {children}
                  </h2>
                ),

                heading3: ({ children }) => (
                  <h2 className="font-urbanist text-[28px] leading-[140%] font-light [&>strong]:font-bold tracking-[5%] text-white lg:text-[44px]">
                    {children}
                  </h2>
                ),

                paragraph: ({ children }) => (
                  <p className="text-base font-light leading-[36px] [&>strong]:font-bold tracking-[0%] text-[#F1F1F1] lg:text-lg">
                    {children}
                  </p>
                ),
                list: ({ children }) => (
                  <ul className="space-y-2 pl-6">{children}</ul>
                ),
                listItem: ({ children }) => (
                  <li className="text-base list-disc list-inside leading-[36px] [&>strong]:font-bold font-light tracking-[0%] text-[#F1F1F1] -indent-6 lg:text-lg">
                    {children}
                  </li>
                ),
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmileCallout;
