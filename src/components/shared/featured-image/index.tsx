"use client";
import { cn } from "@/lib/utils";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

interface FeaturedImageSectionProps {
  image: ImageField;
  className?: string;
}

const FeaturedImageSection = ({
  image,
  className,
}: FeaturedImageSectionProps) => {
  return (
    <div
      className={cn(
        "h-140 w-full lg:h-auto lg:max-h-170 relative overflow-hidden",
        className,
      )}
    >
      <PrismicNextImage
        field={image}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default FeaturedImageSection;
