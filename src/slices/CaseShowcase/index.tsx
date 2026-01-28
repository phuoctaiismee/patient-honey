import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `CaseShowcase`.
 */
export type CaseShowcaseProps = SliceComponentProps<Content.CaseShowcaseSlice>;

/**
 * Component for "CaseShowcase" Slices.
 */
const CaseShowcase: FC<CaseShowcaseProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.cases.map((item, index) => (
        <div key={index}>
          <PrismicNextImage field={item.before_image} />
          <PrismicNextImage field={item.after_image} />
        </div>
      ))}
    </section>
  );
};

export default CaseShowcase;
