"use client";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Content, EmbedField } from "@prismicio/client";
import { useEffect, useMemo, useState } from "react";

interface YoutubeVideosSectionProps {
  featuredVideo: EmbedField;
  videos: Content.VideoCarouselSliceDefaultPrimaryCarouselVideosItem[];
}

const extractYoutubeId = (html?: string) => {
  if (!html) return null;

  const match =
    html.match(/embed\/([a-zA-Z0-9_-]+)/) || html.match(/v=([a-zA-Z0-9_-]+)/);

  return match?.[1] ?? null;
};

const getYoutubeThumbnail = (id: string) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export default function YoutubeVideosSection({
  featuredVideo,
  videos,
}: YoutubeVideosSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = useMediaQuery("(max-width: 1023px)");

  const allVideos = useMemo(() => {
    return [featuredVideo, ...videos.map((v) => v.video)]
      .map((v) => extractYoutubeId(v?.html ?? ""))
      .filter(Boolean)
      .map((id) => ({ id: id! }));
  }, [featuredVideo, videos]);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  /* =========================
      DESKTOP LAYOUT
  ========================== */
  if (!isMobile) {
    const activeVideo = allVideos[activeIndex];

    return (
      <div className="w-full bg-[#303030] py-12 lg:py-20 space-y-16">
        {/* MAIN PLAYER – DESKTOP */}
        <div className="hidden aspect-video container 2xl:max-h-[900px] w-full lg:flex">
          <iframe
            src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
            className="h-full w-full"
            // allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        {/* THUMBNAILS */}
        <Carousel
          setApi={setApi}
          opts={{ align: "start", containScroll: "trimSnaps" }}
        >
          <CarouselContent>
            {allVideos.map((video, index) => (
              <CarouselItem
                key={video.id}
                className={cn(
                  "basis-1/4 cursor-pointer",
                  index !== activeIndex && "opacity-60",
                )}
                onClick={() => {
                  setActiveIndex(index);
                  api?.scrollTo(index);
                }}
              >
                <img
                  src={getYoutubeThumbnail(video.id)}
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                  alt="Youtube thumbnail"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  }

  /* =========================
      MOBILE LAYOUT
  ========================== */
  return (
    <div className="mx-auto w-full overflow-hidden bg-[#303030]">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", containScroll: "trimSnaps" }}
      >
        <CarouselContent>
          {allVideos.map((video, index) => {
            const isActive = index === activeIndex;

            return (
              <CarouselItem
                key={video.id}
                className={cn("basis-[85%]", !isActive && "opacity-50")}
              >
                <div
                  onClick={() => {
                    setActiveIndex(index);
                    api?.scrollTo(index);
                  }}
                  className="overflow-hidden"
                >
                  {isActive ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                      className="aspect-video w-full"
                    //   allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={getYoutubeThumbnail(video.id)}
                      className="aspect-video w-full object-cover"
                      loading="lazy"
                      alt="Youtube thumbnail"
                    />
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
}
