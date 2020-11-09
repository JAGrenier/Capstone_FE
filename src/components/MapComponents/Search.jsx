import usePlacesAutocomplete, { getGeocode,getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput,ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox";
import { Button } from "@material-ui/core";

export default function Search({panTo}) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
        location:  {lat: () => 39.7392, lng:() => -104.9903},
        radius: 100,
        types: [('establishment')]
      },
    });
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
            console.log("location", lat, lng)
        } catch (error) {
            console.log("error", error);
        }
        };

    return (
        <div className="search">
            <Combobox onSelect={handleSelect} aria-label="Search for a location">
                <ComboboxInput
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Search for a Restaurant Name"
                    />
                <ComboboxPopover>
                    <ComboboxList style={{backgroundColor: "white"}}>
                        {status === "OK" &&
                            data.map(({ id, description }) => (
                        <ComboboxOption key={id} value={description} />
                    ))}
                </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}