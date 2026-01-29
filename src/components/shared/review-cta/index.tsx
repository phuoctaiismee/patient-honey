import Image from "next/image";
import React from "react";

type ReviewCTASectionProps = {
  subheading?: string;
  heading?: string;
  bgImage?: string;
  platforms?: {
    icon?: string;
    count?: string;
    description?: string;
  }[];
};

const ReviewCTASection: React.FC<ReviewCTASectionProps> = ({
  subheading,
  heading,
  bgImage,
  platforms,
}) => {
  return (
    <div className="flex relative min-h-[620px] space-y-12 bg-[#161616] bg-cover bg-no-repeat px-4 py-12 lg:items-center lg:justify-center lg:px-30 lg:py-25">
      <Image
        src={bgImage || ""}
        alt="bg_reviews_statistics"
        fill
        className="absolute object-cover object-top inset-0 z-0"
      />
      <div className="relative container   h-[312px] w-full bg-[#63636314] px-8 pt-20 shadow-[inset_0px_0px_48px_#FFFFFF40] rounded-md backdrop-blur-[10px] lg:px-20">
        <div className="space-y-1">
          <div
            className="text-center font-urbanist text-xl leading-[100%] font-light tracking-[5%] lg:text-[40px]"
            style={{
              border: "4px solid",
              borderImageSource:
                "linear-gradient(90deg, rgba(0, 0, 0, 0.12) 0%, rgba(102, 102, 102, 0.12) 100%)",
            }}
          >
            {subheading}
          </div>
          <div className="text-center font-urbanist text-xl leading-[100%] font-bold tracking-[5%] lg:text-[40px]">
            {heading}
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 flex w-full max-w-[300px] -translate-x-1/2 translate-y-[70%] flex-col items-center gap-8 lg:max-w-[860px] lg:translate-y-1/2 lg:flex-row">
          {platforms?.map((platform, index) => (
            <div
              key={index}
              className="group relative flex h-30! w-full flex-col items-center justify-center gap-2 rounded-[12px] border-t-2 border-t-[#1089C0] bg-[#0F0D15] duration-200 ease-in-out transform-content hover:bg-[#1089C0] lg:flex-1"
            >
              <Image
                src={platform.icon || ""}
                alt="platform"
                className="absolute top-0 left-1/2 flex size-[45px] -translate-x-1/2 -translate-y-[60%] items-center justify-center rounded-full"
                width={45}
                height={45}
              />
              <div className="flex flex-col items-center justify-center">
                <div className="font-urbanist text-[44px] leading-[45px] font-semibold tracking-[2px] text-[#1089C0] group-hover:text-white">
                  {platform.count}
                </div>
                <div className="text-lg leading-[150%] font-normal tracking-[0%]">
                  {platform.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCTASection;
