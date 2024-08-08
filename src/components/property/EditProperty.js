import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { City, Country, State } from "country-state-city";
import Svgs from "../../assets/svgs";
import { setFormData } from "../../redux/formSlice";
import moment from "moment"; 
import { DatePicker, TimePicker } from "antd";
import AddAttachment from "../commons/AddAttachment";
const propertyOptions = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "unit", label: "Unit" },
  { value: "flat", label: "Flat" },
  { value: "townhouse", label: "Townhouse" },
  { value: "duplex", label: "Duplex" },
  { value: "land", label: "Land" },
  { value: "rural", label: "Rural" },
];
const attachmentOptions = [
  { value: "rates", label: "Rates Notice" },
  { value: "strata", label: "Strata Notice" },
];
const EditProperty = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const [saleMethod, setSaleMethod] = useState(formData.saleType || "");
  const [address, setAddress] = useState(formData.address || "");
  const [propertyFor, setPropertyFor] = useState(formData.propertyFor || "");
  const [country, setCountry] = useState(formData.country);
  const [state, setState] = useState(formData.state || "");
  const [city, setCity] = useState(formData.city || "");
  const [showAddressForm, setShowAddressForm] = useState(false);

  const [attachments, setAttachments] = useState([<AddAttachment key={0} />]);
  const [frontImage, setFrontImage] = useState(null);

  const handleAddAttachment = () => {
    if (attachments.length < 3) {
      setAttachments([
        ...attachments,
        <AddAttachment key={attachments.length} />,
      ]);
    }
  };
  const handleImageUpload = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setImage(upload.target.result);
      };
      reader.readAsDataURL(file);
    }
  };




  const countryOptions = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const stateOptions = State.getStatesOfCountry(country?.value).map(
    (state) => ({
      value: state.isoCode,
      label: state.name,
    })
  );

  const cityOptions = City.getCitiesOfState(country?.value, state?.value).map(
    (city) => ({
      value: city.name,
      label: city.name,
    })
  );

  useEffect(() => {
    if (formData) {
      handleCountryChange(formData.country);
      handleStateChange(formData?.state, formData.country);
      handleCityChange(formData.city, formData.country, formData.state);
    }
  }, []);

  const handleChangeAddress = (newAddress) => {
    setAddress(newAddress);
  };

  const handleOpenAddress = () => {
    setShowAddressForm(!showAddressForm);
  };

  const handleRadioChange = (e) => {
    setPropertyFor(e.target.value);
  };
  const handleRadioChangeSalesMethod = (e) => {
    setSaleMethod(e.target.value);
    dispatch(setFormData({ saleType: e.target.value }));
  };
  const handleCountryChange = (selectedOption) => {
    const selectedCountry = countryOptions.find(
      (country) => country.label == selectedOption
    );
    setCountry(selectedCountry);
    setState("");
    setCity("");
    dispatch(setFormData({ country: selectedOption, state: "", city: "" }));
  };

  const handleStateChange = (selectedOption, count) => {
    if (count) {
      const selectedCountry = countryOptions.find(
        (country) => country.label == count
      );
      const stateOptions = State.getStatesOfCountry(selectedCountry?.value).map(
        (state) => ({
          value: state.isoCode,
          label: state.name,
        })
      );
      const selectedState = stateOptions.find(
        (state) => state.label === selectedOption
      );

      setState(selectedState);
      dispatch(setFormData({ state: selectedOption, city: "" }));
      setCity("");
    } else {
      const selectedState = stateOptions.find(
        (state) => state.label === selectedOption
      );
      setState(selectedState);
      setCity("");
      dispatch(setFormData({ state: selectedOption, city: "" }));
    }
  };

  const handleCityChange = (selectedOption, countr, stat) => {
    if (countr) {
      const selectedCountry = countryOptions.find(
        (country) => country.label == countr
      );
      const stateOptions = State.getStatesOfCountry(selectedCountry?.value).map(
        (state) => ({
          value: state.isoCode,
          label: state.name,
        })
      );
      const selectedState = stateOptions.find((state) => state.label === stat);
      const cityOptions = City.getCitiesOfState(
        selectedCountry?.value,
        selectedState?.value
      ).map((city) => ({
        value: city.name,
        label: city.name,
      }));
      const selectedCity = cityOptions.find(
        (state) => state.label === selectedOption
      );
      setCity(selectedCity);
      dispatch(setFormData({ city: selectedOption }));
    } else {
      const selectedCity = cityOptions.find(
        (state) => state.label === selectedOption
      );
      setCity(selectedCity);
      dispatch(setFormData({ city: selectedOption }));
    }
  };

  const handleSelectAddress = (newAddress) => {
    setAddress(newAddress);
    geocodeByAddress(newAddress)
      .then((results) => {
        const addressComponents = results[0].address_components;

        let street = "",
          city = "",
          state = "",
          country = "",
          postcode = "";

        addressComponents.forEach((component) => {
          const types = component.types;
          if (types.includes("street_number") || types.includes("route")) {
            street = street
              ? `${street} ${component.long_name}`
              : component.long_name;
          }
          if (
            types.includes("locality") ||
            types.includes("administrative_area_level_3")
          ) {
            city = component.long_name;
          }
          if (types.includes("administrative_area_level_1")) {
            state = component.long_name;
          }
          if (types.includes("country")) {
            country = component.long_name;
          }
          if (types.includes("postal_code")) {
            postcode = component.long_name;
          }
        });

        setAddress(newAddress);
        handleCountryChange(country);
        handleStateChange(state, country);
        handleCityChange(city, country, state);
        dispatch(
          setFormData({
            address: newAddress,
            street,
            postcode,
          })
        );
      })
      .catch((error) => console.error("Error", error));
  };
  const handleEndDateChange = (date) => {
    if (date) {
      const formattedDate = moment(date).format("DD/MM/YYYY");
      dispatch(setFormData({ endDate: formattedDate }));
    }
  };
  const handleStartDateChange = (date) => {
    if (date) {
      const formattedDate = moment(date).format("DD/MM/YYYY");
      dispatch(setFormData({ startDate: formattedDate }));
    }
  };
  const handleTimeChange = (time, timeString) => {
    dispatch(setFormData({ endTime: timeString }));
  };

  const calanderIcon = <Svgs.calanderIcon />;
  const clockIcon = <Svgs.clockIcon />;

  const agreementOptions = [
    { value: "Exclusive", label: "Exclusive" },
    { value: "Non-Exclusive", label: "Non-Exclusive" },
  ];
  return (
    <>
      <div className="bg-white  rounded- w-full p-4 flex md:flex-row flex-col md:justify-between pt-12">
        <div className="lg:w-[65%] xl:w-[60%] w-full lg:pr-4">
          <h2 className="self-stretch text-[#2C363F] md:text-[28px] text-xl font-extrabold leading-[normal]">
            Edit Property Details
          </h2>
         
          <div className="my-4">
            <label className="text-[#2C363F] text-sm font-semibold leading-[normal]">
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
            <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
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
                      <Svgs.locationsvg />
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
          <div
            className="flex justify-between my-2 mb-6 pointer"
            onClick={handleOpenAddress}
          >
            <label className="self-stretch text-black  text-sm font-semibold leading-[normal]  block">
              Add Manually
            </label>
            <span onClick={handleOpenAddress} className="cursor-pointer">
              {showAddressForm === true ? <Svgs.MoreVert /> : <Svgs.down />}
            </span>
          </div>
          {showAddressForm && (
            <div className="border-b-2 mb-3">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
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
                  <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                    Country
                  </label>
                  <Select
                    options={countryOptions}
                    className="w-full react_select form-input shrink-0 rounded [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                    value={
                      countryOptions &&
                      countryOptions.find(
                        (option) => option.value === country?.value
                      )
                    }
                    onChange={(opt) => handleCountryChange(opt?.label)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                    State
                  </label>
                  <Select
                    options={stateOptions}
                    className="w-full react_select form-input shrink-0 rounded [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                    value={stateOptions.find(
                      (option) => option.value === state?.value
                    )}
                    onChange={(opt) => handleStateChange(opt?.label)}
                  />
                </div>
                <div>
                  <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                    City
                  </label>
                  <Select
                    options={cityOptions}
                    className="w-full react_select form-input shrink-0 rounded [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                    value={cityOptions.find(
                      (option) => option.value === city?.value
                    )}
                    onChange={(opt) => handleCityChange(opt?.label)}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
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
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                Property Type
              </label>
              <Select
                options={propertyOptions}
                className="w-full react_select font-sans font-normal text-base text-[#717171]"
                value={propertyOptions.find(
                  (option) => option.value === formData.propertyType.value
                )}
                onChange={(option) =>
                  dispatch(setFormData({ propertyType: option }))
                }
              />
            </div>
            <div>
              <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                Is it a Strata Property?
              </label>
              <Select
                options={[]}
                className="w-full react_select font-sans font-normal text-base text-[#717171]"
                value={formData.strataProperty}
                onChange={(option) =>
                  dispatch(setFormData({ strataProperty: option }))
                }
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                Bedrooms
              </label>
              <Select
                options={[]}
                className="w-full react_select font-sans font-normal text-base text-[#717171]"
                value={formData.bedrooms}
                onChange={(option) =>
                  dispatch(setFormData({ bedrooms: option }))
                }
              />
            </div>
            <div>
              <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                Bathrooms
              </label>
              <Select
                options={[]}
                className="w-full react_select font-sans font-normal text-base text-[#717171]"
                value={formData.bathrooms}
                onChange={(option) =>
                  dispatch(setFormData({ bathrooms: option }))
                }
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mb-4 items-end">
            <div>
              <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                Property Size
              </label>
              <input
                type="text"
                className="form-input px-2 block w-full h-[50px] shrink-0 rounded border [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                placeholder="e.g. 49968"
                value={formData.propertySize}
                onChange={(e) =>
                  dispatch(setFormData({ propertySize: e.target.value }))
                }
              />
            </div>
            <div>
              <Select
                options={[]}
                className="w-full react_select font-sans font-normal text-base text-[#717171]"
                placeholder={"sqm"}
                value={formData.propertySizeUnit}
                onChange={(option) =>
                  dispatch(setFormData({ propertySizeUnit: option }))
                }
              />
            </div>
            <div>
              <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                Land Size
              </label>
              <input
                type="text"
                className="form-input px-2 block w-full h-[50px] shrink-0 rounded border [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                placeholder="e.g. 49968"
                value={formData.landSize}
                onChange={(e) =>
                  dispatch(setFormData({ landSize: e.target.value }))
                }
              />
            </div>
            <div>
              <Select
                placeholder={"sqm"}
                options={[]}
                className="w-full react_select font-sans font-normal text-base text-[#717171]"
                value={formData.landSizeUnit}
                onChange={(option) =>
                  dispatch(setFormData({ landSizeUnit: option }))
                }
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                No of Living Rooms
              </label>
              <Select
                options={[]}
                placeholder={" e.g. 2"}
                className="w-full react_select font-sans font-normal text-base text-[#717171]"
                value={formData.livingRooms}
                onChange={(option) =>
                  dispatch(setFormData({ livingRooms: option }))
                }
              />
            </div>
            <div>
              <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                Car Parking
              </label>
              <Select
                options={[]}
                placeholder={" e.g. 2"}
                className="w-full react_select font-sans font-normal text-base text-[#717171]"
                value={formData.carParking}
                onChange={(option) =>
                  dispatch(setFormData({ carParking: option }))
                }
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
              Additional Info
            </label>
            <textarea
              className="form-input p-2 block w-full shrink-0 rounded border [background:var(--Primary-Base-White,#FFF)#E4E3E4"
              placeholder="Anything you might want to let the agent know about in advance..."
              rows={6}
              value={formData.additionalInfo}
              onChange={(e) =>
                dispatch(setFormData({ additionalInfo: e.target.value }))
              }
            />
          </div>
        <p className="font-[800] text-[32px] text-[#2C363F]">HOW TO SELL</p>
       
        <div className="mt-4 flex flex-col gap-4">
          <p className="font-sans font-semibold text-[14px] text-black">
            Sales Method
          </p>
          <div className="flex flex-col gap-3">
            <div>
              <label className="inline-flex items-center text-sm font-medium">
                <input
                  type="radio"
                  name="saleType"
                  value="auction"
                  className="w-4 h-4 rounded-full cursor-pointer"
                  onChange={handleRadioChangeSalesMethod}
                  style={{ accentColor: "rgb(255, 191, 0)" }}
                  checked={saleMethod === "auction"}
                />
                <span
                  className={`ml-2 font-sans text-[14px] ${
                    saleMethod === "auction"
                      ? "text-black font-medium"
                      : "text-[#8C8C8C] font-normal"
                  }`}
                >
                  Auction
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm font-medium">
                <input
                  type="radio"
                  name="saleType"
                  value="treaty"
                  className="w-4 h-4 rounded-full cursor-pointer"
                  onChange={handleRadioChangeSalesMethod}
                  style={{ accentColor: "rgb(255, 191, 0)" }}
                  checked={saleMethod === "treaty"}
                />
                <span
                  className={`ml-2 font-sans text-[14px] ${
                    saleMethod === "treaty"
                      ? "text-black font-medium"
                      : "text-[#8C8C8C] font-normal"
                  }`}
                >
                  Private Treaty
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm font-medium">
                <input
                  type="radio"
                  name="saleType"
                  value="recommended"
                  className="w-4 h-4 rounded-full cursor-pointer"
                  onChange={handleRadioChangeSalesMethod}
                  style={{ accentColor: "rgb(255, 191, 0)" }}
                  checked={saleMethod === "recommended"}
                />
                <span
                  className={`ml-2 font-sans text-[14px] ${
                    saleMethod === "recommended"
                      ? "text-black font-medium"
                      : "text-[#8C8C8C] font-normal"
                  }`}
                >
                  Agent to Recommend
                </span>
              </label>
            </div>
          </div>
          <p className="font-sans font-semibold text-[14px] text-black">
            Expected Price Range
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 w-full">
            <div className="flex gap-2 items-center w-full">
              <p className="font-sans font-normal text-[14px] text-black w-[35px]">
                From
              </p>
              <input
                type="number"
                name="minPrice"
                className="h-[50px] border w-full border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                placeholder="$150000"
                value={formData.minPrice}
                onChange={(e) =>
                  dispatch(setFormData({ minPrice: e.target.value }))
                }
              />
            </div>
            <div className="flex gap-2 items-center w-full">
              <p className="font-sans font-normal text-[14px] text-black w-[35px] text-center">
                To
              </p>
              <input
                type="number"
                name="maxPrice"
                className="h-[50px] w-full border border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                placeholder="$500000"
                value={formData.maxPrice}
                onChange={(e) =>
                  dispatch(setFormData({ maxPrice: e.target.value }))
                }
              />
            </div>
          </div>
          <p className="font-sans font-semibold text-[14px] text-black">
            Time Frame to Receive Bids
          </p>
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-3">
              <p className="font-sans font-semibold text-[14px] text-black">
                Start Date
              </p>
              <DatePicker
                suffixIcon={calanderIcon}
                placeholder="dd/mm/yyyy"
                name="startDate"
                className="h-[50px] border w-full border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                onChange={handleStartDateChange}
                format="DD/MM/YYYY"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-sans font-semibold text-[14px] text-black">
                End Date
              </p>
              <DatePicker
                suffixIcon={calanderIcon}
                placeholder="dd/mm/yyyy"
                name="endDate"
                className="h-[50px] border w-full border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                onChange={handleEndDateChange}
                format="DD/MM/YYYY"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-sans font-semibold text-[14px] text-black">
                End Time
              </p>
              <TimePicker
                suffixIcon={clockIcon}
                placeholder="Select time"
                name="endTime"
                className="h-[50px] border w-full border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                onChange={handleTimeChange}
                format="hh:mm A"
                use12Hours
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-sans font-semibold text-[14px] text-black">
                Agency Agreement Type
              </label>

              <Select
                options={agreementOptions}
                className="w-full react_select form-input shrink-0 rounded [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                placeholder="e.g Exclusive"
                value={agreementOptions?.find(
                  (option) => option?.value === formData?.agreementType?.value
                )}
                onChange={(option) =>
                  dispatch(setFormData({ agreementType: option }))
                }
              />
            </div>
          </div>
        </div>
        <div className="pt-12 flex md:flex-row flex-col md:justify-between">
      <div className="flex flex-col gap-4">
        <p className="font-[800] text-[32px] text-[#2C363F]">
          VALIDATE YOU OWN THE PROPERTY
        </p>
        <p className="font-normal text-[14px] text-[#8C8C8C]">
          Please add the following attachments to validate your own property.
        </p>

        {attachments.map((component, index) => (
          <div key={index}>{component}</div>
        ))}

        <div className="flex gap-4 items-center w-full">
          <button
            className="w-[55px] h-[50px] bg-white border border-[#FFBF00] font-normal text-[24px] rounded-[4px] flex flex-col gap-3 justify-center items-center"
            onClick={handleAddAttachment}
          >
            +
          </button>
          <p className="font-sans font-normal text-[18px] text-[#717171]">
            Add more attachments like driver’s licence.
          </p>
        </div>

        <hr />
        <div className="flex gap-4 items-center w-full">
          <div className="w-[55px] h-[50px] bg-white border border-[#FFBF00] rounded-[4px] flex flex-col gap-3 justify-center items-center">
            <span className="cursor-pointer font-normal text-[24px]">+</span>
          </div>
          <p className="font-sans font-normal text-[18px] text-[#717171]">
            You can add up to 3 people’s info.
          </p>
        </div>
        <div>
          <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
            Choose Attachment
          </label>
          <Select
            options={attachmentOptions}
            placeholder="e.g strata notice"
            className="w-full react_select font-sans font-normal text-[14px] text-[#8c8c8c]"
            value={attachmentOptions?.find(
              (option) => option?.value === formData?.attachment?.value
            )}
            onChange={(option) => dispatch(setFormData({ attachment: option }))}
          />
        </div>
        <div className="md:w-[35%] w-full h-[192px] bg-white border border-[#E4E3E4] rounded-[4px] flex flex-col gap-3 justify-center items-center">
          {frontImage ? (
            <img
              src={frontImage}
              alt="Front"
              className="w-full h-full object-cover rounded-[4px]"
            />
          ) : (
            <label className="cursor-pointer flex flex-col items-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setFrontImage)}
                className="hidden"
              />

              <Svgs.plusIcon />
            </label>
          )}
        </div>
      </div>
    
    </div>
        </div>
      </div>
    </>
  );
};

export default EditProperty;
