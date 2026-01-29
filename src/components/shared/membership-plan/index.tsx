import GhostTitle from "@/components/shared/ghost-title";
import { Separator } from "@/components/ui/separator";
import { Content, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface MembershipPlanProps {
  title: RichTextField;
  plans: Content.MembershipPlansSliceDefaultPrimaryPlansItem[];
  promotionalText: RichTextField;
  howItWorks: RichTextField;
}
const MembershipPlan = ({
  title,
  plans,
  promotionalText,
  howItWorks,
}: MembershipPlanProps) => {
  return (
    <div className="flex flex-col gap-8 bg-[#252525] px-4 py-12 lg:gap-12 lg:px-30 lg:py-25">
      <GhostTitle title={title} />
      <div className="flex flex-col container   justify-center gap-8 lg:flex-row lg:gap-10">
        {plans.map((plan) => (
          <div
            key={plan.planName}
            className="space-y-6 w-full rounded-[16px] border-t-2 border-t-[#1089C0] bg-[#303030] p-8"
          >
            <h3 className="font-urbanist uppercase text-[28px] leading-[140%] font-extrabold tracking-[2px] text-[#1089C0] lg:text-[28px]">
              {plan.planName}
            </h3>
            <Separator className="border-[#E9EAFA]" />
            <div className="text-[28px] leading-[150%] font-bold tracking-[0px] text-white">
              {plan.price}
            </div>
            <div className="space-y-3">
              <PrismicRichText
                field={plan.features}
                components={{
                  list: ({ children }) => (
                    <ul className="space-y-3">{children}</ul>
                  ),
                  listItem: ({ children }) => (
                    <li className="flex items-center gap-3">
                      <CheckIcon />
                      <div className="text-[18px] leading-[150%] font-normal tracking-[0px] text-white lg:text-[18px]">
                        {children}
                      </div>
                    </li>
                  ),
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <PrismicRichText
        field={promotionalText}
        components={{
          paragraph: ({ children }) => (
            <p className="mx-auto max-w-[800px] text-center text-base leading-[150%] font-semibold tracking-[0%] text-[#F1F1F1] lg:text-lg">
              {children}
            </p>
          ),
        }}
      />
      <div className="container   space-y-3">
        <PrismicRichText
          field={howItWorks}
          components={{
            heading2: ({ children }) => (
              <h2 className="font-urbanist text-[28px] leading-[100%] font-light [&>strong]:font-bold tracking-[5%] text-white lg:text-[48px]">
                {children}
              </h2>
            ),
            paragraph: ({ children }) => (
              <p className="text-base leading-[150%] font-light [&>strong]:font-bold tracking-[0%] text-[#F1F1F1] lg:text-lg">
                {children}
              </p>
            ),
            listItem: ({ children }) => (
              <li className="text-base list-disc list-inside leading-[150%] [&>strong]:font-bold font-light tracking-[0%] text-[#F1F1F1] lg:text-lg">
                {children}
              </li>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default MembershipPlan;

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    fill="none"
    viewBox="0 0 23 23"
    {...props}
  >
    <path
      fill="#1089C0"
      d="M22.5 11.25c0 .96-1.18 1.751-1.416 2.636-.243.915.373 2.19-.09 2.99-.47.815-1.886.912-2.546 1.572s-.757 2.076-1.571 2.546c-.8.463-2.076-.153-2.99.09C13 21.321 12.21 22.5 11.25 22.5s-1.751-1.18-2.636-1.416c-.915-.243-2.19.373-2.99-.09-.815-.47-.912-1.886-1.572-2.546s-2.076-.757-2.546-1.571c-.463-.8.153-2.076-.09-2.99C1.179 13 0 12.21 0 11.25s1.18-1.751 1.416-2.636c.243-.915-.373-2.19.09-2.99.47-.815 1.886-.912 2.546-1.572s.757-2.076 1.571-2.546c.8-.463 2.076.153 2.99-.09C9.5 1.179 10.29 0 11.25 0s1.751 1.18 2.636 1.416c.915.243 2.19-.373 2.99.09.815.47.912 1.886 1.572 2.546s2.076.757 2.546 1.571c.463.8-.153 2.076.09 2.99.237.886 1.416 1.677 1.416 2.637"
    ></path>
    <path
      fill="#303030"
      d="m14.501 7.897-4.282 4.282-2.22-2.218a1.235 1.235 0 0 0-1.746 1.746l3.114 3.114c.47.469 1.23.469 1.7 0l5.178-5.179A1.235 1.235 0 0 0 14.5 7.897"
    ></path>
  </svg>
);
