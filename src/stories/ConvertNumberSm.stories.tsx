import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ConvertNumberSm } from "./ConvertNumberSm";

export default {
  title: "IKI Components/Converter/ConvertNumberSM",
  component: ConvertNumberSm,
  args: {
    number: 0,
  },
  argTypes: {
    number: {
      control: {
        type: "number",
        min: 0,
        max: 999999999,
      },
    },
  },
} as Meta;

const Template: Story = (args) => <ConvertNumberSm {...args} />;

export const Default = Template.bind({});
