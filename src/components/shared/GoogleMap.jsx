import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import location from "../../assets/images/Vector.png";
import "../../components/styles.css";

const AnyReactComponent = ({ text }) => (
  <img src={location} className="h-[39px] w-[29px]" alt="Marker" />
);

const GoogleMap = ({ lat, lng }) => {
  const [mapType, setMapType] = useState("roadmap");

  const defaultProps = {
    center: { lat, lng },
    zoom: 13,
  };

  const handleMapTypeChange = (type) => {
    setMapType(type);
  };

  return (
    <div className="w-full h-full relative">
      <div className="absolute top-4 left-4 z-10 flex flex-row gap-4">
        <button
          className={`w-[82px] h-[48px] bg-white font-sans font-medium text-[16px] ${
            mapType === "roadmap" ? "text-[#FFBF00]" : "text-black"
          } rounded button-shadow`}
          onClick={() => handleMapTypeChange("roadmap")}
        >
          Map
        </button>
        <button
          className={`w-[111px] h-[48px] bg-white font-sans font-medium text-[16px] ${
            mapType === "satellite" ? "text-[#FFBF00]" : "text-black"
          } rounded button-shadow`}
          onClick={() => handleMapTypeChange("satellite")}
        >
          Satellite
        </button>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "YOUR_GOOGLE_MAPS_API_KEY",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{
          mapTypeId: mapType,
        }}
      >
        <AnyReactComponent lat={lat} lng={lng} text={location} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
