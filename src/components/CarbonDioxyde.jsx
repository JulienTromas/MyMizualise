import React, {useState} from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  DistanceMatrixService,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
// import {Icon} from '@iconify/react'
// import locationIcon from '@iconify-icons/mdi/map-marker-down'
import "./map.css";

//libraries is a property we pass to the Places API to show what kind of locations we are looking for
const libraries = ["places"];

//We pass this to google maps so it knows how much to render the map by.
const mapContainerStyle = {
  height: "500px",
};
//this is given to google maps so that it knows where to show on render
const center = {
  lat: 35.6579702,
  lng: 139.7276486,
};

//MAIN FUNCTION
export default function Map() {
  //connects to google API and declares the libraries I want to use.
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_DEV_KEY,
    libraries,
  });

  //conditionals should there be issues rendering the map
  if (loadError)
    return "Could Not Load The Map! Check the Load Script or Environmental Variables";
  if (!isLoaded) return "Loading Maps";

  //MAIN RENDER
  return (
    <>
      <div className="navFillerDiv"></div>
      <div className="map-wrap">
        <div className="map-input">
          <Search />
        </div>
        <div className="map-map">
          <GoogleMap
            className="map"
            mapContainerStyle={mapContainerStyle}
            zoom={18}
            center={center}
          ></GoogleMap>
        </div>
      </div>
      <div className="blue-space"></div>
      <div className="white-space"></div>
      <div className="blue-space"></div>
      <div className="white-space"></div>
    </>
  );
}
//------------------------------------------------------------

//SEARCH COMPONENT THIS IS WHAT WILL RENDER THE SEARCH BARS THAT USE PLACES AUTOCOMPLETE
function Search() {
  const {
    ready,
    value,
    suggestions: {status, data},
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [km, setKm] = useState();
  let co2 = Math.round((km * 122.4) / 1000);
  let bottles = Math.round(co2 * 3);

  //SEARCH BAR RENDERING
  return (
    // fdfa
    <div>
      <div className="input-wrapper"></div>
        <div className="destination-input">
          <Combobox
            className="combo-box"
            onSelect={async (address) => {
              try {
                const results1 = await getGeocode({address});
                const originRes = await getLatLng(results1[0]);
                console.log(originRes);
                setOrigin(originRes); //CHANGE THIS TO POINT TO DISTANCE MATRIX
              } catch (error) {
                console.log("error!");
              }
            }}
          >
            <ComboboxInput
              className="combo-input"
              value1={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              disabled={!ready}
              placeholder="Starting Point"
            />
            <ComboboxPopover>
              {status === "OK" &&
                data.map(({description}) => <ComboboxOption value={description} />)}
            </ComboboxPopover>
          </Combobox>
        </div>

        <div className="destination-input">
          <Combobox
            className="combo-box"
            onSelect={async (address) => {
              try {
                const results2 = await getGeocode({address});
                const destRes = await getLatLng(results2[0]);
                console.log(destRes);
                setDestination(destRes); //CHANGE THIS TO POINT TO DISTANCE MATRIX
              } catch (error) {
                console.log("error!");
              }
            }}
          >
            <ComboboxInput
              className="combo-input"
              value2={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              disabled={!ready}
              placeholder="End Point"
            />
            <ComboboxPopover>
              {status === "OK" &&
                data.map(({description}) => <ComboboxOption value={description} />)}
            </ComboboxPopover>
          </Combobox>
        </div>

      <div>
        <button onClick={() => setButtonClicked(true)}>Lets Go</button>
      </div>
      {buttonClicked ? (
        <DistanceMatrixService
          options={{
            destinations: [{lat: destination.lat, lng: destination.lng}],
            origins: [{lng: origin.lng, lat: origin.lat}],
            travelMode: "DRIVING",
          }}
          callback={(response) => {
            setKm(response.rows[0].elements[0].distance.value / 1000);
            console.log(response.rows[0].elements[0].distance);
            console.log(origin.lat, origin.lng);
            console.log(destination.lat, destination.lng);
            setButtonClicked(false);
          }}
        />
      ) : (
        <> </>
      )}

      <div>
        <b>{km}</b>Kilometers
      </div>
      <div>
        <b>{co2}</b> Kg of Carbon Dioxide
      </div>
      <div>
        <b>{bottles}</b> empty 500ml bottles
      </div>
      <div>
        To date, mymizu users have saved a total of 26,032Kg's of C02, with only 3 plastic
        bottles of 500ml producing 1kg of CO2!
      </div>
      <div>It is equivalent to driving back and forth from Tokyo to Kyoto 232 times!</div>
    </div>
  );
}
