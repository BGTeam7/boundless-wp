import Image from "next/image";

import { HomeRow } from "@/components/home/home-row";
import { OutlineLink } from "@/components/home/outline-link";

export default function Home() {
  return (
    <main
      className="text-brand-fg"
      style={{
        backgroundImage:
          "linear-gradient(134deg, #b2054e 0%, #111111 18%, #111111 65%, #004be8 100%)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 py-20 sm:px-10 md:gap-32 md:py-28">
        {/* Hero */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <h1 className="font-heading font-bold uppercase leading-none">
            <span className="block text-4xl sm:text-5xl">Spreading</span>
            <span className="block text-6xl sm:text-8xl">Happiness</span>
            <span className="block text-2xl sm:text-4xl">
              one game at a time
            </span>
          </h1>
          <Image
            src="/images/home/notebook.png"
            alt="Boundless Gamers notebook"
            width={300}
            height={300}
            className="size-48 shrink-0 sm:size-64"
            priority
          />
        </div>

        {/* Mission */}
        <HomeRow label="Mission">
          <p className="text-lg text-brand-muted">
            At Boundless Gamers, we are redefining what gaming can do beyond
            entertainment. By using gameplay as a force for good, we build
            community, strengthen health and well-being, and improve lives
            worldwide.{" "}
            <span className="font-bold text-brand-fg">
              Together, we play it forward.
            </span>
          </p>
        </HomeRow>

        {/* Who We Are */}
        <HomeRow label="Who We Are">
          <p className="text-lg text-brand-muted">
            Boundless Gamers is a registered 501(c)(3) nonprofit organization
            on a mission to change how the world sees video games. For
            decades, gaming has been misunderstood, too often viewed as
            escapism or isolation rather than what it truly is - a powerful
            tool for healing, resilience, and human connection.
          </p>
          <p className="text-lg text-brand-muted">
            Our work challenges gaming misconceptions head-on, showing that
            play is a transformative experience that teaches and unites. From
            helping children cope with long hospital stays, to supporting
            veterans living with Post Traumatic Stress Disorder (PTSD),
            gaming forges community among those experiencing isolation,
            proving that it can be a powerful force for mental health,
            recovery, and community well-being.
          </p>
          <OutlineLink href="/team" className="w-full sm:w-fit sm:min-w-[300px]">
            OUR TEAM
          </OutlineLink>
        </HomeRow>

        {/* Upcoming Projects */}
        <HomeRow label="Upcoming Projects">
          <p className="text-lg text-brand-muted">
            Join our pink feathered friend, Mingo, in uncovering the biggest
            conspiracy that lies beneath every video game that has ever
            existed... currently in development by our studio, Pixel Games
            Studios.
          </p>
          <Image
            src="/images/home/conspiracy-art.svg"
            alt="It's a Conspiracy - upcoming game"
            width={740}
            height={207}
            className="h-auto w-full max-w-2xl"
          />
          <OutlineLink href="#" className="w-full sm:w-fit sm:min-w-[300px]">
            SEE FIRST LOOK
          </OutlineLink>
        </HomeRow>

        {/* Want Updates */}
        <HomeRow label="Want Updates?">
          <p className="text-lg text-brand-muted">
            Catch us live on Twitch for our weekly talk show every Saturday
            at 7PM EST! Updates will also be available via our community
            Discord.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <OutlineLink href="https://twitch.tv" target="_blank" className="flex-1">
              TWITCH
            </OutlineLink>
            <OutlineLink href="https://discord.com" target="_blank" className="flex-1">
              DISCORD
            </OutlineLink>
          </div>
        </HomeRow>

        {/* Support Us */}
        <HomeRow label="Support Us!">
          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <Image
              src="/images/home/support-us.png"
              alt="Boundless Gamers mascot"
              width={233}
              height={230}
              className="size-48 shrink-0 rounded-[5px] object-cover sm:size-56"
            />
            <div className="flex flex-1 flex-col gap-6">
              <p className="text-lg text-brand-muted">
                Interested in contributing on an individual level? Learn more
                about donations and our volunteer positions here!
              </p>
              <OutlineLink href="/get-involved" className="w-full">
                GET INVOLVED
              </OutlineLink>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-4">
            <p className="text-lg text-brand-muted">
              Are you an organization/creator looking to partner?
            </p>
            <OutlineLink href="/sponsors" className="w-full">
              LEARN MORE ABOUT OUR PARTNERSHIPS
            </OutlineLink>
          </div>
        </HomeRow>
      </div>
    </main>
  );
}
