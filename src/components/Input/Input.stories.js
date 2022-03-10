import React from "react";

import { Input } from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Input",
  component: Input,
};

//----------
// Variants
//----------
export const Small = () => <Input size="small" placeholder="Small size" />;
export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;
