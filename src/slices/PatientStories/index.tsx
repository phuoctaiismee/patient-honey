"use client";

import PatientStoriesSection from "@/components/shared/patient-stories";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `PatientStories`.
 */
export type PatientStoriesProps =
  SliceComponentProps<Content.PatientStoriesSlice>;

/**
 * Component for "PatientStories" Slices.
 */
const PatientStories: FC<PatientStoriesProps> = ({ slice }) => {
  const videos =
    slice.primary.testimonials.map((item) => ({
      poster: item.video_thumbnail.url || "",
      src: item.video_link.embed_url || "",
      alt: item.video_thumbnail.alt || "",
    })) || [];
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PatientStoriesSection
        title={slice.primary.title}
        videos={videos}
        description={slice.primary.description}
      />
    </section>
  );
};

export default PatientStories;
