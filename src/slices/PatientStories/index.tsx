import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `PatientStories`.
 */
export type PatientStoriesProps =
  SliceComponentProps<Content.PatientStoriesSlice>;

/**
 * Component for "PatientStories" Slices.
 */
const PatientStories: FC<PatientStoriesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />
      {slice.primary.testimonials.map((item, index) => (
        <div key={index}>
          <PrismicNextImage field={item.video} />
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default PatientStories;
