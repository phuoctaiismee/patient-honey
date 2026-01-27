import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `ServicesGrid`.
 */
export type ServicesGridProps = SliceComponentProps<Content.ServicesGridSlice>;

/**
 * Component for "ServicesGrid" Slices.
 */
const ServicesGrid: FC<ServicesGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <div>
        {slice.primary.services.map((service, index) => (
          <div key={index}>
            <h3>{service.title}</h3>
            <PrismicNextLink field={service.link} />
          </div>
        ))}
      </div>
      <PrismicNextLink field={slice.primary.cta_button} />
    </section>
  );
};

export default ServicesGrid;
