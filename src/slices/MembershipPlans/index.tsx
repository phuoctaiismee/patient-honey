import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `MembershipPlans`.
 */
export type MembershipPlansProps =
  SliceComponentProps<Content.MembershipPlansSlice>;

/**
 * Component for "MembershipPlans" Slices.
 */
const MembershipPlans: FC<MembershipPlansProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <div>
        {slice.primary.plans.map((plan, index) => (
          <div key={index}>
            <h3>{plan.planName}</h3>
            <p>{plan.price}</p>
            <PrismicRichText field={plan.features} />
          </div>
        ))}
      </div>
      <PrismicRichText field={slice.primary.promotionalText} />
      <PrismicRichText field={slice.primary.howItWorksHeading} />
      <PrismicRichText field={slice.primary.termsAndConditions} />
    </section>
  );
};

export default MembershipPlans;
