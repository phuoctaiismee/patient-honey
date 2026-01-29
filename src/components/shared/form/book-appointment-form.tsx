"use client";

import FormWithMapInfo from "@/components/form/form-with-map-info";
import LabelInput from "@/components/form/label-input";
import LabelSelect from "@/components/form/label-select";
import LabelTextarea from "@/components/form/label-textarea";
import LabelDate from "@/components/form/lebel-date";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const serviceOptions = [
  {
    value: "cleaning",
    label: "Cleaning",
  },
  {
    value: "datal-implants",
    label: "Dental Implants",
  },
  {
    value: "all-on-x",
    label: "All on x",
  },
  {
    value: "same-day-crowns",
    label: "Same Day Crowns",
  },
];

const doctorOptions = [
  {
    value: "dr-james-oh",
    label: "Dr. James Oh",
  },
];

// Form validation schema
const consultationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  isNewPatient: z.string().min(1, "Please select an option"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  service: z.string().min(1, "Please select a service"),
  doctor: z.string().min(1, "Please select a doctor"),
  message: z.string().min(1, "Please provide a message"),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;
interface RequestAppointmentFormProps {
  heading: React.ReactNode;
  contacts: {
    label: string;
    value: string;
  }[];
  office_hours: {
    day: string;
    hours: string;
  }[];
  office_location: {
    latitude: number;
    longitude: number;
  };
  office_name: string;
  button_text: string;
}

const RequestAppointmentForm = ({
  heading,
  contacts,
  office_hours,
  office_location,
  office_name,
  button_text,
}: RequestAppointmentFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      isNewPatient: "true",
      preferredDate: "",
    },
  });

  const handleFormSubmit = async (data: ConsultationFormData) => {
    try {
      console.log({ data });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Appointment request submitted successfully!");
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
      <div className="px-3 pt-12 pb-4 lg:px-12 font-urbanist">{heading}</div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-12 px-3 pt-6 pb-12 lg:px-12"
      >
        <LabelInput
          label="Name"
          placeholder="Enter your name..."
          error={errors.name?.message}
          {...register("name")}
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

        {/* <LabelSelect
          label="Location"
          options={locationOptions}
          error={errors.location?.message}
          {...register('location')}
        /> */}

        <div className="flex w-full items-center justify-between">
          <div className="text-sm leading-4 font-normal tracking-[0.4px]">
            Are You A New Patient
          </div>

          <Controller
            control={control}
            name="isNewPatient"
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="flex items-center gap-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="true" id="new-patient" />
                  <Label htmlFor="new-patient">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="false" id="old-patient" />
                  <Label htmlFor="old-patient">No</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <Controller
            control={control}
            name="preferredDate"
            render={({ field }) => (
              <LabelDate
                label="Preferred Date"
                value={field.value || ""}
                onValueChange={(value) => {
                  field.onChange({ target: { value } });
                }}
                error={errors.preferredDate?.message}
              />
            )}
          />
          <LabelInput
            label="Preferred Time"
            placeholder="e.g., 10:00 AM"
            type="time"
            error={errors.preferredTime?.message}
            {...register("preferredTime")}
          />
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <LabelSelect
                label="Services*"
                options={serviceOptions}
                value={field.value}
                onValueChange={field.onChange}
                error={errors.service?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="doctor"
            render={({ field }) => (
              <LabelSelect
                label="Doctors*"
                options={doctorOptions}
                value={field.value}
                onValueChange={field.onChange}
                error={errors.doctor?.message}
              />
            )}
          />
        </div>

        <LabelTextarea
          label="How May We Help You?*"
          placeholder="Kindly specify the purpose of your visit"
          error={errors.message?.message}
          {...register("message")}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full rounded-[24px]"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </FormWithMapInfo>
  );
};

export default RequestAppointmentForm;
