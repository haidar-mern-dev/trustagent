import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import Svgs from "../../../../assets/svgs";
import { City, Country, State } from "country-state-city";
import { setFormData } from "../../../../redux/formSlice";

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
const satrataOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
];

const BedBathOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
];
const unitSize = [
    { value: "sqm", label: "sqm" },
    { value: "ft", label: "ft" },
];

const AgencyDetails = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.form.formData);

    const [address, setAddress] = useState(formData.address || "");
    const [propertyFor, setPropertyFor] = useState(formData.propertyFor || "");
    const [country, setCountry] = useState(formData.country);
    const [state, setState] = useState(formData.state || "");
    const [city, setCity] = useState(formData.city || "");
    const [showAddressForm, setShowAddressForm] = useState(false);

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
        const value = e.target.value;
        setPropertyFor(value);
        dispatch(setFormData({ propertyFor: value }));
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

    return (
        <>
            <div className=" flex md:flex-row flex-col md:justify-between pt-16">
                <div className="lg:w-[65%] xl:w-[45%] w-full lg:pr-4">
                    <h2 className="self-stretch text-[#2C363F] md:text-[28px] text-xl font-extrabold leading-[normal]">
                        AGENCY DETAILS
                    </h2>
                    <p className="self-stretch text-[#8C8C8C] text-base font-normal leading-[normal] my-3">
                        Please enter your agency’s details
                    </p>


                    <div className="mb-4 mt-4">
                        <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                            Suburb / Area Covered
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
                                                placeholder: "Enter a location",
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
                    {/* <div
                        className="flex justify-between my-2 mb-6 pointer"
                        onClick={handleOpenAddress}
                    >
                        <label className="self-stretch text-black  text-sm font-semibold leading-[normal]  block">
                            Add Manually
                        </label>
                        <span onClick={handleOpenAddress} className="cursor-pointer">
                            {showAddressForm === true ? <Svgs.MoreVert /> : <Svgs.down />}
                        </span>
                    </div> */}
                    {/* {showAddressForm && (
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
                    )} */}
                    <div className="w-[55px] h-[50px] bg-white border border-[#E4E3E4] rounded-[4px] flex flex-col gap-3 justify-center items-center">

                        <label className="cursor-pointer flex flex-col items-center">
                            <input
                                type="file"
                                accept="image/*"
                                // onChange={(e) => handleImageUpload(e, setAdditionalImage)}
                                className="hidden"
                            />
                            <Svgs.SmallPlus />
                        </label>

                    </div>



                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4 items-end mt-4">
                        <div>
                            <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                                Agency Name
                            </label>
                            <input
                                type="text"
                                className="form-input px-2 block w-full h-[50px] shrink-0 rounded border [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                                placeholder="e.g lorem ipsum"
                                name="agencyname"

                            />
                        </div>

                        <div>
                            <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                                Real Estate License Number
                            </label>
                            <input
                                type="number"
                                className="form-input px-2 block w-full h-[50px] shrink-0 rounded border [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                                placeholder="e.g xxxxxxxxxxxx"
                                name="liscenceNo"

                            />
                        </div>
                        <div>
                            <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                                License In charge (Name)
                            </label>
                            <input
                                type="text"
                                className="form-input px-2 block w-full h-[50px] shrink-0 rounded border [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                                placeholder="e.g Deven"
                                name="inchargeName"

                            />
                        </div>

                        <div>
                            <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                                License In charge (Number)
                            </label>
                            <input
                                type="number"
                                className="form-input px-2 block w-full h-[50px] shrink-0 rounded border [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                                placeholder="e.g xxxxxxxxxxxx"
                                name="inchargeNo"

                            />
                        </div>

                    </div>

                    <div className="w-[87px] h-[84px] bg-white border border-[#E4E3E4] rounded-[4px] flex flex-col gap-3 justify-center items-center">

                        <label className="cursor-pointer flex flex-col items-center">
                            <input
                                type="file"
                                accept="image/*"
                                // onChange={(e) => handleImageUpload(e, setAdditionalImage)}
                                className="hidden"
                            />
                            <Svgs.cameraIcon2 />
                        </label>

                    </div>

                    <div className="mb-4 mt-4">
                        <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                            Add Bio
                        </label>
                        <textarea
                            className="form-input p-2 block w-full shrink-0 rounded h-[72px] border [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                            placeholder="Write..."
                            rows={6}

                        />
                    </div>
                    <div className="mb-4 mt-4">
                        <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
                            Add Links
                        </label>
                        <input
                            type="text"
                            className="form-input p-2 block w-full shrink-0 rounded h-[50px] border [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                            placeholder="e.g https//"

                        />
                    </div>

                    <div className="w-[55px] h-[50px] bg-white border border-[#E4E3E4] rounded-[4px] flex flex-col gap-3 justify-center items-center">

                        <label className="cursor-pointer flex flex-col items-center">
                            <input
                                type="file"
                                accept="image/*"
                                // onChange={(e) => handleImageUpload(e, setAdditionalImage)}
                                className="hidden"
                            />
                            <Svgs.SmallPlus />
                        </label>

                    </div>


                </div>


            </div>
        </>
    );
};

export default AgencyDetails;
