"use client";
import HeroSection from "@/components/shared/hero";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `DentalHero`.
 */
export type DentalHeroProps = SliceComponentProps<Content.DentalHeroSlice>;

/**
 * Component for "DentalHero" Slices.
 */
const DentalHero: FC<DentalHeroProps> = ({ slice }) => {
  const {
    backgroundImage,
    buttonLink,
    description,
    heading,
    tagline,
    with_overlay,
    reverse_tagline
  } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HeroSection
        backgroundImageUrl={backgroundImage}
        title={heading}
        subTitle={tagline}
        description={description}
        ctaButtons={buttonLink}
        className="bg-cover"
        hasFadeOverlayLeft={with_overlay}
        reverseHeading={reverse_tagline}
      />
    </section>
  );
};

export default DentalHero;
