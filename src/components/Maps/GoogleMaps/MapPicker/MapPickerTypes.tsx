export interface MapPickerProps {
  center: {
    lat: number;
    lng: number;
  };
  onChange: (lat: number, lng: number) => void;
  apiKey?: string;
  mapContainerClassName?: string;
  zoom?: number;
}
