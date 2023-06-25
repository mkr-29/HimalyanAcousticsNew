import React, { useState } from "react";

const TeamCard = ({ image, name }) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div
      className="relative bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-lg overflow-hidden w-64 h-64 mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={name} className="w-64 h-64 object-cover" />
      <div
        className={`absolute bottom-0 left-0 transform translate-y-full w-full text-center ${
          show && "translate-y-0"
        } transition-transform duration-200 bg-gradient-to-t from-black text-white p-4 z-10`}
      >
        <h2 className="text-lg font-semibold">{name}</h2>
      </div>
    </div>
  );
};

export default TeamCard;