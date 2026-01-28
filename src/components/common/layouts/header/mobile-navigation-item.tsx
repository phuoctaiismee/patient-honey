"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationItem } from "./types";
import { isActiveRoute } from "./utils";

interface MobileNavigationItemProps {
  item: NavigationItem;
  isActive: boolean;
  onClose: () => void;
  openKey: string | null;
  onToggle: (key: string) => void;
}

export const MobileNavigationItem = ({
  item,
  isActive,
  onClose,
  openKey,
  onToggle,
}: MobileNavigationItemProps) => {
  const pathname = usePathname();
  const hasSub = item.subItems.length > 0;
  const itemKey = item.text || "";
  const isOpen = openKey === itemKey;

  if (!hasSub) {
    return (
      <Link
        href={item.href || "#"}
        className={cn(
          "block px-4 py-2.5 text-center text-base leading-[160%] font-normal text-white rounded-md",
          {
            "bg-primary hover:bg-primary": isActive,
          },
        )}
        onClick={onClose}
      >
        {item.text}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={() => onToggle(itemKey)}>
      <CollapsibleTrigger
        className={cn(
          "flex w-full items-center justify-center px-4 py-2.5 text-center text-lg leading-[160%] font-normal tracking-[0px] hover:bg-accent rounded-md cursor-pointer data-",
          {
            "bg-primary hover:bg-primary rounded-t-md rounded-b-none": isOpen,
          },
        )}
      >
        <span>{item.text}</span>
        {isOpen ? (
          <ChevronUp className="size-4" />
        ) : (
          <ChevronDown className="size-4" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-[#575757] rounded-b-md">
        {item.subItems.map((sub) => (
          <Link
            key={sub.text}
            href={sub.href || "#"}
            className={cn(
              "block px-4 py-2.5 text-center text-base leading-[160%] font-normal text-white hover:bg-accent rounded-md",
              {
                "bg-primary hover:bg-primary": isActiveRoute(
                  pathname,
                  sub.href,
                ),
              },
            )}
            onClick={onClose}
          >
            {sub.text}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
