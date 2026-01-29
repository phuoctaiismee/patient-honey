import GhostTitle from "@/components/shared/ghost-title";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `DentalImplantGuide`.
 */
export type DentalImplantGuideProps =
  SliceComponentProps<Content.DentalImplantGuideSlice>;

/**
 * Component for "DentalImplantGuide" Slices.
 */
const DentalImplantGuide: FC<DentalImplantGuideProps> = ({ slice }) => {
  const { background_color, content, title, cover_heading } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        ...(background_color ? { backgroundColor: background_color } : {}),
      }}
    >
      <div className="container max-w-[1200px] py-12 lg:py-20 space-y-8">
        {title && title.length > 0 && (
          <GhostTitle title={title} coverText={cover_heading} />
        )}

        {slice.variation === "withMediaEmbed" && (
          <>
            <div
              className="aspect-video w-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:aspect-video [&>iframe]:object-cover [&>iframe]:object-center"
              dangerouslySetInnerHTML={{
                __html: slice.primary.video_embed.html || "",
              }}
            />
          </>
        )}
        <PrismicRichText
          field={content}
          components={{
            image: ({ node }) => {
              return (
                <PrismicNextImage
                  field={node}
                  className="h-[480px] w-full object-cover lg:h-[600px]"
                />
              );
            },
            heading2: ({ children }) => (
              <h2 className="font-urbanist text-[28px] leading-[100%] font-light [&>strong]:font-bold tracking-[5%] text-white lg:text-[48px]">
                {children}
              </h2>
            ),

            heading3: ({ children }) => (
              <h2 className="font-urbanist text-[28px] leading-[100%] font-light [&>strong]:font-bold tracking-[5%] text-white lg:text-[44px]">
                {children}
              </h2>
            ),

            paragraph: ({ children }) => (
              <p className="text-base leading-[150%] font-light [&>strong]:font-bold tracking-[0%] text-[#F1F1F1] lg:text-lg">
                {children}
              </p>
            ),
            list: ({ children }) => (
              <ul className="space-y-2 pl-6">{children}</ul>
            ),
            listItem: ({ children }) => (
              <li className="text-base list-disc list-inside leading-[150%] [&>strong]:font-bold font-light tracking-[0%] text-[#F1F1F1] lg:text-lg -indent-6">
                {children}
              </li>
            ),
          }}
        />
      </div>
    </section>
  );
};

export default DentalImplantGuide;
