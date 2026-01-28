import { cn } from "@/lib/utils";
import { ImageField, RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

interface ImageWithInfoProps {
  image: ImageField;
  title: RichTextField;
  description: RichTextField;
  variant?: "image-left" | "image-right";
}

const ImageWithInfo = ({
  image,
  title,
  description,
  variant = "image-left",
}: ImageWithInfoProps) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-8 lg:items-center lg:gap-12",
        {
          "lg:flex-row": variant === "image-left",
          "lg:flex-row-reverse": variant === "image-right",
        },
      )}
    >
      <PrismicNextImage
        field={image}
        width={720}
        height={800}
        className="h-[400px] lg:w-[360px] object-cover object-top lg:h-[409px]"
      />
      <div className="space-y-4.5 lg:space-y-7">
        <PrismicRichText
          field={title}
          components={{
            paragraph: ({ children }) => (
              <p className="font-urbanist text-xl leading-[140%] font-light [&>strong]:font-bold tracking-[3.2px] uppercase lg:text-4xl">
                {children}
              </p>
            ),
          }}
        />
        <PrismicRichText
          field={description}
          components={{
            paragraph: ({ children }) => (
              <p className="text-sm leading-[150%] tracking-[0%] text-[#F1F1F1] lg:text-base">
                {children}
              </p>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default ImageWithInfo;
