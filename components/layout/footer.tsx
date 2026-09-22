import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Pixel Games Studios", href: "/team" },
  { label: "It's a Conspiracy Game", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "X", href: "https://x.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Twitch", href: "https://twitch.tv" },
  { label: "Discord", href: "https://discord.com" },
];

export function Footer() {
  return (
    <footer className="bg-brand-bg">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 pt-10 pb-14 sm:px-10">
        <Image
          src="/images/home/footer-plug.svg"
          alt=""
          aria-hidden
          width={1387}
          height={14}
          className="h-auto w-full max-w-5xl"
        />

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-space text-sm text-white">
          {footerLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="hover:underline">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src="/images/home/social-icon.svg"
                alt={label}
                width={24}
                height={24}
                className="size-6"
              />
            </Link>
          ))}
        </div>

        <p className="font-space text-sm text-white">
          Boundless Gamers &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
