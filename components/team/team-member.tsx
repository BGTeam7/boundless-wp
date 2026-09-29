import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
}

export function TeamMember({ name, title, image }: TeamMemberProps) {
  return (
    <div className="flex items-center gap-3.5">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="size-[100px] shrink-0 rounded-full object-cover"
      />
      <div className="font-space text-base text-white">
        <p className="font-bold">{name}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}
