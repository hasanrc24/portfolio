import React from "react";

const ServiceDetails = ({ title, text, icon }) => {
  return (
    <div className="flex mb-8">
      <div>
        <div className="bg-[#212529] p-5 rounded-lg">{icon}</div>
      </div>
      <div className="ml-4 text-left">
        <h3 className="text-xl font-medium pb-3">{title}</h3>
        <p className="text-white/50">{text}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
