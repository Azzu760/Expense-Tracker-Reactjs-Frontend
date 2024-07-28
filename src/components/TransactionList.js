import React from "react";
import { TransactionItem } from "./TransactionItem";

export const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </div>
  );
};
