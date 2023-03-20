import React from "react";
import MapPicker from "./MapPicker";

export default {
  title: "IKI Components/Maps/Google Maps/Map Picker",
  component: MapPicker,
};

const Template = (args) => <MapPicker {...args} />;

export const Default = Template.bind({});

Default.args = {
  center: {
    lat: -6.175392,
    lng: 106.827153,
  },
  onChange: (lat, lng) => {},
  apiKey: "",
  mapContainerClassName: "map-container",
  zoom: 16,
};
