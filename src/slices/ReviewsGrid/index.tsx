"use client";

import ReviewGridSection from "@/components/shared/review-grid";
import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `ReviewsGrid`.
 */
export type ReviewsGridProps = SliceComponentProps<Content.ReviewsGridSlice>;

/**
 * Component for "ReviewsGrid" Slices.
 */
const ReviewsGrid: FC<ReviewsGridProps> = ({ slice }) => {
  const reviews = slice.primary.reviews.map((review) => ({
    authorAvatar: review.avatar.url || undefined,
    authorName: review.authorName,
    reviewDate: review.review_date,
    starRating: review.rating,
    reviewText: asText(review.reviewText),
  }));
  const buttonLabel = slice.primary.viewMoreLink.text;
  const buttonLink =
    slice.primary.viewMoreLink.link_type === "Document"
      ? slice.primary.viewMoreLink.url
      : "#";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ReviewGridSection
        reviews={reviews as never}
        buttonLabel={buttonLabel}
        buttonLink={buttonLink}
      />
    </section>
  );
};

export default ReviewsGrid;
