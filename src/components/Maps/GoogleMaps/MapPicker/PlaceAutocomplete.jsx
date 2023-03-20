import { Input, AutoComplete } from "antd";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const { Search } = Input;

export const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(JSON.parse(address).description, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  const options = data.map(({ place_id, description }) => {
    return {
      label: description,
      value: JSON.stringify({
        place_id: place_id,
        description: description,
      }),
    };
  });

  return (
    <AutoComplete
      options={options}
      style={{ width: 200 }}
      onSelect={handleSelect}
      value={value}
    >
      <Search
        disabled={!ready}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Cari Lokasi"
        style={{ width: 200 }}
      />
    </AutoComplete>
  );
};
