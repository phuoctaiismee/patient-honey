import { asLink } from "@prismicio/client";
import {
  CMSHeaderData,
  HeaderData,
  NavigationItem,
  NavigationSubItem,
} from "./types";

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

  // Exact match only - no parent path matching to avoid false positives
  return current === target;
};

/* =====================
   Data Mappers
===================== */

/**
 * Map CMS header data to clean UI props
 * Converts Prismic CMS structure to simple, type-safe props
 */
export const mapHeaderData = (cmsData: CMSHeaderData): HeaderData => {
  const navigations: NavigationItem[] = (cmsData.navigations || []).map(
    (item) => ({
      text: item.link_item?.text || null,
      href: asLink(item.link_item) || null,
      subItems: (item.navigation_sub_items || []).map((sub) => ({
        text: sub.text || null,
        href: asLink(sub) || null,
      })) as NavigationSubItem[],
    }),
  );

  const ctaButton = cmsData.cta_buttons?.[0]
    ? {
        text: cmsData.cta_buttons[0].button?.text || "Book Appointment",
        href: asLink(cmsData.cta_buttons[0].button) || null,
      }
    : null;

  return {
    logo: cmsData.logo || null,
    navigations,
    ctaButton,
  };
};
