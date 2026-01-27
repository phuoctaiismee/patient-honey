import FeaturedImageSection from "@/components/shared/featured-image";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `LargeImage`.
 */
export type LargeImageProps = SliceComponentProps<Content.LargeImageSlice>;

/**
 * Component for "LargeImage" Slices.
 */
const LargeImage: FC<LargeImageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <FeaturedImageSection image={slice.primary.image}/>
    </section>
  );
};

export default LargeImage;
