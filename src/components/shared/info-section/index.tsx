import GhostTitle from "@/components/shared/ghost-title";
import { LinkField, RichTextField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

interface InfoSectionProps {
  title: RichTextField;
  cardTitle: RichTextField;
  cardDescription: RichTextField;
  cardLink: LinkField;
  infoContent: RichTextField;
}
const InfoSection = ({
  title,
  cardTitle,
  cardDescription,
  cardLink,
  infoContent,
}: InfoSectionProps) => {
  return (
    <div className="relative space-y-8 px-4 py-12 lg:space-y-12 lg:px-30 lg:py-25 bg-linear-to-br from-[#181818]">
      <GhostTitle title={title} />
      <div className="container   mx-auto space-y-[68px]">
        <div className="flex items-center justify-center">
          <PrismicNextLink field={cardLink}>
            <div className="group relative flex h-[260px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-[12px] border-t-2 border-t-[#1089C0] bg-[#303030] px-7 duration-200 ease-in-out transform-content hover:bg-[#1089C0] lg:max-w-[576px] lg:flex-1">
              <DocumentIcon className="pointer-events-none absolute top-0 left-1/2 size-20 -translate-x-1/2 -translate-y-[75%]" />
              <div className="flex flex-col items-center justify-center">
                <PrismicRichText
                  field={cardTitle}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="font-urbanist text-[24px] leading-[45px] font-semibold tracking-[2px] text-[#1089C0] group-hover:text-white lg:text-[32px]">
                        {children}
                      </p>
                    ),
                  }}
                />
                <PrismicRichText
                  field={cardDescription}
                  components={{
                    paragraph: ({ children }) => (
                      <div className="text-center text-lg leading-[150%] font-normal tracking-[0%]">
                        {children}
                      </div>
                    ),
                  }}
                />
              </div>
            </div>
          </PrismicNextLink>
        </div>
        <div className="space-y-3 lg:space-y-6">
          <PrismicRichText
            field={infoContent}
            components={{
              heading2: ({ children }) => (
                <h3 className="font-urbanist text-[28px] leading-[100%] font-light [&>strong]:font-bold tracking-[5%] text-white lg:text-[48px]">
                  {children}
                </h3>
              ),
              paragraph: ({ children }) => (
                <p className="text-base leading-[150%] font-light [&>strong]:font-bold tracking-[0%] text-[#F1F1F1] lg:text-lg">
                  {children}
                </p>
              ),
              listItem: ({ children }) => (
                <li className="text-base list-disc list-inside leading-[150%] font-light [&>strong]:font-bold tracking-[0%] text-[#F1F1F1] lg:text-lg">
                  {children}
                </li>
              ),
            }}
          />
        </div>
      </div>

      <CircleDecoration className="absolute top-0 right-0 z-[-1] lg:block hidden" />
    </div>
  );
};

export default InfoSection;

const DocumentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    fill="none"
    viewBox="0 0 80 80"
    {...props}
  >
    <rect width="80" height="80" fill="#fff" rx="40"></rect>
    <path
      fill="#0F0D15"
      d="M50.358 26.71h5.805a.883.883 0 0 0 .593-1.538l-8.907-8.08a.883.883 0 0 0-1.477.655v5.428a3.78 3.78 0 0 0 3.986 3.535"
    ></path>
    <path
      fill="#0F0D15"
      d="M58.116 28.478h-7.759a5.547 5.547 0 0 1-5.753-5.302v-7.034a.883.883 0 0 0-.883-.884H26.754A5.547 5.547 0 0 0 21 20.56v38.883a5.546 5.546 0 0 0 5.753 5.302h26.493A5.546 5.546 0 0 0 59 59.442v-30.08a.883.883 0 0 0-.884-.884m-22.287.009a3.3 3.3 0 0 1 2.916-2.466l2.43-.009c3.103.232 3.63 3.761 3.12 6.213a4.42 4.42 0 0 1-4.312 3.711c-3.695.059-5.148-4.334-4.154-7.45M31.976 40.39c-.117-1.953 1.932-3.054 3.217-4.118a1.95 1.95 0 0 1 2.43.018 4.08 4.08 0 0 0 3.04.777 3.9 3.9 0 0 0 1.715-.786 1.964 1.964 0 0 1 2.43-.009l1.98 1.564c1.66 1.138 1.174 3.633 1.236 5.338a3.25 3.25 0 0 1-2.227 3.093A19 19 0 0 1 40 47.22a19 19 0 0 1-5.797-.954 3.25 3.25 0 0 1-2.227-3.093zm11.966 11.983a.884.884 0 0 1-1.768 0 .884.884 0 0 1 1.768 0m-12.876-.884H40a.884.884 0 0 1 0 1.768h-8.934a.883.883 0 0 1 0-1.768m17.868 7.07H31.066a.884.884 0 0 1 0-1.768h17.868a.884.884 0 0 1 0 1.768m0-5.302h-2.81a.883.883 0 0 1 0-1.768h2.81a.883.883 0 0 1 0 1.768"
    ></path>
    <path
      fill="#0F0D15"
      d="M34.76 44.587a16.3 16.3 0 0 0 10.48 0 1.48 1.48 0 0 0 1.016-1.414V40.39a1.47 1.47 0 0 0-.565-1.167l-1.98-1.564a.19.19 0 0 0-.238.018 5.57 5.57 0 0 1-6.946 0 .19.19 0 0 0-.239-.018l-1.98 1.564a1.46 1.46 0 0 0-.565 1.167v2.783a1.48 1.48 0 0 0 1.016 1.414M39.584 34.153a2.673 2.673 0 0 0 2.978-2.28c.23-1.707.287-3.848-1.458-4.092h-2.28a1.55 1.55 0 0 0-1.29 1.15c-.548 1.936-.195 4.791 2.05 5.222"
    ></path>
  </svg>
);

const CircleDecoration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="783"
    height="1104"
    fill="none"
    viewBox="0 0 783 1104"
    {...props}
  >
    <g filter="url(#patient-info-circle-decorative-g)">
      <circle cx="676" cy="428" r="526" fill="url(#b)"></circle>
    </g>
    <defs>
      <radialGradient
        id="b"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(90 124 552)scale(526)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#545454"></stop>
        <stop offset="1" stopColor="#141414" stopOpacity="0"></stop>
      </radialGradient>
      <filter
        id="patient-info-circle-decorative-g"
        width="1352"
        height="1352"
        x="0"
        y="-248"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_324_30459"
          stdDeviation="75"
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg>
);
