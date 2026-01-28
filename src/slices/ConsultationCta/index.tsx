import {
  BookAppointmentForm,
  ConsultationForm,
} from "@/components/shared/form";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `ConsultationCta`.
 */
export type ConsultationCtaProps =
  SliceComponentProps<Content.ConsultationCtaSlice>;

/**
 * Component for "ConsultationCTA" Slices.
 */
const ConsultationCta: FC<ConsultationCtaProps> = ({ slice }) => {
  const {
    heading: headingText,
    contacts,
    office_hours,
    office_location,
    office_name,
    button_text,
    form_type,
  } = slice.primary;
  // separate data from cms with UI component
  const heading = (
    <PrismicRichText
      field={headingText}
      components={{
        heading2: ({ children }) => (
          <h3 className="font-urbanist text-[24px] leading-[100%] font-light [&>strong]:font-bold tracking-[5%] text-white lg:text-[24px]">
            {children}
          </h3>
        ),
      }}
    />
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {(form_type === "consultation" || form_type === "get_in_touch") && (
        <ConsultationForm
          heading={heading}
          contacts={contacts as never}
          office_hours={office_hours as never}
          office_location={office_location as never}
          office_name={office_name || ""}
          button_text={button_text || ""}
        />
      )}
      {form_type === "appointment" && (
        <BookAppointmentForm
          heading={heading}
          contacts={contacts as never}
          office_hours={office_hours as never}
          office_location={office_location as never}
          office_name={office_name || ""}
          button_text={button_text || ""}
        />
      )}
    </section>
  );
};

export default ConsultationCta;
