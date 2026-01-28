import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `PatientInformation`.
 */
export type PatientInformationProps =
  SliceComponentProps<Content.PatientInformationSlice>;

/**
 * Component for "PatientInformation" Slices.
 */
const PatientInformation: FC<PatientInformationProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />

      <PrismicRichText field={slice.primary.getting_started_title} />
      <PrismicRichText field={slice.primary.getting_started_subtitle} />
      <PrismicRichText field={slice.primary.getting_started_details} />

      <PrismicRichText field={slice.primary.xray_title} />
      <PrismicRichText field={slice.primary.xray_description} />
    </section>
  );
};

export default PatientInformation;
