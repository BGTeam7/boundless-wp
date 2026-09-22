"use client";

// React and Next Imports
import * as React from "react";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Utility Imports
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

// Component Imports
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";

import { mainMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="w-10 border-white/20 px-0 text-brand-fg hover:bg-white/10 hover:text-brand-fg focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="border-white/10 bg-brand-bg">
        <SheetHeader>
          <SheetTitle className="text-left">
            <MobileLink href="/" onOpenChange={setOpen}>
              <Image
                src="/images/home/logo.svg"
                alt={siteConfig.site_name}
                width={170}
                height={72}
                className="h-9 w-auto"
              />
            </MobileLink>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-10 flex flex-col gap-6">
          {mainMenu.map(({ label, href }) => (
            <MobileLink
              key={href}
              href={href}
              onOpenChange={setOpen}
              className="font-heading text-lg font-bold text-brand-fg"
            >
              {label}
            </MobileLink>
          ))}
          <MobileLink
            href="/donate"
            onOpenChange={setOpen}
            className="mt-2 inline-flex w-fit items-center justify-center rounded-[5px] bg-brand-donate px-6 py-3 font-heading font-bold text-white shadow-[5px_5px_0px_0px_var(--color-brand-magenta)]"
          >
            DONATE
          </MobileLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
