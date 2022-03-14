import React from "react";

import { Input } from "./Input";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: "Input",
//   component: Input,
// };

// //----------
// // Variants
// //----------
// export const Small = () => <Input size="small" placeholder="Small size" />;
// export const Medium = () => <Input size="medium" placeholder="Medium size" />;
// export const Large = () => <Input size="large" placeholder="Large size" />;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Input",
  component: Input,
  args: {
    placeholder: "Write something...",
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const Value = Template.bind({});
Value.args = {
  value: "Lorem ipsum dolor, sit amet.",
};
