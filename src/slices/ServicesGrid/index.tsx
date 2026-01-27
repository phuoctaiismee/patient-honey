import CardGridSection from "@/components/shared/grid-cards";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `ServicesGrid`.
 */
export type ServicesGridProps = SliceComponentProps<Content.ServicesGridSlice>;

/**
 * Component for "ServicesGrid" Slices.
 */
const ServicesGrid: FC<ServicesGridProps> = ({ slice }) => {
    const { services, heading, cta_button } = slice.primary;
    const items = services.map((item, index) => ({
      id: index,
      title: item.title,
      icon: item.icon,
      link: item.link
    }))
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <CardGridSection title={heading} items={items} action={cta_button}/>
    </section>
  );
};

export default ServicesGrid;
