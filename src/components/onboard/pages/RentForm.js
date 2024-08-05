import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { setFormData } from "../../../redux/formSlice"; // Adjust the import path according to your project structure
import Svgs from "../../../assets/svgs";

const options = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "townhouse", label: "Townhouse" },
  // add more options as needed
];

const PropertyForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const [address, setAddress] = useState(formData.address || "");
  const [propertyFor, setPropertyFor] = useState(formData.propertyFor || "");

  useEffect(() => {
    // Save form data to Redux store
    dispatch(setFormData({ address, propertyFor }));
  }, [address, propertyFor, dispatch]);

  const handleChangeAddress = (newAddress) => {
    setAddress(newAddress);
  };

  const handleSelectAddress = (newAddress) => {
    setAddress(newAddress);
    geocodeByAddress(newAddress)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  const handleOpenAddress = () => {};

  const handleRadioChange = (e) => {
    setPropertyFor(e.target.value);
  };

  return (
    <>
      <div className=" flex md:flex-row flex-col md:justify-between pt-12">
        <div className="lg:w-[65%] xl:w-[45%] w-full lg:pr-4">
          <h2 className="self-stretch text-[#2C363F] md:text-[28px] text-xl font-extrabold leading-[normal]">
            Add Property Details
          </h2>
          <p className="self-stretch text-[#8C8C8C] text-base font-normal leading-[normal] my-3">
            Please enter your property details
          </p>
          <div className="my-4">
            <label
              className="div {
                 text-[color:var(--P,var(--P,#2C363F))]  text-sm font-semibold leading-[normal]} "
            >
              Property is For?
            </label>
            <div className="">
              <div>
                <label className="inline-flex items-center text-sm font-medium">
                  <input
                    type="radio"
                    name="propertyFor"
                    value="sale"
                    className="w-4 h-4 rounded-full cursor-pointer"
                    style={{ accentColor: "green" }}
                    checked={propertyFor === "sale"}
                    onChange={handleRadioChange}
                  />
                  <span className="ml-2">Sale</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center text-sm font-medium">
                  <input
                    type="radio"
                    name="propertyFor"
                    value="rent"
                    className="w-4 h-4 rounded-full cursor-pointer"
                    style={{ accentColor: "green" }}
                    checked={propertyFor === "rent"}
                    onChange={handleRadioChange}
                  />
                  <span className="ml-2">Rent</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
              Property Address
            </label>
            <PlacesAutocomplete
              value={address}
              onChange={handleChangeAddress}
              onSelect={handleSelectAddress}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <div className="flex w-full mt-3">
                    <div className="[background:var(--P,#2C363F)] rounded-[4px_0px_0px_4px] flex justify-center w-[72px] items-center">
                     <Svgs.locationsvg/>
                    </div>
                    <input
                      {...getInputProps({
                        placeholder: "Search Places ...",
                        className:
                          "h-[50px] shrink-0 rounded border [background:var(--Primary-Base-White,#FFF)#E4E3E4 px-3 flex-grow outline-none",
                      })}
                    />
                  </div>
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          key={suggestion.placeId}
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
          <div className="flex justify-between my-2">
            <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
              Add Manually
            </label>
            <span onClick={handleOpenAddress}><Svgs.MoreVert/></span>
          </div>
          <div className="border-b-2 mb-3 ">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                  Street
                </label>
                <input
                  type="text"
                  className="form-input px-2 block w-full h-[50px] shrink-0 rounded border [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                  placeholder="e.g. Street 123"
                  value={formData.street}
                  onChange={(e) =>
                    dispatch(setFormData({ street: e.target.value }))
                  }
                />
              </div>
              <div>
                <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                  State
                </label>
                <Select
                  options={[]}
                  className="w-full react_select form-input   shrink-0 rounded  [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                  value={formData.state}
                  onChange={(option) =>
                    dispatch(setFormData({ state: option }))
                  }
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                  Country
                </label>
                <Select
                  options={[]}
                  className="w-full react_select form-input   shrink-0 rounded  [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                  value={formData.country}
                  onChange={(option) =>
                    dispatch(setFormData({ country: option }))
                  }
                />
              </div>
              <div>
                <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                  Postcode
                </label>
                <input
                  type="text"
                  className="form-input px-2 block w-full h-[50px] shrink-0 rounded border [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                  placeholder="e.g. 49968"
                  value={formData.postcode}
                  onChange={(e) =>
                    dispatch(setFormData({ postcode: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                  City
                </label>
                <Select
                  options={[]}
                  className="w-full react_select form-input   shrink-0 rounded  [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                  value={formData.city}
                  onChange={(option) => dispatch(setFormData({ city: option }))}
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                Property Type
              </label>
              <Select
                options={options}
                className="w-full react_select"
                value={formData.propertyType}
                onChange={(option) =>
                  dispatch(setFormData({ propertyType: option }))
                }
              />
            </div>
            <div>
              <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                Is it a Strata Property?
              </label>
              <Select
                options={[]}
                className="w-full react_select"
                value={formData.strataProperty}
                onChange={(option) =>
                  dispatch(setFormData({ strataProperty: option }))
                }
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                Bedrooms
              </label>
              <Select
                options={[]}
                className="w-full react_select"
                value={formData.bedrooms}
                onChange={(option) =>
                  dispatch(setFormData({ bedrooms: option }))
                }
              />
            </div>
            <div>
              <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                Bathrooms
              </label>
              <Select
                options={[]}
                className="w-full react_select"
                value={formData.bathrooms}
                onChange={(option) =>
                  dispatch(setFormData({ bathrooms: option }))
                }
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mb-4 items-end">
            <div>
              <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                Property Size
              </label>

              <Select
                options={[]}
                className="w-full react_select"
                placeholder={" Property Size"}
                value={formData.propertySize}
                onChange={(option) =>
                  dispatch(setFormData({ propertySize: option }))
                }
              />
            </div>
            <div>
              <Select
                options={[]}
                className="w-full react_select"
                placeholder={"sqm"}
                value={formData.propertySizeUnit}
                onChange={(option) =>
                  dispatch(setFormData({ propertySizeUnit: option }))
                }
              />
            </div>
            <div>
              <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                Land Size
              </label>
              <Select
                options={[]}
                placeholder={" Land Size"}
                className="w-full react_select"
                value={formData.landSize}
                onChange={(option) =>
                  dispatch(setFormData({ landSize: option }))
                }
              />
            </div>
            <div>
              <Select
                placeholder={"sqm"}
                options={[]}
                className="w-full react_select"
                value={formData.landSizeUnit}
                onChange={(option) =>
                  dispatch(setFormData({ landSizeUnit: option }))
                }
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                No of Living Rooms
              </label>
              <Select
                options={[]}
                placeholder={" e.g. 2"}
                className="w-full react_select"
                value={formData.livingRooms}
                onChange={(option) =>
                  dispatch(setFormData({ livingRooms: option }))
                }
              />
            </div>
            <div>
              <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
                Car Parking
              </label>
              <Select
                options={[]}
                placeholder={" e.g. 2"}
                className="w-full react_select"
                value={formData.carParking}
                onChange={(option) =>
                  dispatch(setFormData({ carParking: option }))
                }
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="self-stretch text-black  text-sm font-semibold leading-[normal] mb-3 block">
              Additional Info
            </label>
            <textarea
              className="form-input p-2 block w-full  shrink-0 rounded border [background:var(--Primary-Base-White,#FFF)#E4E3E4"
              placeholder="Anything you might want to let the agent know about in advance..."
              rows={6}
              value={formData.additionalInfo}
              onChange={(e) =>
                dispatch(setFormData({ additionalInfo: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="md:my-0 my-2 max-w-sm w-full rounded border border-theme_color bg-light_theme border-solid h-1/2">
          <h3 className=" h-[90px] shrink-0 [background:var(--P,#2C363F)] rounded-[4px_4px_0px_0px] text-[color:var(--Primary-Base-White,#FFF)]  text-xl font-semibold flex justify-center  items-center  uppercase">
            WHY WE NEED VERIFICATION?
          </h3>
          <ul className="custom-list p-6">
            <li className="text-gray-600 my-4">We value verified accounts.</li>
            <li className="text-gray-600 my-4">
              Reduces risk of unauthorized access.
            </li>
            <li className="text-gray-600 my-4">
              Builds user trust by prioritizing security.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PropertyForm;
