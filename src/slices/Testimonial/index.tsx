import CustomerReviewCarousel from "@/components/shared/reviews-carousel";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonial: FC<TestimonialProps> = ({ slice }) => {
  const { testimonials, view_more_action } = slice.primary;
  const items = testimonials.map((item, index) => ({
    id: index,
    content: item.review_content,
    author: item.reviewer_name,
    author_image: item.reviewer_image,
  }));
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CustomerReviewCarousel reviews={items} viewMore={view_more_action} />
    </section>
  );
};

export default Testimonial;
