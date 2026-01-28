import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import { useMemo } from "react";
import ReviewItem from "./review-item";

type ReviewGridProps = {
  reviews: {
    authorAvatar?: string;
    authorName?: string;
    reviewDate?: string;
    starRating?: number;
    reviewText?: string;
  }[];
  buttonLabel?: string;
  buttonLink?: string;
};

const ReviewGridSection: React.FC<ReviewGridProps> = ({
  reviews,
  buttonLabel,
  buttonLink,
}) => {
  const reviewsLength = useMemo(() => reviews.length, [reviews]);
  return (
    <div className="space-y-8 bg-[#161616] px-4 py-12 lg:px-30 lg:py-25">
      <div className="lg:container lg:mx-auto flex flex-col gap-8 lg:flex-row">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex flex-1 flex-col gap-7 lg:gap-8"
        >
          {reviews
            .slice(0, Math.ceil(reviewsLength / 2))
            .map((review, index) => (
              <ReviewItem
                key={review.authorName?.toString() || index}
                {...review}
              />
            ))}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          className="flex flex-1 flex-col gap-8"
        >
          {reviews
            .slice(Math.ceil(reviewsLength / 2), reviewsLength)
            .map((review, index) => (
              <ReviewItem
                key={review.authorName?.toString() || index}
                {...review}
              />
            ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex w-full items-center justify-center"
      >
        <Button size="lg" className="rounded-[24px]" asChild>
          <Link href={buttonLink || "#"}>{buttonLabel}</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default ReviewGridSection;
