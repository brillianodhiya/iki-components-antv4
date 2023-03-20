import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Typography } from "antd";
import { PlacesAutocomplete } from "./PlaceAutocomplete";
import "./main.css";

const MapPicker = ({
  center = { lat: -6.175392, lng: 106.827153 },
  onChange = (lat, lng) => {},
  apiKey,
  mapContainerClassName,
  zoom,
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Map
      c={center}
      onChange={onChange}
      mapContainerClassName={mapContainerClassName}
      zoom={zoom}
    />
  );
};

function Map({
  c = { lat: -6.2, lng: 106.816666 },
  onChange = (c) => {},
  mapContainerClassName,
  zoom = 16,
}) {
  const center = useMemo(() => c, [c]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Typography
          style={{ fontSize: "14px", fontWeight: 400, marginTop: "12px" }}
        >
          Pin Location
        </Typography>
        <PlacesAutocomplete setSelected={onChange} />
      </div>
      <GoogleMap
        onRightClick={(e) => {
          const lat = e.latLng.lat();
          const lng = e.latLng.lng();

          try {
            onChange({ lat: lat, lng: lng });
          } catch (error) {}
        }}
        zoom={zoom}
        center={center}
        mapContainerClassName={
          mapContainerClassName ? mapContainerClassName : "map-container"
        }
      >
        <Marker
          onDragEnd={(e) => {
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();

            try {
              onChange({ lat: lat, lng: lng });
            } catch (error) {}
          }}
          draggable
          position={center}
        />
      </GoogleMap>
    </>
  );
}

export default MapPicker;
