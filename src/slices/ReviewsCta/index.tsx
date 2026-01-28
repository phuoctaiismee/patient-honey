import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ReviewsCta`.
 */
export type ReviewsCtaProps = SliceComponentProps<Content.ReviewsCtaSlice>;

/**
 * Component for "ReviewsCTA" Slices.
 */
const ReviewsCta: FC<ReviewsCtaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.subheading && (
        <p>{slice.primary.subheading}</p>
      )}

      <PrismicRichText field={slice.primary.heading} />

      <div>
        {slice.primary.reviews.map((review, index) => (
          <div key={index}>
            {review.icon.url && (
              <PrismicNextImage field={review.icon} />
            )}
            {review.count && (
              <div>{review.count}</div>
            )}
            {review.description && (
              <p>{review.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsCta;
