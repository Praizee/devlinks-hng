import {
  Codepen,
  Codewars,
  DevToDark,
  Facebook,
  Freecodecamp,
  FrontendMentor2,
  GitHub,
  GitLab,
  Hashnode,
  LinkedIn,
  StackOverflow,
  Twitch,
  Twitter,
  YouTube,
} from "@/public/assets/svg/PlatformIcons";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const options = [
  {
    label: "GitHub",
    Icon: GitHub,
    color: "#1A1A1A",
    border: "border",
    text: "text-white",
    link: "",
  },
  {
    label: "Frontend Mentor",
    Icon: FrontendMentor2,
    color: "",
    border: "border border-gray-200",
    text: "text-gray",
    link: "",
  },
  {
    label: "Twitter",
    Icon: Twitter,
    color: "#43B7E9",
    border: "border",
    text: "text-white",
    link: "",
  },
  {
    label: "LinkedIn",
    Icon: LinkedIn,
    color: "#2D68FF",
    border: "border",
    text: "text-white",
    link: "",
  },
  {
    label: "YouTube",
    Icon: YouTube,
    color: "#EE3939",
    border: "border",
    text: "text-white",
    link: "",
  },
  {
    label: "Facebook",
    Icon: Facebook,
    color: "#2442AC",
    border: "border",
    text: "text-white",
    link: "",
  },
  {
    label: "Twitch",
    Icon: Twitch,
    color: "#EE3FC8",
    border: "border",
    text: "text-white",
    link: "",
  },
  {
    label: "Dev.to",
    Icon: DevToDark,
    color: "gray",
    border: "border",
    text: "text-white",
    link: "",
  },
  {
    label: "Codewars",
    Icon: Codewars,
    color: "#8A1A50",
    border: "border",
    text: "text-white",
    link: "",
  },
  {
    label: "Codepen",
    Icon: Codepen,
    color: "#000000",
    border: "border",
    text: "text-white",
    link: "",
  },
  {
    label: "freeCodeCamp",
    Icon: Freecodecamp,
    color: "#302267",
    border: "border",
    text: "text-white",
    link: "",
  },
  {
    label: "GitLab",
    Icon: GitLab,
    color: "#EB4925",
    border: "border",
    text: "text-white",
    link: "",
  },
  {
    label: "Hashnode",
    Icon: Hashnode,
    color: "#0330D1",
    border: "border",
    text: "text-white",
    link: "",
  },
  {
    label: "Stack Overflow",
    Icon: StackOverflow,
    color: "#EC7100",
    border: "border",
    text: "text-white",
    link: "",
  },
];

const PlatformLinks = () => {
  return (
    <>
      {options.map((option) => (
        <Link
          key={option.label}
          href={option.link}
          className={`w-[237px] h-[56px] p-[16px] rounded text-white flex items-center gap-[8px] justify-between ${option.border} active:scale-100 hover:scale-105 duration-200`}
          style={{
            backgroundColor: option.color,
          }}
        >
          <option.Icon className="size-6" />
          <div className={`${option.text} flex-1`}>{option.label}</div>
          <LuArrowRight className={`size-[16px] ${option.text}`} />
        </Link>
      ))}
    </>
  );
};

export default PlatformLinks;
