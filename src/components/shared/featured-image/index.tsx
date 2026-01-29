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
        "aspect-auto w-full lg:aspect-1440/680 max-h-[800px] relative overflow-hidden",
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
