import { Alert } from "./Alert";
import { Alert as AlertComponents } from "@damw-ui/ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
  args: {
    type: "success",
    message:"Success Tips !"
  },
};


// all the stories are here
export const Type = {
  args: {
    type: "success",
    message:"Success Tips !"
  },
};