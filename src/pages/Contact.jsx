import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const confirm = useNavigate();

  const [content, setContent] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    // console.log(content)

    // Prevents page refresh to avoid losing state data.
    e.preventDefault();

    confirm("confirmation", {
      state: content,
    });
  };

  const [touchedSubmit, setTouchedSubmit] = useState(false);

  const touchSubmit = () => {
    setTouchedSubmit(!touchedSubmit);
  };

  return (
    <div className="flex flex-col bg-banner bg-cover bg-center bg-fixed bg-no-repeat justify-center items-center">
      <div className="rounded-xl w-5/6 bg-black shadow-lg shadow-red-600 mt-20 py-5 text-white text-5xl md:text-7xl text-center">
        Give us your feedback!
      </div>

      <form
        className="flex flex-col space-y-10 w-3/4 mt-20 text-white text-4xl mb-36"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <p className="rounded-xl bg-black shadow-lg shadow-red-600 p-5">
            Name
          </p>
          <input
            type="text"
            placeholder="Enter your name..."
            value={content.name}
            onChange={(e) => setContent({ ...content, name: e.target.value })}
            className="rounded-md p-3 pl-2 m-3 ml-1 text-xl outline-none border-none text-black"
          />
        </div>

        <div className="flex flex-col">
          <p className="rounded-xl bg-black shadow-lg shadow-red-600 p-5">
            Email
          </p>

          <input
            type="text"
            placeholder="Enter your email..."
            value={content.email}
            onChange={(e) => setContent({ ...content, email: e.target.value })}
            className="rounded-md p-3 pl-2 m-3 ml-1 text-xl outline-none border-none text-black"
          />
        </div>

        <div className="flex flex-col">
          <p className="rounded-xl bg-black shadow-lg shadow-red-600 p-5">
            Message
          </p>
          <textarea
            placeholder="Write your message..."
            value={content.message}
            onChange={(e) =>
              setContent({ ...content, message: e.target.value })
            }
            className="rounded-md h-40 p-3 pl-2 m-3 ml-1 text-xl outline-none border-none text-black"
          ></textarea>
        </div>

        <div className="flex flex-col items-center">
          <input
            type="submit"
            value="Submit"
            onTouchStart={touchSubmit}
            className={`w-52 rounded-xl bg-black shadow-lg shadow-red-600 p-5 hover:bg-gray-700 transition-color duration-200 cursor-pointer ${
              touchedSubmit && "bg-gray-700"
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
