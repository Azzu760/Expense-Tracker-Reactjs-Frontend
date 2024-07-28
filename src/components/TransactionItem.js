import React from "react";
import { FaTrash } from "react-icons/fa";

export const TransactionItem = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        <FaTrash />
      </button>
    </li>
  );
};
