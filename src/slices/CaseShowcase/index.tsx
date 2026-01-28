"use client";

import CaseShowcaseSection from "@/components/shared/case-showcase";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `CaseShowcase`.
 */
export type CaseShowcaseProps = SliceComponentProps<Content.CaseShowcaseSlice>;

/**
 * Component for "CaseShowcase" Slices.
 */
const CaseShowcase: FC<CaseShowcaseProps> = ({ slice }) => {
  const images = slice.primary.cases.map((item) => ({
    url: item.image.url || "",
    alt: item.image.alt || "",
  }));

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CaseShowcaseSection images={images as never} />
    </section>
  );
};

export default CaseShowcase;
