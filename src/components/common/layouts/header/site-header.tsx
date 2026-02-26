"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { PrismicNextImage } from "@prismicio/next";
import { Menu, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNavigationItem } from "./mobile-navigation-item";
import { HeaderData, NavigationItem } from "./types";
import { isActiveRoute } from "./utils";

interface SiteHeaderProps {
  data: HeaderData;
}

export const SiteHeader = ({ data }: SiteHeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { logo, navigations, ctaButton } = data;

  console.log({
    navigations,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCollapsibleKey, setOpenCollapsibleKey] = useState<string | null>(
    null,
  );

  const isNavigationActive = (item: NavigationItem): boolean => {
    // For items with subitems, only check if any subitem is active
    // For items without subitems, check if the item itself is active
    if (item.subItems.length > 0) {
      return item.subItems.some((sub) => isActiveRoute(pathname, sub.href));
    }
    return isActiveRoute(pathname, item.href);
  };

  const handleToggleCollapsible = (key: string) => {
    setOpenCollapsibleKey((prev) => (prev === key ? null : key));
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenCollapsibleKey(null);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Auto-open collapsible if a sub-item is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      const activeParent = navigations.find((item) => {
        return (
          item.subItems.length > 0 &&
          item.subItems.some((sub) => isActiveRoute(pathname, sub.href))
        );
      });

      if (activeParent && activeParent.text) {
        setOpenCollapsibleKey(activeParent.text);
      }
    }
  }, [isMobileMenuOpen, navigations, pathname]);

  return (
    <>
      {/* Header - Shared for both Desktop and Mobile */}
      <header className="sticky top-0 z-100 flex h-18 items-center justify-between px-6 lg:h-25 bg-background">
        <Link href="/">
          {logo && (
            <PrismicNextImage
              field={logo}
              className="h-12 w-24"
              width={400}
              height={240}
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu viewport={false} className="hidden lg:block">
          <NavigationMenuList>
            {navigations.map((item) => {
              const isActive = isNavigationActive(item);
              const hasSub = item.subItems.length > 0;

              return (
                <NavigationMenuItem key={item.text}>
                  {hasSub ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn({ "text-primary": isActive })}
                      >
                        {item.text}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-64">
                          {item.subItems.map((sub) => (
                            <li key={sub.text}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={sub.href || "#"}
                                  className={cn({
                                    "text-primary": isActiveRoute(
                                      pathname,
                                      sub.href,
                                    ),
                                  })}
                                >
                                  {sub.text}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link
                        href={item.href || "#"}
                        className={cn({ "text-primary bg-card": isActive })}
                      >
                        {item.text}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA Button */}
        {ctaButton && (
          <Button asChild size="lg" className="hidden lg:flex">
            <Link href={ctaButton.href || "#"}>{ctaButton.text}</Link>
          </Button>
        )}

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="lg:hidden [&_svg:not([class*='size-'])]:size-11"
          size={"icon-lg"}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          {isMobileMenuOpen ? <XIcon /> : <Menu />}
        </Button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "calc(100dvh - 4.5rem)", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-18 right-0 left-0 z-50 flex w-full flex-col overflow-hidden bg-[#303030] lg:hidden"
          >
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
              <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-8">
                {navigations.map((item) => {
                  const isActive = isNavigationActive(item);

                  return (
                    <MobileNavigationItem
                      key={item.text}
                      item={item}
                      isActive={isActive}
                      onClose={handleCloseMobileMenu}
                      openKey={openCollapsibleKey}
                      onToggle={handleToggleCollapsible}
                    />
                  );
                })}
              </nav>
              <div className="bg-[#0F0D15] px-4 pt-4 pb-11">
                {ctaButton && (
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (ctaButton.href) {
                        router.push(ctaButton.href);
                      }
                    }}
                  >
                    {ctaButton.text}
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
