"use client";

import FormWithMapInfo from "@/components/form/form-with-map-info";
import LabelInput from "@/components/form/label-input";
import LabelSelect from "@/components/form/label-select";
import LabelTextarea from "@/components/form/label-textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

// Form validation schema
const consultationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(1, "Please select a location"),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;
interface ConsultationFormProps extends Content.ConsultationCtaSlice {}
const ConsultationForm = ({ primary }: ConsultationFormProps) => {
  const {
    heading,
    contacts,
    button_text,
    form_type,
    office_hours,
    office_location,
    office_name,
  } = primary;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const locationOptions = [
    {
      value: "10031 E Dynamite Blvd Suite 200 Scottsdale, AZ 85262",
      label: "10031 E Dynamite Blvd Suite 200 Scottsdale, AZ 85262",
    },
  ];

  const handleFormSubmit = async (data: ConsultationFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Consultation request submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <FormWithMapInfo
      contacts={contacts}
      office_hours={office_hours}
      office_location={office_location}
      office_name={office_name}
    >
      <div className="px-3 pt-12 pb-4 lg:px-12">
        <PrismicRichText
          field={heading}
          components={{
            heading2: ({ children }) => (
              <h3 className="font-urbanist text-[24px] leading-[100%] font-light [&>strong]:font-bold tracking-[5%] text-white lg:text-[24px]">
                {children}
              </h3>
            ),
          }}
        />
      </div>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-12 px-3 pt-6 pb-12 lg:px-12"
      >
        <LabelInput
          label="First Name"
          placeholder="Enter your first name..."
          error={errors.firstName?.message}
          {...register("firstName")}
        />

        <LabelInput
          label="Last Name"
          placeholder="Enter your last name..."
          error={errors.lastName?.message}
          {...register("lastName")}
        />

        <LabelInput
          label="Phone Number"
          placeholder="Enter your phone number..."
          error={errors.phoneNumber?.message}
          {...register("phoneNumber")}
        />

        <LabelInput
          label="Email Address"
          type="email"
          placeholder="example@gmail.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <Controller
          control={control}
          name="location"
          render={({ field }) => (
            <LabelSelect
              label="Location"
              options={locationOptions}
              value={field.value}
              onValueChange={field.onChange}
              error={errors.location?.message}
            />
          )}
        />

        <LabelTextarea
          label="Message"
          placeholder="Write a Comment"
          error={errors.message?.message}
          {...register("message")}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full rounded-[24px]"
        >
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            button_text
          )}
        </Button>
      </form>
    </FormWithMapInfo>
  );
};

export default ConsultationForm;
