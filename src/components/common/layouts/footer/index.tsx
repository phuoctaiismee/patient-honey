"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { createClient } from "@/prismicio";
import { asLink } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const fetchFooter = async () => {
  const client = createClient();
  return client.getSingle("footer");
};

const SiteFooter = () => {
  const pathname = usePathname();
  const { data, isLoading } = useQuery({
    queryKey: ["footer"],
    queryFn: fetchFooter,
  });

  const {
    logo,
    navigations,
    contact_label,
    contacts_data,
    copyright,
    navigation_label,
    primary_cta,
    social_links,
  } = useMemo(() => {
    const parentChilds = data?.data.navigations.map((nav) => nav.link_item);
    const childParent = data?.data.navigations.flatMap(
      (nav) => nav.sublink_items,
    );
    return {
      logo: data?.data.logo ?? null,
      social_links: data?.data.social_links ?? [],
      primary_cta: data?.data.primary_cta ?? null,
      contact_label: data?.data.contact_label ?? null,
      contacts_data: data?.data.contacts ?? [],
      navigation_label: data?.data.navigation_label ?? null,
      navigations: {
        parent: parentChilds ?? [],
        child: childParent ?? [],
      },
      copyright: data?.data.copyright_text ?? null,
    };
  }, [data]);

  return (
    <div className="overflow-hidden">
      <footer className="flex flex-col gap-25 container py-20">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center gap-15 lg:flex-row">
            {/* left */}
            <div className="flex flex-col items-center justify-center gap-8">
              <Link href="/">
                <PrismicNextImage
                  field={logo}
                  className="w-[200px[ h-[-128.36px] text-primary"
                />
              </Link>
              <div className="flex items-center gap-3">
                {social_links.map((item, index) => (
                  <Button key={index} className="size-15" variant="ghost">
                    <PrismicNextLink field={item.link} className="shrink-0">
                      <PrismicNextImage
                        field={item.icon}
                        className="size-8 object-contain"
                      />
                    </PrismicNextLink>
                  </Button>
                ))}
              </div>
              {primary_cta?.text && (
                <Button className="rounded-[24px]" size="lg">
                  <PrismicNextLink field={primary_cta}>
                    {primary_cta?.text}
                  </PrismicNextLink>
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
                <h3 className="text-[26px] leading-[100%] font-bold tracking-[5%]">
                  {contact_label}
                </h3>
                <div className="flex flex-1 flex-col items-start gap-4.5 md:flex-row md:justify-between">
                  {contacts_data.map((item, index) => (
                    <div className="space-y-3" key={index}>
                      <div className="text-xl leading-[100%] font-normal tracking-[5%]">
                        {item.label}
                      </div>
                      <div className="tracing-[5%] text-base  font-light">
                        {item.contact_value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-[26px] leading-[100%] font-bold tracking-[5%]">
                  {navigation_label}
                </h3>
                <div className="flex flex-col items-start gap-4.5 lg:flex-row md:justify-between">
                  <div className="flex flex-col gap-2">
                    {navigations.parent.slice(0, 8).map((link) => {
                      const isActive = pathname === asLink(link);
                      return (
                        <PrismicNextLink
                          key={link.text}
                          field={link}
                          className={cn(
                            "text-xl leading-[160%] font-normal whitespace-nowrap tracking-[0px]",
                            {
                              "text-primary": isActive,
                            },
                          )}
                        >
                          {link.text}
                        </PrismicNextLink>
                      );
                    })}
                  </div>
                  <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {navigations.child.map((item, index) => (
                      <li key={index}>
                        <PrismicNextLink
                          field={item}
                          className="text-base leading-[160%] font-light tracking-[0px]"
                        >
                          {item.text}
                        </PrismicNextLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-base font-normal tracking-[5%]">
            <PrismicRichText
              field={copyright}
              components={{
                paragraph: ({ children }) => <p>{children}</p>,
                hyperlink: ({ children }) => (
                  <Link href={'/'} className="text-primary">{children}</Link>
                )
              }}
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteFooter;
