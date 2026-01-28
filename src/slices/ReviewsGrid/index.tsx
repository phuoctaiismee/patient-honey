import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `ReviewsGrid`.
 */
export type ReviewsGridProps = SliceComponentProps<Content.ReviewsGridSlice>;

/**
 * Component for "ReviewsGrid" Slices.
 */
const ReviewsGrid: FC<ReviewsGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.reviews.map((review, index) => (
        <div key={index}>
          <PrismicNextImage field={review.avatar} />
          <h3>{review.authorName}</h3>
          <p>{review.date}</p>
          <p>{review.rating}</p>
          <PrismicRichText field={review.reviewText} />
        </div>
      ))}
      <PrismicNextLink field={slice.primary.viewMoreLink} />
    </section>
  );
};

export default ReviewsGrid;
