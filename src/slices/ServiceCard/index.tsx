import ServicesCardsSection from "@/components/shared/service-cards";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `ServiceCard`.
 */
export type ServiceCardProps = SliceComponentProps<Content.ServiceCardSlice>;

/**
 * Component for "ServiceCard" Slices.
 */
const ServiceCard: FC<ServiceCardProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ServicesCardsSection services={slice.primary.features} />
    </section>
  );
};

export default ServiceCard;
