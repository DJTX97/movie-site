import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

import logo from "../assets/images/logo.png";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import NormalMenu from "./NormalMenu";

const Header = () => {
  // 'active' is the mobile menu state and 'isMobile' is the screen size state ('isMobile' is not mandatory.).
  const [active, setActive] = useState(false);
  // const [isMobile, setMobile] = useState(false);

  // onClick function that toggles 'active' state of mobile menu.
  const showMobile = () => {
    setActive(!active);
    // console.log(active);
  };

  // Performs state checks on the mobile menu and the screen size in order to stop the mobile menu from staying open even after resizing the screen (without this the only way to close it is to click the 'X').
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setActive(false);
        // setMobile(false);
      }
      // else if (window.innerWidth < 768) {
      //   setMobile(true);
      // }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // z-index forces element to appear in front of others with lower index than themselves (issue with cards popping over sticky header)
  return (
    <div className="flex sticky top-0 bg-black text-white text-2xl shadow-lg shadow-red-600 z-[1] justify-between">
      <div className="pr-5">
        <Link to="/">
          <img src={logo} width="50vw" className="ml-5 mt-2 mb-1" alt="" />
        </Link>
      </div>

      <div className="flex flex-row-reverse md:flex-row gap-20">
        <NormalMenu />
        <SearchBar />
      </div>

      {/* Hidding hamburger menu when opening the mobile menu is necessary to avoid visual overlap. */}
      <button
        className={`md:hidden ${active && "invisible"}`}
        onClick={showMobile}
      >
        <GiHamburgerMenu
          size={70}
          color="white"
          className="p-1 mx-3 cursor-pointer"
        />
      </button>

      {active && <MobileMenu showMobile={showMobile} />}
    </div>
  );
};

export default Header;
