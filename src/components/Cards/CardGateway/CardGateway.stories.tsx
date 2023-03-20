import Reacr from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import CardGateway, { CardGatewayProps } from "./CardGateway";

export default {
  title: "IKI Components/Cards/Card Gateway",
  component: CardGateway,
} as Meta;

const Template: Story<CardGatewayProps> = (args) => <CardGateway {...args} />;

export const Default = Template.bind({});
Default.args = {
  gatewayOffline: 0,
  gatewayOnline: 0,
  gatewayTotal: 0,
  loading: false,
  withNotification: false,
  loadingNotification: false,
  notifCount: 0,
  onClickNotification: () => {},
  onClickViewDetail: () => {},
  style: {
    borderRadius: 8,
    borderTop: "2px solid #1890FF",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  },
};

export const Collapsible = Template.bind({});
Collapsible.args = {
  gatewayOffline: 0,
  gatewayOnline: 0,
  gatewayTotal: 0,
  loading: false,
  withNotification: false,
  loadingNotification: false,
  notifCount: 0,
  onClickNotification: () => {},
  onClickViewDetail: () => {},
  style: {
    borderRadius: 8,
    borderTop: "2px solid #1890FF",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  },
  collapsible: true,
};

export const WithNotification = Template.bind({});
WithNotification.args = {
  gatewayOffline: 0,
  gatewayOnline: 0,
  gatewayTotal: 0,
  loading: false,
  withNotification: true,
  loadingNotification: false,
  notifCount: 10,
  onClickNotification: () => {},
  onClickViewDetail: () => {},
  style: {
    borderRadius: 8,
    borderTop: "2px solid #1890FF",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  },
};

export const Loading = Template.bind({});
Loading.args = {
  gatewayOffline: 0,
  gatewayOnline: 0,
  gatewayTotal: 0,
  loading: true,
  withNotification: false,
  loadingNotification: false,
  notifCount: 0,
  onClickNotification: () => {},
  onClickViewDetail: () => {},
  style: {
    borderRadius: 8,
    borderTop: "2px solid #1890FF",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  },
};

export const LoadingNotification = Template.bind({});
LoadingNotification.args = {
  gatewayOffline: 0,
  gatewayOnline: 0,
  gatewayTotal: 0,
  loading: false,
  withNotification: true,
  loadingNotification: true,
  notifCount: 0,
  onClickNotification: () => {},
  onClickViewDetail: () => {},
  style: {
    borderRadius: 8,
    borderTop: "2px solid #1890FF",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  },
};

export const WithData = Template.bind({});
WithData.args = {
  gatewayOffline: 10,
  gatewayOnline: 20,
  gatewayTotal: 30,
  loading: false,
  withNotification: false,
  loadingNotification: false,
  notifCount: 0,
  onClickNotification: () => {},
  onClickViewDetail: () => {},
  style: {
    borderRadius: 8,
    borderTop: "2px solid #1890FF",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  },
};

export const NoArgs = Template.bind({});
