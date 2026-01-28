import { ImageField, LinkField } from "@prismicio/client";

/* =====================
   CMS Types (Prismic)
===================== */

// Note: Using LinkField directly as Prismic returns it that way
export interface CMSNavigationItem {
  link_item: LinkField;
  navigation_sub_items?: LinkField[];
}

export interface CMSCTAButton {
  button: LinkField;
}

export interface CMSHeaderData {
  logo: ImageField;
  navigations: CMSNavigationItem[];
  cta_buttons?: CMSCTAButton[];
}

/* =====================
   UI Types (Clean Props)
===================== */

export interface NavigationSubItem {
  text: string | null;
  href: string | null;
}

export interface NavigationItem {
  text: string | null;
  href: string | null;
  subItems: NavigationSubItem[];
}

export interface CTAButton {
  text: string | null;
  href: string | null;
}

export interface HeaderData {
  logo: ImageField | null;
  navigations: NavigationItem[];
  ctaButton: CTAButton | null;
}
