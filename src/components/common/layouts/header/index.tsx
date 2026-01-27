"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { createClient } from "@/prismicio";
import { asLink } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, ChevronUp, Menu, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

/* =======================
   Routing helpers
======================= */

const normalizePath = (path?: string | null) =>
  path ? path.replace(/\/$/, "") : "";

const isActiveRoute = (pathname: string, href?: string | null) => {
  if (!href) return false;

  const current = normalizePath(pathname);
  const target = normalizePath(href);

  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
};

const useNavigationActive = (pathname: string) => {
  return (item: any) => {
    const parentHref = asLink(item.link_item);

    const isActive =
      isActiveRoute(pathname, parentHref) ||
      item.navigation_sub_items?.some((sub: any) =>
        isActiveRoute(pathname, asLink(sub)),
      );

    return { isActive };
  };
};

/* =======================
   Data
======================= */

const fetchHeader = async () => {
  const client = createClient();
  return client.getSingle("header");
};

/* =======================
   Component
======================= */

const SiteHeader = () => {
  const pathname = usePathname();
  const resolveActive = useNavigationActive(pathname);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCollapsibles, setOpenCollapsibles] = useState<
    Record<string, boolean>
  >({});

  const { data, isLoading } = useQuery({
    queryKey: ["header"],
    queryFn: fetchHeader,
  });

  const { logo, navigations, cta_buttons } = useMemo(
    () => ({
      logo: data?.data.logo ?? null,
      navigations: data?.data.navigations ?? [],
      cta_buttons: data?.data.cta_buttons ?? [],
    }),
    [data],
  );

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  if (isLoading) {
    return (
      <header className="sticky top-0 z-100 flex h-18 items-center justify-between px-6 lg:h-25 bg-background">
        <Skeleton className="h-[51.35px] w-20 text-primary lg:h-[70.6px] lg:w-27.5" />
        <div className="hidden md:flex items-center gap-2">
          <Skeleton className="h-8 w-28 rounded-md" />
          <Skeleton className="h-8 w-28 rounded-md" />
          <Skeleton className="h-8 w-28 rounded-md" />
          <Skeleton className="h-8 w-28 rounded-md" />
          <Skeleton className="h-8 w-28 rounded-md" />
        </div>
        <Skeleton className="size-11 md:h-10 md:w-28 rounded-md" />
      </header>
    );
  }

  return (
    <>
      {/* ================= Desktop Header ================= */}
      <header className="sticky top-0 z-100 flex h-18 items-center justify-between px-6 lg:h-25 bg-background">
        <Link href="/">
          <PrismicNextImage field={logo} className="h-12 w-24" />
        </Link>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            {navigations.map((item) => {
              const { isActive } = resolveActive(item);
              const hasSub = item.navigation_sub_items?.length > 0;

              return (
                <NavigationMenuItem key={item.link_item.text}>
                  {hasSub ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn({ "text-primary": isActive })}
                      >
                        {item.link_item.text}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-64">
                          {item.navigation_sub_items.map((sub: any) => {
                            const subHref = asLink(sub);
                            return (
                              <li key={sub.text}>
                                <NavigationMenuLink asChild>
                                  <PrismicNextLink
                                    field={sub}
                                    className={cn({
                                      "text-primary": isActiveRoute(
                                        pathname,
                                        subHref,
                                      ),
                                    })}
                                  >
                                    {sub.text}
                                  </PrismicNextLink>
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <PrismicNextLink
                        field={item.link_item}
                        className={cn({ "text-primary bg-card": isActive })}
                      >
                        {item.link_item.text}
                      </PrismicNextLink>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {cta_buttons?.length > 0 && (
          <PrismicNextLink
            field={cta_buttons[0].button}
            className={cn(
              buttonVariants({ variant: "default" }),
              "hidden lg:flex",
            )}
          >
            Book Appointment
          </PrismicNextLink>
        )}

        <Button
          variant="ghost"
          className="lg:hidden [&_svg:not([class*='size-'])]:size-11"
          size={"icon-lg"}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          {isMobileMenuOpen ? <XIcon /> : <Menu />}
        </Button>
      </header>

      {/* ================= Mobile Menu ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "calc(100dvh - 4.5rem)", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-18 right-0 left-0 z-50 flex w-full flex-col overflow-hidden bg-[#303030] lg:hidden"
          >
            <nav className="p-6">
              {navigations.map((item) => {
                const { isActive } = resolveActive(item);
                const hasSub = item.navigation_sub_items?.length > 0;

                return hasSub ? (
                  <Collapsible key={item.link_item.text}>
                    <CollapsibleTrigger className="flex w-full items-center justify-center px-4 py-2.5 text-center text-lg leading-[160%] font-normal tracking-[0px] hover:bg-accent">
                      <span className={cn({ "text-primary": isActive })}>
                        {item.link_item.text}
                      </span>
                      {openCollapsibles[item.link_item.text!] ? (
                        <ChevronUp className="size-4" />
                      ) : (
                        <ChevronDown className="size-4" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {item.navigation_sub_items.map((sub: any) => (
                        <PrismicNextLink
                          key={sub.text}
                          field={sub}
                          className={cn(
                            "block px-4 py-2.5 text-center text-base leading-[160%] font-normal text-white hover:bg-accent rounded-md",
                            {
                              "bg-accent": isActiveRoute(pathname, asLink(sub)),
                            },
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.text}
                        </PrismicNextLink>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <PrismicNextLink
                    key={item.link_item.text}
                    field={item.link_item}
                    className={cn(
                      "block px-4 py-2.5 text-center text-base leading-[160%] font-normal text-white rounded-md",
                      {
                        "bg-accent": isActive,
                      },
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.link_item.text}
                  </PrismicNextLink>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SiteHeader;
