import React from "react";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import Card from "@Components/common/card";

import "./style.css";

const TransactionDetails = () => {
  const costs = useSelector((state) => state.costs);

  const [inputTransaction, setInputTransaction] = useState(0);
  const [outputTransaction, setOutputTransaction] = useState(0);
  const [totalTransaction, setTotalTransaction] = useState(0);

  useEffect(() => {
    setInputTransaction(
      costs
        .filter((item) => item.transactionType === "up")
        .map((item) => parseInt(item.price))
        .reduce((a, b) => a + b, 0),
    );

    setOutputTransaction(
      costs
        .filter((item) => item.transactionType === "down")
        .map((item) => parseInt(item.price))
        .reduce((a, b) => a + b, 0),
    );

    setTotalTransaction(inputTransaction - outputTransaction);
  }, [costs, outputTransaction, inputTransaction]);

  return (
    <div className="user-details">
      <Card color="grey">
        <div className="user-detail-header">
          <span>Enter</span>
          <span>
            <img
              src={require("../../../assets/icons/arrow-circle-up-regular.png")}
              alt="icon"
            />
          </span>
        </div>
        <div className="user-detail-body">
          R$ {inputTransaction.toLocaleString()}
        </div>
      </Card>
      <Card color="grey">
        <div className="user-detail-header">
          <span>Output</span>
          <span>
            <img
              src={require("../../../assets/icons/arrow-circle-down-regular.png")}
              alt="icon"
            />
          </span>
        </div>
        <div className="user-detail-body">
          R$ {outputTransaction.toLocaleString()}
        </div>
      </Card>
      <Card color={totalTransaction >= 0 ? "green" : "red"}>
        <div className="user-detail-header">
          <span>Total</span>
          <span>
            <img
              src={require("../../../assets/icons/currency-dollar-regular.png")}
              alt="icon"
            />
          </span>
        </div>
        <div className="user-detail-body">
          R$ {totalTransaction.toLocaleString()}
        </div>
      </Card>
    </div>
  );
};

export default TransactionDetails;
