import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {

  useEffect(() => {
    document.body.className !== "overflow-hidden" &&
      document.body.classList.add("overflow-hidden");

    return () => {
      document.body.className = "";
    };
  }, []);

  const goBack = useNavigate();

  const handleClick = () => {
    goBack("/library");
  };

  return (
    <div className="flex flex-col bg-banner bg-center bg-fixed bg-cover bg-no-repeat h-screen items-center gap-14 text-white">
      <div className="text-6xl md:text-7xl mt-28 select-none text-center">
        Oops! Something went wrong!
      </div>
      <button
        className="w-52 rounded-xl bg-black shadow-lg shadow-red-600 p-5 hover:bg-gray-700 text-4xl cursor-pointer"
        onClick={handleClick}
      >
        Go back
      </button>
    </div>
  );
};

export default Error;
