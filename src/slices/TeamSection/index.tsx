import TeamSectionComponent from "@/components/shared/team-section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";
/**
 * Props for `TeamSection`.
 */
export type TeamSectionProps = SliceComponentProps<Content.TeamSectionSlice>;

/**
 * Component for "TeamSection" Slices.
 */
const TeamSection: FC<TeamSectionProps> = ({ slice }) => {
  const { heading, team_members } = slice.primary;
  const items = team_members.map((item, index) => ({
    id: index,
    name: item.member_name,
    description: item.biography,
    photo: item.member_image,
  }));
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TeamSectionComponent title={heading} members={items} />
    </section>
  );
};

export default TeamSection;
