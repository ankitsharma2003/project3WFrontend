import React, { useState } from "react";
import { GoAlertFill } from "react-icons/go";
import "./Data.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { axiosClient } from "../../utils/axiosClient";

function Data() {
  const [info, setInfo] = useState("");
  const SITE_KEY = "6Ld2N3opAAAAAKM1Dv1lkUbaFHLVEDGB3T87XjV7";

  async function handleSubmit() {
    const result = await axiosClient.post("/data/user", {
      info,
    });
    console.log("result", result);
  }

  const onChange = (value) => {
    console.log(value);
  };
  return (
    <div className="Data">
      <div className="para-text">
        <GoAlertFill className="icon-style" />
        <p className="text">
          Your wallet is connected to Ethereum Kovan, so you are requesting
          Ethereum Kovan Link/ETH
        </p>
      </div>
      <div className="bottom-div">
        <label htmlFor="Wallet">Wallet Address</label>
        <input
          type="text"
          id="Wallet"
          onChange={(e) => setInfo(e.target.value)}
          placeholder="Your Wallet Address..."
          required
        />

        <label htmlFor="request">Request Type</label>
        <div className="input-style">
          <input
            type="none"
            id="request"
            value="20 Test Link"
            readOnly={true}
          />
          <input type="none" value="0.5 ETH" readOnly={true} />
        </div>

        <div className="recaptcha">
          <ReCAPTCHA sitekey={SITE_KEY} onChange={onChange} />
        </div>
        <button className="button-style" onClick={handleSubmit}>
          Send Request
        </button>
      </div>
      <div className="history">
        <div className="header">
          <h2>Request History</h2>
          <button className="eth-style">ETH Transaction History</button>
        </div>
        <div className="info">
          <ul>
            <li>{info}</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <p>© copyright 2024 - All Right Reserved by Faucet</p>
      </div>
    </div>
  );
}

export default Data;
