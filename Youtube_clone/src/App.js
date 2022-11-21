// import React from "react";
import "./App.css";
import Header from "./Header";
import Recommendedvideos from "./Recommendedvideos";
import SearchPage from "./SearchPage";
import Sidebar from "./Sidebar";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>


        <Route path="/search/:searchTerm" element={
          <div className="app__page">
            <Sidebar />
            <SearchPage />
          </div>
        }>

        </Route>

        <Route path="/" element={
          <div className="app__page">
            <Sidebar />
            <Recommendedvideos />
          </div>
        }>

        </Route>



      </Routes>

    </div>
  );
}

export default App;
