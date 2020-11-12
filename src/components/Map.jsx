import React from 'react'
import {GoogleMap, useLoadScript, Marker, DistanceMatrixService} from '@react-google-maps/api';
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox";
import '@reach/combobox/styles.css'
// import {Icon} from '@iconify/react'
// import locationIcon from '@iconify-icons/mdi/map-marker-down'
import './map.css'


//libraries is a property we pass to the Places API to show what kind of locations we are looking for
const libraries = ["places"]

//We pass this to google maps so it knows how much to render the map by.
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
};
//this is given to google maps so that it knows where to show on render
const center = {
  lat: 35.6579702,
  lng: 139.7276486
}

//-------------------------------------------
async function handleGetLatLng(address){
  try{
    const results2 = await getGeocode({ address });
    const {lat, lng } = await getLatLng(results2[0])
    console.log(lat,lng) //CHANGE THIS TO POINT TO DISTANCE MATRIX
  } catch (error){
    console.log("error!")
  }
}

//-------------------------------------------


//MAIN FUNCTION 
export default function Map() {
  //connects to google API and declares the libraries I want to use.
  const {isLoaded, loadError} = useLoadScript ({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_DEV_KEY,
    libraries
  });

  //conditionals should there be issues rendering the map
  if(loadError) return "Could Not Load The Map! Check the Load Script or Environmental Variables"
  if(!isLoaded) return "Loading Maps"

  //MAIN RENDER
  return (
    <div >
      <Search />
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={18}
        center={center}
      >
      </GoogleMap>
    </div>
  )
}
//------------------------------------------------------------

//SEARCH COMPONENT THIS IS WHAT WILL RENDER THE SEARCH BARS THAT USE PLACES AUTOCOMPLETE
function Search() {
  const {
    ready, 
    value, 
    suggestions: {status, data}, 
    setValue, 
    clearSuggestions
  } = usePlacesAutocomplete();

//SEARCH BAR RENDERING
return (
  // fdfa
  <div>
    <Combobox 
      onSelect={async (address)=>{
        try{
          const results1 = await getGeocode({ address });
          const {lat, lng } = await getLatLng(results1[0])
          console.log(lat,lng) //CHANGE THIS TO POINT TO DISTANCE MATRIX
        } catch (error){
          console.log("error!")
        }
      }}
    >
      <ComboboxInput 
        value1={value} 
        onChange={(e)=> {
          setValue(e.target.value)
        }}
        disabled={!ready}
        placeholder="Starting Point"
      />
      <ComboboxPopover>
        {status === "OK" && data.map(({description})  => (
          <ComboboxOption value= {description} /> 
        ))}
      </ComboboxPopover>
    </Combobox>


    <Combobox 
      onSelect={async (address)=>{
        try{
          const results2 = await getGeocode({ address });
          const {lat, lng } = await getLatLng(results2[0])
          console.log(lat,lng) //CHANGE THIS TO POINT TO DISTANCE MATRIX
        } catch (error){
          console.log("error!")
        }
      }}
    >
      <ComboboxInput 
        value2={value} 
        onChange={(e)=> {
          setValue(e.target.value)
        }}
        disabled={!ready}
        placeholder="End Point"
      />
      <ComboboxPopover>
        {status === "OK" && data.map(({description})  => (
          <ComboboxOption value= {description} /> 
        ))}
      </ComboboxPopover>
    </Combobox>
  </div>
  )
};
