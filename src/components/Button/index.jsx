import React from "react";

const Button = ({ text, type }) => {
  return (
    <button
      type={type}
      className="bg-theme-dark-slate-gray hover:shadow-custom hover:bg-gradient-to-r hover:from-pink-500 hover:to-theme-tomato text-white p-3 w-full rounded transition-all duration-100"
    >
      {text}
    </button>
  );
};

export default Button;
