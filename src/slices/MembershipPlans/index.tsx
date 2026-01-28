import MembershipPlan from "@/components/shared/membership-plan";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `MembershipPlans`.
 */
export type MembershipPlansProps =
  SliceComponentProps<Content.MembershipPlansSlice>;

/**
 * Component for "MembershipPlans" Slices.
 */
const MembershipPlans: FC<MembershipPlansProps> = ({ slice }) => {
  const { heading, howItWorks, plans, promotionalText } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <MembershipPlan
        title={heading}
        howItWorks={howItWorks}
        plans={plans}
        promotionalText={promotionalText}
      />
    </section>
  );
};

export default MembershipPlans;
