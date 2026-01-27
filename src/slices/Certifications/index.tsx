import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `Certifications`.
 */
export type CertificationsProps =
  SliceComponentProps<Content.CertificationsSlice>;

/**
 * Component for "Certifications" Slices.
 */
const Certifications: FC<CertificationsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col lg:flex-row items-center flex-wrap justify-center gap-14 lg:gap-25 container py-24">
        {slice.primary.certifications.map((item, index) => (
          <div key={index}>
            {item.image.url && <PrismicNextImage field={item.image} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
