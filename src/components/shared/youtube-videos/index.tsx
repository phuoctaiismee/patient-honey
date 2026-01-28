"use client";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Content, EmbedField } from "@prismicio/client";
import { useCallback, useEffect, useState } from "react";
interface YoutubeVideosSectionProps {
  featuredVideo: EmbedField;
  videos: Content.VideoCarouselSliceDefaultPrimaryCarouselVideosItem[];
}
const YoutubeVideosSection = ({
  featuredVideo,
  videos,
}: YoutubeVideosSectionProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentVideoIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handleThumbClick = useCallback(
    (index: number) => {
      setCurrentVideoIndex(index);
      api?.scrollTo(index);
    },
    [api],
  );

  return (
    <div className="mx-auto w-full bg-[#303030] overflow-hidden">
      {/* Main Video Player */}
      <div className="aspect-video w-full overflow-hidden px-4 py-12 lg:px-30 lg:py-25">
        <div
          dangerouslySetInnerHTML={{
            __html: featuredVideo.html || "",
          }}
          className="h-full w-full [&>iframe]:h-full [&>iframe]:w-full"
        />
      </div>

      {/* Thumbnail Carousel */}
      <Carousel className="mt-4 w-full" setApi={setApi}>
        <CarouselContent className="my-1 flex">
          {videos.map((video, index) => (
            <CarouselItem
              className={cn(
                "basis-1/2 cursor-pointer transition-opacity md:basis-1/3 lg:basis-1/4",
                currentVideoIndex === index ? "opacity-100" : "opacity-50",
              )}
              key={index}
              onClick={() => handleThumbClick(index)}
            >
              <div className="overflow-hidden border-2 border-transparent hover:border-primary">
                <div
                  dangerouslySetInnerHTML={{
                    __html: video.video.html || "",
                  }}
                  className="aspect-video w-full object-cover [&>iframe]:h-full [&>iframe]:w-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default YoutubeVideosSection;
