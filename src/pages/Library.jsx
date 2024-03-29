import React from "react";
import Card from "../components/Card";
import data from '../data/data.json'
// import { movies } from "../state/state";


const Library = () => {
  // useEffect(() => {
  //   document.body.className !== "overflow-auto" &&
  //     document.body.classList.add("overflow-auto");

  //   return () => {
  //     document.body.className = "";
  //   };
  // }, []);

  const movies = data.movies

  // bg-fixed makes bg image scroll with the page (infinite scroll illusion); height property is usually not required with it.

  return (
    <>
      <div className="bg-banner bg-cover bg-center bg-fixed bg-no-repeat">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center pt-10">
          {movies.map((movie) => {
            return (
              <Card key={movie.id} name={movie.title} image={movie.posterUrl} actors={movie.actors} plot={movie.plot} year={movie.year} genres={movie.genres}/>
            );
            // console.log(movie)
          })}
        </div>
      </div>
    </>
  );
};

export default Library;
