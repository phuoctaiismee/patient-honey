import ConsultationForm from "@/components/shared/form";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `ConsultationCta`.
 */
export type ConsultationCtaProps =
  SliceComponentProps<Content.ConsultationCtaSlice>;

/**
 * Component for "ConsultationCTA" Slices.
 */
const ConsultationCta: FC<ConsultationCtaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ConsultationForm {...slice} />
    </section>
  );
};

export default ConsultationCta;
