import React from "react";

const TestimonialCard = ({ data }) => {
  return (
    <div className="bg-[#111418] p-8 rounded-lg mx-2 text-left">
      <h3 className="text-lg">{data.name}</h3>
      <h5 className="font-normal text-text-color mb-3">{data.about}</h5>
      <p>{data.review}</p>
    </div>
  );
};

export default TestimonialCard;
