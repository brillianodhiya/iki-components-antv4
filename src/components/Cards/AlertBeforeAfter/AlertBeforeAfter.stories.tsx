import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AlertBeforeAfter, { AlertBeforeAfterProps } from "./AlertBeforeAfter";

export default {
  title: "IKI Components/Cards/Alert Before After",
  component: AlertBeforeAfter,
};

const Template: Story<AlertBeforeAfterProps> = (args) => (
  <AlertBeforeAfter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  loading: false,
  titleAfter: "Interval Sekarang",
  titleBefore: "Interval Sebelumnya",
  valueAfter: "151.053 m3",
  valueBefore: "180.074 m3",
};

export const NotCollapsible = Template.bind({});
NotCollapsible.args = {
  collapsible: false,
  loading: false,
  titleAfter: "Interval Sekarang",
  titleBefore: "Interval Sebelumnya",
  valueAfter: "151.053 m3",
  valueBefore: "180.074 m3",
};
