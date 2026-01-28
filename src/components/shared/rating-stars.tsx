import { StarIcon } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  className?: string;
  maxStars?: number;
}

const RatingStars = ({ maxStars = 5, rating, className }: RatingStarsProps) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxStars }, (_, index) => {
        const starNumber = index + 1;
        return (
          <StarIcon
            key={index}
            className={`size-3.5 ${starNumber <= rating ? 'fill-[#FFC907] text-[#FFC907]' : 'fill-gray-400 text-gray-400'} ${className || ''}`}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
