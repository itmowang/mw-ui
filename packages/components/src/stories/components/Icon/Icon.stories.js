import { Icon } from "./Icon";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // icon: { control: "text" },
    color: { control: "color" },
  },
  args: {
    icon: "Home",
    size: 24,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const icon = {
  args: {
    icon: "Home",
  },
};

export const size = {
  args: {
    size: 80,
    icon: "Home",
  },
};

export const color = {
  args: {
    icon: "Home",
    color: "#1bc2ee",
  },
};
