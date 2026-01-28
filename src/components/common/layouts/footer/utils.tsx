import { asLink } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { FooterDocumentData, Simplify } from "../../../../../prismicio-types";
import { FooterData } from "./types";

/* =====================
   Routing Helpers
===================== */

/**
 * Normalize a path by removing trailing slashes
 */
export const normalizePath = (path?: string | null): string => {
  return path ? path.replace(/\/$/, "") : "";
};

/**
 * Check if a route is active based on the current pathname
 */
export const isActiveRoute = (
  pathname: string,
  href?: string | null,
): boolean => {
  if (!href) return false;

  const current = normalizePath(pathname);
  const target = normalizePath(href);

  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
};

/* =====================
   Data Mappers
===================== */

/**
 * Map CMS header data to clean UI props
 * Converts Prismic CMS structure to simple, type-safe props
 */
export const mapFooterData = (
  cmsData: Simplify<FooterDocumentData>,
): FooterData => {
  const socialLinks =
    cmsData.social_links?.map((item) => ({
      icon: item?.icon,
      href: asLink(item.link) || null,
    })) || [];

  const primaryCta = cmsData.primary_cta
    ? {
        text: cmsData.primary_cta.text || "Book Appointment",
        href:
          cmsData.primary_cta?.link_type === "Document"
            ? asLink(cmsData.primary_cta) || null
            : null,
      }
    : null;

  const secondaryCta = cmsData.secondary_cta
    ? {
        text: cmsData.secondary_cta.text || "Learn More",
        href:
          cmsData.secondary_cta?.link_type === "Document"
            ? asLink(cmsData.secondary_cta) || null
            : null,
      }
    : null;

  const contacts =
    cmsData.contacts?.map((contact) => ({
      label: contact.label || null,
      value: contact.contact_value || null,
    })) || [];

  const navigations = (cmsData.navigations || []).map((item) => ({
    text: item.link_item?.text || null,
    href: asLink(item.link_item) || null,
  }));

  const subNavigations = (cmsData.navigations || []).flatMap((item) =>
    item.sublink_items.map((sub) => ({
      text: sub.text || null,
      href: sub.link_type === "Document" ? asLink(sub) || null : null,
    })),
  );

  const copyRight = (
    <PrismicRichText
      field={cmsData.copyright_text}
      components={{
        paragraph: ({ children }) => <p>{children}</p>,
        hyperlink: ({ children }) => (
          <Link href={"/"} className="text-primary">
            {children}
          </Link>
        ),
      }}
    />
  );

  const officeHours =
    (cmsData.office_hours || []).map((item) => ({
      day: item.day || null,
      openTime: item.open_time || null,
      closeTime: item.close_time || null,
      isClosed: item.is_closed || false,
    })) || [];

  const topFooterContacts =
    (cmsData.top_footer_contacts || []).map((contact) => ({
      icon: contact.icon.url || null,
      label: contact.label || null,
      value: contact.value || null,
    })) || [];

  return {
    logo: cmsData.logo?.url || null,
    socialLinks,
    primaryCta,
    secondaryCta,
    contactLabel: cmsData.contact_label || null,
    contacts,
    navigationLabel: cmsData.navigation_label || null,
    navigations,
    subNavigations,
    copyRight,
    clinicName: cmsData.clinic_name || null,
    officeHoursIcon: cmsData.office_hours_icon?.url || null,
    officeHoursLabel: cmsData.office_hours_label || null,
    officeHours,
    mapLocation: {
      latitude: cmsData.map_location?.latitude || null,
      longitude: cmsData.map_location?.longitude || null,
    },
    topFooterContacts,
  };
};
