import React from "react";
import { GrSearch } from "react-icons/gr";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import data from "../data/data.json";

const SearchBar = () => {
  // 'movies' object
  const movies = data.movies;

  //Array of movies inside 'movies' object
  // const movieList = movies.map((movie) => {
  //   return movie.title;
  // });

  const search = useNavigate();

  const seeResult = () => {
    const selection = movies.filter((movie) => {
      return movie.title === value && movie.title;
    });

    // console.log(selection[0]);
    selection[0] !== undefined
      ? search("library/movie", {
          state: {
            name: selection[0].title,
            actors: selection[0].actors,
            plot: selection[0].plot,
            genres: selection[0].genres.join(", "),
          },
        })
      : search("/error");

    setValue("");
  };

  // input value state
  const [value, setValue] = useState("");

  // event listener for tracking and storing input value to state
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // searcher function that matches the input value with names from api
  const getSearch = (searchTerm) => {
    setValue(searchTerm);
    return value;
  };

  // Autofocus input functionality: define 'ref' for input field and add onClick event in selection divs.
  const inputRef = useRef(null);

  // clears input field when clicked
  const clearInput = (e) => {
    setValue("");
    // console.log(!movieList.includes(value));
    // console.log(e.target.select() === false)
  };

  const [touchedSearch, setTouchedSearch] = useState(false);

  const touchSearch = () => {
    setTouchedSearch(!touchedSearch);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      touchedSearch === true && setTouchedSearch(false);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [touchedSearch]);

  return (
    <>
      <div className="flex md:pr-10">
        <button
          type="button"
          className={`bg-white rounded-l-3xl pr-2 my-5 hover:bg-gray-300 ${
            touchedSearch && "bg-gray-300"
          }`}
          onTouchStart={touchSearch}
        >
          <GrSearch className="ml-3" size={20} onClick={seeResult} />
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={handleChange}
          onClick={(e) => {
            clearInput(e);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && seeResult();
          }}
          ref={inputRef}
          className="w-28 sm:w-full rounded-r-3xl px-2 my-5 text-lg outline-none border-none text-black"
        />
      </div>

      {/* dropdown of search results */}
      {/* filter - matches user input with api results */}
      {/* slice - for displaying only first e.g. 10 results in case there are too many */}
      {/* map - loops over api data and renders results */}
      <div
        className={`flex flex-col rounded-lg fixed top-14 right-32 md:top-14 md:right-14 text-lg bg-white text-black ${
          value !== "" && "border border-black"
        }`}
      >
        {movies
          .filter((movie) => {
            const searchTerm = value.toLowerCase();
            const name = movie.title.toLowerCase();

            return (
              searchTerm && name.startsWith(searchTerm) && name !== searchTerm
            );
          })
          .slice(0, 10)
          .map((movie) => (
            <div
              className="w-48 rounded-lg border md:border-none pl-2 py-2 md:py-1 hover:bg-gray-300 cursor-pointer"
              key={movie.id}
              onClick={() => {
                getSearch(movie.title);
                inputRef.current.focus();
              }}
            >
              {movie.title}
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchBar;
