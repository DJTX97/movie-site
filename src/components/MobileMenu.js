import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
// import { useEffect } from "react";
// import { useState } from "react";

const MobileMenu = ({ showMobile }) => {
  // const [touched, setTouched] = useState(false);

  // const handleTouch = () => {
  //   setTouched(!touched);
  // };

  return (
    <div
      className={`flex flex-col items-center fixed top-0 right-0 h-screen md:hidden bg-black/50`}
    >
      <nav className="flex flex-col items-center">
        <button className="px-4 hover:bg-red-800">
          <AiOutlineClose
            size={75}
            color="white"
            className="p-5"
            onClick={showMobile}
          />
        </button>

        <ul className="flex flex-col gap-3 text-white text-xl uppercase text-center">
          <li
            className={`p-3 hover:bg-red-800`}
            // onTouchStart={handleTouch}
          >
            <Link to="/home">Home</Link>
          </li>
          <li className="p-3 hover:bg-red-800">
            <Link to="/library">Library</Link>
          </li>
          <li className="p-3 hover:bg-red-800">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
