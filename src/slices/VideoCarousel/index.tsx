import YoutubeVideosSection from "@/components/shared/youtube-videos";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `VideoCarousel`.
 */
export type VideoCarouselProps =
  SliceComponentProps<Content.VideoCarouselSlice>;

/**
 * Component for "VideoCarousel" Slices.
 */
const VideoCarousel: FC<VideoCarouselProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <YoutubeVideosSection
        videos={slice.primary.carousel_videos}
        featuredVideo={slice.primary.featured_video}
      />
    </section>
  );
};

export default VideoCarousel;
