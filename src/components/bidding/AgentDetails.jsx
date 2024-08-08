import React from "react";
import AgentImage from '../../assets/images/agent.png'

const agent = {
  name: "Agent Name",
  image: AgentImage, 
  agency: "XYZ",
  coveredAreas: ["XYZ", "XYZ"],
  licenseNumber: "xxxxxxxxxxxxxx",
  licenseInChargeName: "Biraj",
  licenseInChargeNumber: "xxxxxxxxxxx",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  links: [
    "https://khjhjhjhjhla",
    "https://khjhjhjhjhla"
  ]
};

const AgentProfile = () => {
  return (
    <div className="bg-white p-8 border rounded-lg shadow-sm mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-start md:items-center space-x-4 mb-4 md:mb-0">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <img
              src={agent.image}
              alt="Agent"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <h2 className="font-semibold text-xl">{agent.name}</h2>
          
          </div>
        </div>
        <div className="flex items-center">
          <button className="border border-spale_sunshine font-semibold text-sm	text-custom_gray py-2 px-4 rounded-md mr-2">
            Reject
          </button>
          <button className="bg-spale_sunshine font-semibold text-sm	text-custom_gray py-2 px-4 rounded-md">
            Accept
          </button>
        </div>
      </div>
      <div className="mb-4 text-sm text-gray-700 ">
        <p>
          <span className="font-medium text-base	">Agency Name:</span>{" "}
          <span className="font-normal	text-sm	text-gray-500">{agent.agency}</span>
          
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-medium text-base mb-2">Suburb / Covered Area:</h3>
        <ul className="list-disc list-inside font-normal	text-sm	text-gray-500 space-y-1">
          {agent.coveredAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>
      <div className="text-sm text-gray-700 space-y-4 mb-6">
        <p>
          <span className="font-medium text-base">Real Estate License Number:</span>{" "}
          <span className="font-normal	text-sm	 text-gray-500">{agent.licenseNumber}</span>
          
        </p>
        <p>
          <span className="font-medium text-base">License In Charge Name:</span>{" "}
          <span className="font-normal	text-sm	 text-gray-500">{agent.licenseInChargeName}</span>
        </p>
        <p>
          <span className="font-medium text-base">License In Charge Number:</span>{" "}
          <span className="font-normal	text-sm	 text-gray-500">{agent.licenseInChargeNumber}</span>
        </p>
        <p>
          <span className="font-medium text-base">Bio:</span>{" "}
          <span className="font-normal	text-sm	 text-gray-500">{agent.bio}</span>
        </p>
      </div>
    
      <div className="text-sm text-gray-700">
        <h3 className="font-medium text-base mb-2">Links:</h3>
        <ul className="list-decimal list-inside space-y-1">
          {agent.links.map((link, index) => (
            <li key={index}>
              <a
                href={link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AgentProfile;