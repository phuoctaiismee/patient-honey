"use client";

import ReviewCTASection from "@/components/shared/review-cta";
import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `ReviewsCta`.
 */
export type ReviewsCtaProps = SliceComponentProps<Content.ReviewsCtaSlice>;

/**
 * Component for "ReviewsCTA" Slices.
 */
const ReviewsCta: FC<ReviewsCtaProps> = ({ slice }) => {
  const platforms = slice.primary.reviews.map((review) => ({
    icon: review.icon.url,
    count: review.count,
    description: review.description,
  }));
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ReviewCTASection
        heading={asText(slice.primary.heading)}
        subheading={slice.primary.subheading || ""}
        bgImage={slice.primary.background_image.url || ""}
        platforms={platforms as never}
      />
    </section>
  );
};

export default ReviewsCta;
