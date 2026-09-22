import { cn } from "@/lib/utils";

interface HomeRowProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function HomeRow({ label, children, className }: HomeRowProps) {
  return (
    <div className={cn("flex flex-col gap-6 md:flex-row md:gap-12", className)}>
      <div className="shrink-0 font-heading text-2xl font-bold uppercase text-brand-fg md:sticky md:top-28 md:w-[220px] md:self-start">
        {label}
      </div>
      <div className="flex flex-1 flex-col gap-6">{children}</div>
    </div>
  );
}
