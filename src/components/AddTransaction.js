import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text..."
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative-expense,positive-income){" "}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          ></input>
        </div>
        <button className="btn">
          <div className="button-container">
            <FaPlusCircle className="add-icon" />
            <span> Add Transaction</span>
          </div>
        </button>
      </form>
    </div>
  );
};
