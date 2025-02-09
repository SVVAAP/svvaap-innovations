import React from "react";
import logo from "../img/logo_light.png";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      {/* add logo */}
      <img src={logo} alt="Logo" className="w-auto h-20 mb-4" />
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
      <h2 className="text-white">#SketchYouVisionToReality</h2>
    </div>
  );
};

export default Loader;