import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `DoctorProfile`.
 */
export type DoctorProfileProps =
  SliceComponentProps<Content.DoctorProfileSlice>;

/**
 * Component for "DoctorProfile" Slices.
 */
const DoctorProfile: FC<DoctorProfileProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />
      <PrismicNextImage field={slice.primary.doctor_image} />
      <h3>{slice.primary.doctor_name}</h3>
      <PrismicRichText field={slice.primary.description} />
    </section>
  );
};

export default DoctorProfile;
