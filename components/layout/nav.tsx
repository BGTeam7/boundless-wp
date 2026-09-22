import { MobileNav } from "@/components/nav/mobile-nav";
import { mainMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface NavProps {
  className?: string;
  id?: string;
}

export function Nav({ className, id }: NavProps) {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-brand-bg border-b border-white/10",
        className,
      )}
      id={id}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/home/logo.svg"
            alt={siteConfig.site_name}
            width={170}
            height={72}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {mainMenu.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center gap-1.5 font-heading font-bold text-brand-fg"
            >
              <span>{label}</span>
              <span className="h-[3px] w-0 bg-gradient-to-l from-brand-blue to-brand-pink transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="hidden shrink-0 rounded-[5px] bg-brand-donate px-6 py-3 font-heading font-bold text-white shadow-[5px_5px_0px_0px_var(--color-brand-magenta)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            DONATE
          </Link>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
