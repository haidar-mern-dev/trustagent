import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import location from "../../assets/images/Vector.png";
import "../../components/styles.css";

const AnyReactComponent = ({ text }) => (
  <img src={location} className="h-[39px] w-[29px]" alt="Marker" />
);

const GoogleMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [mapType, setMapType] = useState("roadmap");
  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const defaultProps = {
    center: userLocation,
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
      {userLocation ? (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDqr4MWNhPG5sZnfMSEPc6GOJ8rdSMNVBA",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          options={{
            mapTypeId: mapType, // Set map type
          }}
        >
          <AnyReactComponent
            lat={userLocation.lat}
            lng={userLocation.lng}
            text={location}
          />
        </GoogleMapReact>
      ) : null}
    </div>
  );
};

export default GoogleMap;
