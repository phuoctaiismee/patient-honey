import GhostTitle from "@/components/shared/ghost-title";
import HoverCard from "@/components/shared/hover-card";
import { Button } from "@/components/ui/button";
import {
    ImageField,
    KeyTextField,
    LinkField,
    RichTextField,
} from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

interface CardData {
  id: number;
  title: KeyTextField;
  icon: ImageField;
  link: LinkField;
}

interface CardGridSectionProps {
  title: RichTextField;
  items: CardData[];
  action?: LinkField;
}

const CardGridSection = ({ title, items, action }: CardGridSectionProps) => {
  return (
    <div className="flex flex-col gap-8 bg-[#252525] px-4 py-12 lg:gap-16 lg:px-30 lg:py-25">
      <GhostTitle title={title} />
      <div className="grid grid-cols-1 container   gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <HoverCard
            key={item.id}
            id={item.id}
            title={item.title}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </div>
      {action?.text && (
        <div className="flex w-full items-center justify-center">
          <Button asChild size="lg" className="w-fit rounded-[24px]">
            <PrismicNextLink field={action}>{action.text}</PrismicNextLink>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CardGridSection;
