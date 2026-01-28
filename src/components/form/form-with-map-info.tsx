"use client";

import { Content, GeoPointField, KeyTextField } from "@prismicio/client";
import { LucideClock3, MailIcon, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import MapComponent from "../shared/map";

interface FormWithMapInfoProps {
  children?: React.ReactNode;
  office_location: GeoPointField;
  office_name: KeyTextField;
  office_hours: Content.ConsultationCtaSliceDefaultPrimaryOfficeHoursItem[];
  contacts: Content.ConsultationCtaSliceDefaultPrimaryContactsItem[];
}

const FormWithMapInfo = ({
  children,
  contacts,
  office_hours,
  office_location,
  office_name,
}: FormWithMapInfoProps) => {
  const renderIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MapPin className="size-5 text-white" />;
      case 1:
        return <MailIcon className="size-5 text-white" />;
      case 2:
        return <Phone className="size-5 text-white" />;
      case 3:
        return <LucideClock3 className="size-5 text-white" />;
      default:
        return null;
    }
  };

  const contactRender = () => {
    return contacts.map((contact, index) => (
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        }}
        className="grid grid-cols-1 lg:grid-cols-6 items-start gap-2 lg:gap-[47px]"
      >
        <div className="lg:col-span-2 flex items-center gap-3 lg:gap-6">
          <div className="shrink-0">{renderIcon(index)}</div>
          <span className="text-lg leading-[100%] font-semibold tracking-[5%]">
            {contact.label}
          </span>
        </div>
        <span className="lg:col-span-4 text-lg leading-[100%] font-light tracking-[0.25%]">
          {contact.value}
        </span>
      </motion.div>
    ));
  };

  return (
    <div className="bg-[#161616] px-4 py-12 lg:px-30 lg:py-25">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto flex max-w-[1200px] flex-col rounded-[24px] bg-[#303030] lg:flex-row"
        style={{
          boxShadow: "0px 4px 16px 0px #00000029",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          {children}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:max-w-[460px]"
        >
          <MapComponent
            className="h-[296px] w-full overflow-hidden lg:rounded-tr-[24px]"
            center={[office_location.longitude, office_location.latitude]}
            zoom={8}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
                },
              },
            }}
            className="space-y-8 px-3 pt-6 pb-12 lg:px-6"
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-[22px] leading-[100%] font-medium tracking-[5%] lg:text-[22px]"
            >
              {office_name}
            </motion.h3>
            <div className="space-y-6">
              {contactRender()}

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="flex items-start gap-6"
              >
                <LucideClock3 className="hidden size-5 text-white lg:block" />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-6">
                    <LucideClock3 className="size-6 text-white lg:hidden" />

                    <span className="text-lg leading-[100%] font-semibold tracking-[5%]">
                      Office Hour
                    </span>
                  </div>
                  {office_hours.map((hour, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-6 items-start gap-2 lg:gap-[40px] text-base leading-[200%] font-light tracking-[0.25%]"
                    >
                      <span className="md:col-span-2">{hour.day}</span>
                      <span className="md:col-span-4">{hour.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FormWithMapInfo;
