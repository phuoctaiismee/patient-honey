import GallerySection from "@/components/shared/gallery";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `OfficeGallery`.
 */
export type OfficeGalleryProps =
  SliceComponentProps<Content.OfficeGallerySlice>;

/**
 * Component for "OfficeGallery" Slices.
 */
const OfficeGallery: FC<OfficeGalleryProps> = ({ slice }) => {
    const { title, gallery_images, center_logo } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <GallerySection title={title} images={gallery_images} logo={center_logo} />
    </section>
  );
};

export default OfficeGallery;
