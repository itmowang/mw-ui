import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: "text" },
    type: { control: "select" },
    size: { control: "inline-radio" },
  },
  args: {
    children: "Button",
    type: "success",
    size: "default",
    disabled: false,
    link: false,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Size = {
  args: {
    size: "default",
  },
};

export const Type = {
  args: {
    type: "danger",
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const IconButton = {
  args: {},
};

export const TextButton = {
  args: {
    link: true,
  },
};
