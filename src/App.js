import React from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import data from "./data/data.json";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

// import Contact from "./pages/Contact"
// import Error from "./pages/Error";
// import Home from "./pages/Home";
// import Library from "./pages/Library";
// import Movie from "./pages/Movie";
// import SubmitConfirm from "./pages/SubmitConfirm";

const Contact = React.lazy(() => import("./pages/Contact"));
const Error = React.lazy(() => import("./pages/Error"));
const Home = React.lazy(() => import("./pages/Home"));
const Library = React.lazy(() => import("./pages/Library"));
const Movie = React.lazy(() => import("./pages/Movie"));
const SubmitConfirm = React.lazy(() => import("./pages/SubmitConfirm"));

function App() {
  // Importing the data here is necessary to also pass it to the search bar located in the header (data flow: parent->child).

  return (
    <div>
      <Header />
      <ScrollToTop>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/library/movie" element={<Movie />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/confirmation" element={<SubmitConfirm />} />
            <Route path="/error" element={<Error />} />
            {/* <Route path="/loader" element={<Loader />} /> */}
          </Routes>
        </Suspense>
      </ScrollToTop>
    </div>
  );
}

export default App;
