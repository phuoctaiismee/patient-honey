import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

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
    
      <PrismicRichText field={slice.primary.description} />
    </section>
  );
};

export default DoctorProfile;
