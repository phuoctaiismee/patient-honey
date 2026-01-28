import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

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

          <h3>{member.name}</h3>

          <p>{member.title}</p>

          <PrismicRichText field={member.biography} />

          {member.quote && (
            <PrismicRichText field={member.quote} />
          )}
        </div>
      ))}
    </section>
  );
};

export default TeamSection;
