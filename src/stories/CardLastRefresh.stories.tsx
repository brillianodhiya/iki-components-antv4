import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import CardLastRefresh, {
  CardLastRefreshProps,
} from "../components/Cards/CardLastRefresh";

export default {
  title: "Components/Cards/CardLastRefresh",
  component: CardLastRefresh,
  argTypes: {
    date: {
      control: {
        type: "date",
      },
    },
  },
} as Meta;

const Template: Story<CardLastRefreshProps> = (args) => (
  <CardLastRefresh {...args} />
);

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
};
