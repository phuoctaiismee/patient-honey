import { GoogleColorIcon } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { motion } from "motion/react";
import RatingStars from "../rating-stars";

const ReviewItem = ({
  authorAvatar,
  authorName,
  reviewDate,
  starRating,
  reviewText,
}: {
  authorAvatar?: string;
  authorName?: string;
  reviewDate?: string;
  starRating?: number;
  reviewText?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      className="space-y-6 rounded-[2px] bg-[#303030] px-12 py-6"
    >
      <div className="flex items-center gap-4">
        <Avatar className="size-16.5 rounded-full">
          <AvatarImage src={authorAvatar} alt={authorName || ""} />
          <AvatarFallback>{authorName?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <div className="text-xl leading-6 font-semibold tracking-[0%] text-[#F4F5F6]">
            {authorName}
          </div>
          <div className="text-sm leading-6 font-normal tracking-[0%] text-[#777E90]">
            {format(reviewDate || "", "MMMM d, yyyy")}
          </div>
        </div>
      </div>
      <p className="text-base leading-[200%] font-light tracking-[0%] text-[#E8E8EA]">
        {reviewText}
      </p>
      <div className="flex items-center justify-end gap-2.25">
        <RatingStars rating={starRating || 0} />
        <GoogleColorIcon className="size-5" />
      </div>
    </motion.div>
  );
};

export default ReviewItem;
