import { Tablr } from "./Tablr";

export default {
  title: "Tablr",
  component: Tablr,
  argTypes: {
    rows: { control: "" },
    headers: { control: "" },
  },
};

const Template = (args) => <Tablr {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    [
      "BL21W2021",
      "Segun Adebayo",
      " ",
      "1234567890xyz.abc",
      "Assistant Engineer II, Dhenkanal Municipality",
      "Community Organiser",
      "Ward 1, Ward 2, Ward 3",
      "ACTIVE",
    ],
    [
      "BL21W2021",
      "Segun Adebayo",
      " ",
      "1234567890xyz.abc",
      "Assistant Engineer II, Dhenkanal Municipality",
      "Community Organiser",
      "Ward 1, Ward 2, Ward 3",
      "ACTIVE",
    ],
    [
      "BL21W2021",
      "Segun Adebayo",
      " ",
      "1234567890xyz.abc",
      "Assistant Engineer II, Dhenkanal Municipality",
      "Community Organiser",
      "Ward 1, Ward 2, Ward 3",
      "ACTIVE",
    ],
    [
      "BL21W2021",
      "Segun Adebayo",
      " ",
      "1234567890xyz.abc",
      "Assistant Engineer II, Dhenkanal Municipality",
      "Community Organiser",
      "Ward 1, Ward 2, Ward 3",
      "ACTIVE",
    ],
  ],
  headers: [
    "ID",
    "NAME",
    "ACTION",
    "CONTACT",
    "DESIGNATION",
    "ROLE",
    "JURISDICTION",
    "STATUS",
  ],
};
