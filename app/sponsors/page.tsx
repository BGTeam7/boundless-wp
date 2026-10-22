import Image from "next/image";

import { HomeRow } from "@/components/home/home-row";
import { OutlineLink } from "@/components/home/outline-link";

const partners = [
  { src: "/images/sponsors/extra-life.png", alt: "Extra Life", width: 316, height: 129 },
  { src: "/images/sponsors/stack-up.png", alt: "Stack Up", width: 316, height: 177 },
  { src: "/images/sponsors/gamers-outreach.png", alt: "Gamers Outreach", width: 346, height: 133 },
];

const streamerFriends = [
  "/images/team/placeholder-avatar.png",
  "/images/team/placeholder-avatar.png",
  "/images/team/placeholder-avatar.png",
];

export default function SponsorsPage() {
  return (
    <main
      className="text-brand-fg"
      style={{
        backgroundImage:
          "linear-gradient(134deg, #b2054e 0%, #111111 18%, #111111 65%, #004be8 100%)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 py-20 sm:px-10 md:gap-32 md:py-28">
        <HomeRow label="Thanks to Our Partners!">
          <div className="flex flex-wrap items-center gap-10">
            {partners.map((partner) => (
              <Image
                key={partner.alt}
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="h-auto w-auto max-w-[316px]"
              />
            ))}
          </div>
        </HomeRow>

        <HomeRow label="Sponsors">
          <p className="text-lg text-brand-muted">
            Boundless Gamers is continually looking for partnerships to help
            enhance the team&apos;s ability to produce a competition-winning
            vehicle. Our sponsors not only provide the team with necessary
            space, materials, and funds to produce a vehicle that stands up
            to the prestigious Georgia Tech reputation, but fosters a team
            that is prepared for the world beyond college. Without our
            sponsors, our project is simply not possible.
          </p>
          <OutlineLink href="#" className="w-full">
            DOWNLOAD SPONSOR PACKET
          </OutlineLink>
          <p className="text-lg text-brand-muted">
            Interested in supporting a specific initiative, such as a current
            game or the studio instead? Email us at
            contact@boundlessgamers.org for more details!
          </p>
        </HomeRow>

        <HomeRow label="Streamer Friends">
          <p className="text-lg text-brand-muted">
            Thanks to our streamer friends and collaborators for their
            support!
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {streamerFriends.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Streamer friend"
                width={100}
                height={100}
                className="size-[100px] shrink-0 rounded-full object-cover"
              />
            ))}
          </div>
        </HomeRow>

        <p className="text-center font-heading text-2xl font-bold uppercase text-brand-fg">
          Thank you to all of our Partners for their continued generosity and
          support throughout the year!
        </p>
      </div>
    </main>
  );
}
