import { ImageField } from "@prismicio/client";
import React from "react";

export interface FooterData {
  logo: string | null;
  socialLinks: {
    icon: ImageField<never>;
    href: string | null;
  }[];
  primaryCta: {
    text: string;
    href: string | null;
  } | null;
  secondaryCta: {
    text: string;
    href: string | null;
  } | null;
  contactLabel: string | null;
  contacts: {
    label: string | null;
    value: string | null;
  }[];
  navigationLabel: string | null;
  navigations: {
    text: string | null;
    href: string | null;
  }[];
  subNavigations: {
    text: string | null;
    href: string | null;
  }[];
  copyRight: React.ReactNode;
  clinicName: string | null;
  officeHoursIcon: string | null;
  officeHoursLabel: string | null;
  officeHours: {
    day: string | null;
    openTime: string | null;
    closeTime: string | null;
    isClosed: boolean;
  }[];
  mapLocation: {
    latitude: number | null;
    longitude: number | null;
  };
  topFooterContacts: {
    icon: string | null;
    label: string | null;
    value: string | null;
  }[];
}
