"use client";

import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";

import {
  Codepen,
  Codewars,
  DevTo,
  Facebook,
  Freecodecamp,
  FrontendMentor,
  GitHub,
  GitLab,
  Hashnode,
  LinkedIn,
  StackOverflow,
  Twitch,
  Twitter,
  YouTube,
} from "@/public/assets/svg/PlatformIcons";
import { BiCheck, BiChevronDown, BiChevronUp } from "react-icons/bi";

const options = [
  { label: "GitHub", Icon: GitHub },
  { label: "Frontend Mentor", Icon: FrontendMentor },
  { label: "Twitter", Icon: Twitter },
  { label: "LinkedIn", Icon: LinkedIn },
  { label: "YouTube", Icon: YouTube },
  { label: "Facebook", Icon: Facebook },
  { label: "Twitch", Icon: Twitch },
  { label: "Dev.to", Icon: DevTo },
  { label: "Codewars", Icon: Codewars },
  { label: "Codepen", Icon: Codepen },
  { label: "freeCodeCamp", Icon: Freecodecamp },
  { label: "GitLab", Icon: GitLab },
  { label: "Hashnode", Icon: Hashnode },
  { label: "Stack Overflow", Icon: StackOverflow },
];

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleValueChange = (value: string) => {
    setSelectedOption(value);
  };

  const selected = options.find((option) => option.label === selectedOption);
  const SelectedIcon = selected?.Icon || null;

  return (
    <Select.Root onValueChange={handleValueChange}>
      <Select.Trigger
        id="platform"
        className="inline-flex items-center justify-between px-[16px] py-[12px] text-base text-gray placeholder:text-gray placeholder:opacity-[0.5] bg-white outline-none border active:border-primary active:shadow-input focus:border-primary focus:shadow-input rounded"
      >
        <div className="flex gap-2 items-center">
          {SelectedIcon && <SelectedIcon className="mr-2 text-gray" />}
          <Select.Value
            placeholder="Select a platform..."
            className="text-gray flex items-center"
          >
            {selectedOption || "Select a platform..."}
          </Select.Value>
        </div>
        <Select.Icon className="ml-2">
          <BiChevronDown className="size-6 text-primary" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          avoidCollisions={true}
          className="w-[var(--radix-select-trigger-width)] max-h-72 mt-3 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-md"
        >
          <Select.ScrollUpButton className="flex items-center justify-center h-8 cursor-pointer bg-white">
            <BiChevronUp className="size-6 text-primary" />
          </Select.ScrollUpButton>

          <Select.Viewport className="p-2">
            <Select.Group>
              {options.map((option) => (
                <SelectItem
                  key={option.label}
                  value={option.label}
                  icon={option.Icon}
                >
                  {option.label}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton className="flex items-center justify-center h-8 cursor-pointer bg-white">
            <BiChevronDown className="size-6 text-primary" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

type SelectItemProps = {
  children: React.ReactNode;
  value: string;
  icon: React.ComponentType<{ className?: string }>; // Ensure correct typing
};

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, value, icon: Icon, ...props }, forwardedRef) => (
    <Select.Item
      ref={forwardedRef}
      value={value}
      className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
      {...props}
    >
      <Icon className="mr-2 text-gray" />
      <Select.ItemText className="text-gray">{children}</Select.ItemText>
      <Select.ItemIndicator className="ml-auto">
        <BiCheck className="text-blue-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
);

SelectItem.displayName = "SelectItem";

export default CustomSelect;
