import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

const MobileMenu = ({ showMobile }) => {
  const [touchedHome, setTouchedHome] = useState(false);
  const [touchedLibrary, setTouchedLibrary] = useState(false);
  const [touchedContact, setTouchedContact] = useState(false);

  const touchHome = () => {
    setTouchedHome(!touchedHome);
    // showMobile()
  };

  const touchLibrary = () => {
    setTouchedLibrary(!touchedLibrary);
    // showMobile()
  };

  const touchContact = () => {
    setTouchedContact(!touchedContact);
    // showMobile()
  };

  // const handleTouchHome = () => {
  //   touchHome()
  //   showMobile()
  // }

  // const handleTouchLibrary = () => {
  //   touchLibrary()
  //   showMobile()
  // }

  // const handleTouchContact = () => {
  //   touchContact()
  //   showMobile()
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      touchedHome === true && setTouchedHome(false);
      touchedLibrary === true && setTouchedLibrary(false);
      touchedContact === true && setTouchedContact(false);
    }, 200);

    return () => {
      clearInterval(interval);

      // console.log(
      //   `Home: ${touchedHome}, Library: ${touchedLibrary}, Contact: ${touchedContact}`
      // );
    };
  }, [touchedHome, touchedLibrary, touchedContact]);

  // useEffect(() => {
  //   touchedHome === true && setTouchedHome(false);
  //   touchedLibrary === true && setTouchedLibrary(false);
  //   touchedContact === true && setTouchedContact(false);
  // }, [touchedHome, touchedLibrary, touchedContact]);

  return (
    <div
      className={`flex flex-col items-center fixed top-0 right-0 h-screen md:hidden bg-black/50`}
    >
      <nav className="flex flex-col gap-5 items-center">
        <button className={`px-4 hover:bg-red-800`} onClick={showMobile}>
          <AiOutlineClose size={80} color="white" className="p-5" />
        </button>

        <ul className="flex flex-col gap-3 w-full text-white text-xl uppercase items-center">
          <li
            className="w-full flex text-center"
            // onClick={showMobile}
            // onTouchStart={touchHome}
            // onTouchEnd={showMobile}
          >
            <Link
              className={`w-full py-4 hover:bg-red-800 ${
                touchedHome === true && "bg-red-800"
              }`}
              to="/"
              onClick={touchHome}
            >
              Home
            </Link>
          </li>
          <li
            className="w-full flex text-center"
            // onClick={showMobile}
            // onTouchStart={touchLibrary}
            // onTouchEnd={showMobile}
          >
            <Link
              className={`w-full py-4 hover:bg-red-800 ${
                touchedLibrary === true && "bg-red-800"
              }`}
              to="/library"
              onClick={touchLibrary}
            >
              Library
            </Link>
          </li>
          <li
            className="w-full flex text-center"
            // onClick={showMobile}
            // onTouchStart={touchContact}
            // onTouchEnd={showMobile}
          >
            <Link
              className={`w-full py-4 hover:bg-red-800 ${
                touchedContact === true && "bg-red-800"
              }`}
              to="/contact"
              onClick={touchContact}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
