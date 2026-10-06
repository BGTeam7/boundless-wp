import { HomeRow } from "@/components/home/home-row";
import { TeamMember } from "@/components/team/team-member";
import { OpenPosition } from "@/components/team/open-position";

const teamMembers = [
  { name: "Mike Pasqualicchio", title: "Title" },
  { name: "Mike Pasqualicchio", title: "Title" },
  { name: "Mike Pasqualicchio", title: "Title" },
  { name: "Mike Pasqualicchio", title: "Title" },
  { name: "Mike Pasqualicchio", title: "Title" },
  { name: "Mike Pasqualicchio", title: "Title" },
];

const openPositions = [
  {
    title: "Finance Director",
    description:
      "Some description here of responsibilities\nSome description here of responsibilities",
    href: "#",
  },
  {
    title: "Finance Director",
    description:
      "Some description here of responsibilities\nSome description here of responsibilities",
    href: "#",
  },
  {
    title: "Finance Director",
    description:
      "Some description here of responsibilities\nSome description here of responsibilities",
    href: "#",
  },
];

export default function TeamPage() {
  return (
    <main
      className="text-brand-fg"
      style={{
        backgroundImage:
          "linear-gradient(134deg, #b2054e 0%, #111111 18%, #111111 65%, #004be8 100%)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 py-20 sm:px-10 md:gap-32 md:py-28">
        <HomeRow label="Our Team">
          <p className="text-lg text-brand-muted">
            Boundless Gamers is composed of a large team of volunteers
            working remotely from various locations around the world. Your
            support powers our ability to create meaningful and therapeutic
            gaming experiences, ensuring that game proceeds reach the
            charities that change lives through play.
          </p>
        </HomeRow>

        <HomeRow label="Leadership">
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                image="/images/team/placeholder-avatar.png"
              />
            ))}
          </div>
        </HomeRow>
        
        <HomeRow label="Work With Us!">
          <p className="text-lg text-brand-muted">
            We are grateful for our volunteers that have committed their time
            to ensure that our team runs smoothly.
          </p>
          <p className="text-lg text-brand-muted">
            At this time, we are only accepting applications for the specific
            roles listed below. If you are seeking a different position, feel
            free to reach out to us with your resume at
            contact@boundlessgamers.org under the subject header: [JOB TITLE]
            Resume. Thank you!
          </p>
        </HomeRow>

        <HomeRow label="Open Positions">
          <div className="flex w-full flex-col gap-1">
            {openPositions.map((position, index) => (
              <OpenPosition
                key={index}
                title={position.title}
                description={position.description}
                href={position.href}
              />
            ))}
          </div>
        </HomeRow>

      </div>
    </main>
  );
}
