import Reacr from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import CardDevices, { CardDevicesProps } from "../components/Cards/CardDevices";

export default {
  title: "IKI Components/Cards/Card Devices",
  component: CardDevices,
} as Meta;

const Template: Story<CardDevicesProps> = (args) => <CardDevices {...args} />;

export const Default = Template.bind({});
Default.args = {
  deviceOffline: 0,
  deviceOnline: 0,
  deviceTotal: 0,
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
  deviceOffline: 0,
  deviceOnline: 0,
  deviceTotal: 0,
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
  deviceOffline: 0,
  deviceOnline: 0,
  deviceTotal: 0,
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
  deviceOffline: 0,
  deviceOnline: 0,
  deviceTotal: 0,
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
  deviceOffline: 0,
  deviceOnline: 0,
  deviceTotal: 0,
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
  deviceOffline: 10,
  deviceOnline: 20,
  deviceTotal: 30,
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
