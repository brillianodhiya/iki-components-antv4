import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import CardAlertSystem, { AlertSystemProps } from "./AlertSystem";

export default {
  title: "IKI Components/Cards/Alert System",
  component: CardAlertSystem,
} as Meta;

const Template: Story<AlertSystemProps> = (args) => (
  <CardAlertSystem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  checkTitle: "Tekanan Air",
  checkValue: "0.03 Bar",
  exclamationTitle: "Tekanan Air",
  exclamationValue: "180.074 m3",
  loading: false,
};
