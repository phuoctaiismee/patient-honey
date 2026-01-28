import HighlightSection from "@/components/shared/highlight-content";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `QualityCareMessage`.
 */
export type QualityCareMessageProps =
  SliceComponentProps<Content.QualityCareMessageSlice>;

/**
 * Component for "QualityCareMessage" Slices.
 */
const QualityCareMessage: FC<QualityCareMessageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HighlightSection
        title={slice.primary.heading}
        coverText={slice.primary.cover_heading}
        description={slice.primary.description}
        {...(slice.variation === "withMedia" && {
          bottomContent: slice.primary.media_content,
        })}
        {...(slice.variation === "withButtons" && {
          bottomCtas: slice.primary.cta_buttons,
        })}
      />
    </section>
  );
};

export default QualityCareMessage;
