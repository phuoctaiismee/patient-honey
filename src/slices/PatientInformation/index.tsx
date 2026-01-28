import InfoSection from "@/components/shared/info-section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `PatientInformation`.
 */
export type PatientInformationProps =
  SliceComponentProps<Content.PatientInformationSlice>;

/**
 * Component for "PatientInformation" Slices.
 */
const PatientInformation: FC<PatientInformationProps> = ({ slice }) => {
  const {
    content_info,
    request_description,
    request_link,
    request_title,
    title,
  } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <InfoSection
        title={title}
        cardTitle={request_title}
        cardDescription={request_description}
        cardLink={request_link}
        infoContent={content_info}
      />
    </section>
  );
};

export default PatientInformation;
