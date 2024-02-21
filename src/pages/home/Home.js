import React from "react";
import "./Home.scss";
import Navbars from "../navbars/Navbars";
import Info from "../../components/info/Info";
import Data from "../../components/data/Data";

function Home() {
  return (
    <div className="Home">
      <Navbars />
      <Info />
      <Data />
    </div>
  );
}

export default Home;
