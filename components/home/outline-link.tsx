import Link from "next/link";
import { cn } from "@/lib/utils";

type OutlineLinkProps = React.ComponentProps<typeof Link> & {
  className?: string;
};

export function OutlineLink({ href, children, className, ...props }: OutlineLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-[5px] border-[3px] border-brand-accent px-6 py-4 text-center font-heading font-bold text-brand-accent transition-colors hover:bg-brand-accent hover:text-brand-bg",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
