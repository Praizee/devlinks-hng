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

const options = [
  { label: "GitHub", Icon: GitHub, color: "#1A1A1A", border: "border" },
  {
    label: "Frontend Mentor",
    Icon: FrontendMentor2,
    color: "",
    border: "border border-gray-300",
  },
  { label: "Twitter", Icon: Twitter, color: "#43B7E9", border: "border" },
  { label: "LinkedIn", Icon: LinkedIn, color: "#2D68FF", border: "border" },
  { label: "YouTube", Icon: YouTube, color: "#EE3939", border: "border" },
  { label: "Facebook", Icon: Facebook, color: "#2442AC", border: "border" },
  { label: "Twitch", Icon: Twitch, color: "#EE3FC8", border: "border" },
  { label: "Dev.to", Icon: DevToDark, color: "gray", border: "border" },
  { label: "Codewars", Icon: Codewars, color: "#8A1A50", border: "border" },
  { label: "Codepen", Icon: Codepen, color: "#000000", border: "border" },
  {
    label: "freeCodeCamp",
    Icon: Freecodecamp,
    color: "#302267",
    border: "border",
  },
  { label: "GitLab", Icon: GitLab, color: "#EB4925", border: "border" },
  { label: "Hashnode", Icon: Hashnode, color: "#0330D1", border: "border" },
  {
    label: "Stack Overflow",
    Icon: StackOverflow,
    color: "#EC7100",
    border: "border",
  },
];

const PlatformLinks = () => {
  return (
    <>
      {options.map((option) => (
        <div
          key={option.label}
          className={`w-[237px] h-[56px] p-[16px] rounded text-white flex items-center gap-[8px] ${option.border}`}
          style={{
            backgroundColor: option.color,
            border: `2px solid ${option.border}`,
          }}
        >
          <option.Icon className="size-6" />
          <div>{option.label}</div>
        </div>
      ))}
    </>
  );
};

export default PlatformLinks;
