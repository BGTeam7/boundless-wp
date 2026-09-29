"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { OutlineLink } from "@/components/home/outline-link";

interface OpenPositionProps {
  title: string;
  description: string;
  href: string;
}

export function OpenPosition({ title, description, href }: OpenPositionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col gap-[30px] rounded-[5px] bg-white/10 p-[30px]">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex items-center gap-2 text-left font-sans text-xl text-white"
      >
        {title}
        <ChevronDown
          className={cn(
            "size-4 text-white transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <div className="flex w-full items-start gap-7">
          <p className="flex-1 whitespace-pre-wrap text-xl text-white">
            {description}
          </p>
          <OutlineLink
            href={href}
            className="w-[208px] shrink-0 px-5 py-5 text-xl"
          >
            LEARN MORE
          </OutlineLink>
        </div>
      )}
    </div>
  );
}
