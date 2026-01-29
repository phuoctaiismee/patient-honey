"use client";

import MapComponent from "@/components/shared/map";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useMemo } from "react";
import { FooterData } from "./types";

const shouldHideFooterHeaderPaths = ["/contact", "/book-appointment"];

interface SiteFooterProps {
  data: FooterData;
}

const SiteFooter = ({ data }: SiteFooterProps) => {
  const pathname = usePathname();
  const {
    logo,
    socialLinks,
    primaryCta,
    clinicName,
    mapLocation,
    secondaryCta,
    contactLabel,
    contacts,
    navigationLabel,
    topFooterContacts,
    officeHours,
    officeHoursIcon,
    officeHoursLabel,
    navigations,
    subNavigations,
    copyRight,
  } = data;

  const shouldHideFooterHeader = useMemo(() => {
    return shouldHideFooterHeaderPaths.includes(pathname);
  }, [pathname]);

  return (
    <div className="overflow-hidden">
      <footer className="flex flex-col gap-25 container py-20">
        {!shouldHideFooterHeader && (
          <>
            <div className="w-full mx-auto flex flex-col gap-[60] lg:flex-row">
              <MapComponent
                className="h-[366px] lg:h-auto lg:flex-1"
                center={[
                  mapLocation?.longitude || -111.8651523,
                  mapLocation?.latitude || 33.7422526,
                ]}
                zoom={18}
              />
              <div className="flex-1 space-y-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                  <h3 className="text-[28px] font-urbanist leading-[100%] font-medium tracking-[5%] lg:text-[40px]">
                    {clinicName}
                  </h3>

                  <Button size="lg" className="w-fit" asChild>
                    <Link href={secondaryCta?.href || "#"}>
                      {secondaryCta?.text}
                    </Link>
                  </Button>
                </div>
                <Separator className="lg:border-2 border-[#4A4754]" />
                <div className="space-y-6">
                  {topFooterContacts.map((item) => (
                    <div
                      className="grid grid-cols-1 lg:grid-cols-4 gap-2"
                      key={item.label}
                    >
                      <div className="flex items-center gap-6">
                        <Image
                          src={item.icon || ""}
                          alt={item.label || "icon"}
                          width={24}
                          height={24}
                        />
                        <span className="text-xl leading-[100%] font-semibold tracking-[5%]">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-lg leading-[100%] font-light tracking-[0.25%] lg:col-span-3">
                        {item.value}
                      </span>
                    </div>
                  ))}

                  <div className="flex items-start gap-6">
                    {officeHoursIcon && (
                      <Image
                        src={officeHoursIcon || ""}
                        alt="office hours icon"
                        width={24}
                        height={24}
                        className="hidden lg:block"
                      />
                    )}

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-6">
                        {officeHoursIcon && (
                          <Image
                            src={officeHoursIcon || ""}
                            alt="office hours icon"
                            width={24}
                            height={24}
                            className="lg:hidden"
                          />
                        )}

                        <span className="text-xl leading-[100%] font-semibold tracking-[5%]">
                          {officeHoursLabel || "Office Hour"}
                        </span>
                      </div>
                      <div className="grid grid-cols-[auto_auto] gap-x-4">
                        {officeHours?.map((item, index) => (
                          <Fragment key={index}>
                            <span className="text-lg leading-[200%] font-light tracking-[0.25%]">
                              {item.day}:
                            </span>
                            <span className="text-lg leading-[200%] font-light tracking-[0.25%]">
                              {item.isClosed
                                ? "CLOSED"
                                : `${item.openTime} – ${item.closeTime}`}
                            </span>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="lg:border-2 border-[#4A4754]" />
          </>
        )}
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center gap-15 lg:flex-row">
            {/* left */}
            <div className="flex flex-col items-center justify-center gap-8">
              <Link href="/">
                {logo && (
                  <Image
                    src={logo}
                    alt="Logo"
                    className="w-[200px] h-[-128.36px] text-primary"
                    width={200}
                    height={128}
                  />
                )}
              </Link>
              <div className="flex items-center gap-3">
                {socialLinks.map((item, index) => (
                  <Button key={index} className="size-15" variant="ghost">
                    <Image
                      src={item.icon.url || ""}
                      alt={`Social Icon ${index + 1}`}
                      width={32}
                      height={32}
                      className="object-contain size-8"
                    />
                  </Button>
                ))}
              </div>
              {primaryCta && (
                <Button className="rounded-[24px]" size="lg" asChild>
                  <Link href={primaryCta.href || "#"}>{primaryCta.text}</Link>
                </Button>
              )}
            </div>
            {/* right */}
            <div className="relative flex-1 space-y-15">
              {/* decoration */}
              <svg
                width="1265"
                height="1265"
                viewBox="0 0 1265 1265"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_923_1618)">
                  <circle
                    cx="632.5"
                    cy="632.5"
                    r="332.5"
                    fill="url(#paint0_radial_923_1618)"
                    fillOpacity="0.5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_923_1618"
                    x="0"
                    y="0"
                    width="1265"
                    height="1265"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="150"
                      result="effect1_foregroundBlur_923_1618"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_923_1618"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(632.5 632.5) rotate(90) scale(332.5)"
                  >
                    <stop stopColor="#4D4D4D" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              <div className="space-y-6">
                <h3 className="font-urbanist text-[26px] leading-[100%] font-bold tracking-[5%]">
                  {contactLabel}
                </h3>
                <div className="flex flex-1 flex-col items-start gap-4.5 md:flex-row md:justify-between">
                  {contacts.map((item, index) => (
                    <div className="space-y-3" key={index}>
                      <div className="text-xl leading-[100%] font-normal tracking-[5%]">
                        {item.label}
                      </div>
                      <div className="tracing-[5%] text-base  font-light">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-urbanist text-[26px] leading-[100%] font-bold tracking-[5%]">
                  {navigationLabel}
                </h3>
                <div className="flex flex-col items-start gap-4.5 lg:flex-row md:justify-between">
                  <div className="flex flex-col gap-2">
                    {navigations.slice(0, 8).map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.text}
                          href={link.href || "#"}
                          className={cn(
                            "text-xl leading-[160%] font-normal whitespace-nowrap tracking-[0px]",
                            {
                              "text-primary": isActive,
                            },
                          )}
                        >
                          {link.text}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="flex flex-col gap-2">
                    {subNavigations.slice(0, 8).map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.text}
                          href={link.href || "/"}
                          className={cn(
                            "text-base leading-[160%] font-light tracking-[0px]",
                            {
                              "text-primary": isActive,
                            },
                          )}
                        >
                          {link.text}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="flex flex-col gap-2">
                    {subNavigations.slice(8, 16).map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.text}
                          href={link.href || "#"}
                          className={cn(
                            "text-base leading-[160%] font-light tracking-[0px]",
                            {
                              "text-primary": isActive,
                            },
                          )}
                        >
                          {link.text}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="flex flex-col gap-2">
                    {subNavigations.slice(16).map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.text}
                          href={link.href || "#"}
                          className={cn(
                            "text-base leading-[160%] font-light tracking-[0px]",
                            {
                              "text-primary": isActive,
                            },
                          )}
                        >
                          {link.text}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-base font-normal tracking-[5%]">
            {copyRight}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteFooter;
