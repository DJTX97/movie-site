import React from "react";
import { Link } from "react-router-dom";

const NormalMenu = () => {
  return (
    <nav className="hidden md:flex flex-row-reverse md:flex-row items-center">
      <ul className="flex space-x-5">
        <li className="p-3 font-bold hover:bg-gray-700 transition-color duration-200">
          <Link to="/">Home</Link>
        </li>
        <li className="p-3 font-bold hover:bg-gray-700 transition-color duration-200">
          <Link to="/library">Library</Link>
        </li>
        <li className="p-3 font-bold hover:bg-gray-700 transition-color duration-200">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NormalMenu;
