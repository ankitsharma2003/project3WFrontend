import React from "react";
import "./Navbars.scss";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Navbars() {
  const navigate = useNavigate();
  return (
    <div className="Navbars">
      <div className="left-nav">
        <h2>Faucets</h2>
      </div>
      <div className="rigth-left">
        <div className="border-class">
          <div className="first-button">Ethereum Kovan</div>
        </div>
        <div className="border-class-second">
          <div className="second-button">Connect Wallet</div>
        </div>
        <div className="icon-butt" onClick={() => navigate("/login")}>
          <CgProfile />
        </div>
      </div>
    </div>
  );
}

export default Navbars;
