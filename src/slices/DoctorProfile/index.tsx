import TeamSection from "@/components/shared/team-section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
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
  const { description, doctor_image, doctor_name, title } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TeamSection
        className="bg-background"
        title={title}
        members={[
          {
            id: 1,
            description,
            name: doctor_name,
            photo: doctor_image,
          },
        ]}
      />
    </section>
  );
};

export default DoctorProfile;
