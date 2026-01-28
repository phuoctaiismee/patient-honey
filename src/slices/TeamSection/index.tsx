import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `TeamSection`.
 */
export type TeamSectionProps = SliceComponentProps<Content.TeamSectionSlice>;

/**
 * Component for "TeamSection" Slices.
 */
const TeamSection: FC<TeamSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />

      {slice.primary.team_members.map((member, index) => (
        <div key={index}>
          {member.member_image.url && (
            <PrismicNextImage field={member.member_image} />
          )}

        
        </div>
      ))}
    </section>
  );
};

export default TeamSection;
