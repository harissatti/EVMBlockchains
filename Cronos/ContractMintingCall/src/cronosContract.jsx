import React, { useState } from "react";
import { Contract } from "./contract";
import './contract.css'

const CronosContract = ({ web3Obj, userInfo }) => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const addressValues = (e) => {
    setAddress(e.target.value);
  };

  const amountValues = (e) => {
    setAmount(e.target.value);
  };

  const mint = async (e) => {
    e.preventDefault();
    const methods = new web3Obj.eth.Contract(Contract.ABI, Contract.contractAddress);
    const result = await methods.methods.mint(address, amount).send({
      from: userInfo.account,
    });

    // Handle the result or perform any necessary actions
  };

  return (
    <div className="App">
      <h3>Mint Token</h3>
      <form onSubmit={mint}>
        <label>
          user Address:
          <input type="text" value={address} onChange={addressValues} />
        </label>
        <br />
        <label>
          Amount:
          <input type="text" value={amount} onChange={amountValues} />
        </label>
        <br />
        <button type="submit" className="custom-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CronosContract;
