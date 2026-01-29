"use client";

import { bg_customers_reviews } from "@/assets";
import { QuoteIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import {
    ImageField,
    KeyTextField,
    LinkField,
    RichTextField,
} from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Review {
  id: string | number;
  content: RichTextField;
  author: KeyTextField;
  author_image: ImageField;
}

const CustomerReviewCarousel = ({
  reviews,
  viewMore,
}: {
  reviews: Review[];
  viewMore?: LinkField;
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col lg:max-h-[800px] lg:flex-row">
      <div className="flex-1">
        <PrismicNextImage
          key={current}
          field={reviews?.[current - 1]?.author_image}
          className="h-[480px] w-full object-cover lg:h-full  animate__animated animate__fadeIn"
        />
      </div>
      <div className="flex-1">
        <div className="relative h-full flex flex-col space-y-25 bg-transparent py-15">
          <Image
            src={bg_customers_reviews}
            alt="Background Customers Reviews"
            width={1200}
            height={1200}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="space-y-8 lg:space-y-15">
            <div className="px-4 lg:px-12">
              <h3 className="font-urbanist text-[28px] leading-[100%] font-light tracking-[5%] lg:text-[48px]">
                Customers <span className="font-semibold">Reviews</span>
              </h3>
            </div>
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {reviews.map((review) => (
                  <CarouselItem
                    key={review.id}
                    className="w-full space-y-8 px-8 lg:px-12"
                  >
                    <QuoteIcon />
                    <PrismicRichText
                      field={review.content}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="text-lg leading-[200%] font-normal tracking-[0%] lg:text-xl">
                            {children}
                          </p>
                        ),
                      }}
                    />
                    <p className="text-lg leading-[200%] font-semibold tracking-[0%] uppercase lg:text-xl">
                      - {review.author}
                    </p>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex-1"/>
          <div className="flex items-center justify-between px-4 lg:px-12">
            {viewMore?.text && (
              <Button className="rounded-[24px]" size="lg">
                <PrismicNextLink field={viewMore}>View more</PrismicNextLink>
              </Button>
            )}
            <div className="flex items-center gap-4">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "size-2 cursor-pointer rounded-full bg-[#FFFFFF1F] transition-all ease-in-out",
                    {
                      "w-[26px] bg-white": current === index + 1,
                    },
                  )}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCarousel;
