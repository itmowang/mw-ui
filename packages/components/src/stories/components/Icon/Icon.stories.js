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
    icon: { control: "text" },
  },
  args: {
    icon: "Home",
  },
};


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Size = {
  args: {
  },
};

export const Type = {
  args: {
  },
};

export const Disabled = {
  args: {
  },
};

export const IconButton = {
  args: {},
};

export const TextButton = {
  args: {
  },
};
