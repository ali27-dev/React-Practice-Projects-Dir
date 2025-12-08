import { useState } from "react";

export default function Service({ serviceTip, setServiceTip, children }) {
  function handleService(e) {
    setServiceTip(Number(e.target.value));
  }
  return (
    <div className="">
      <label>{children}</label>
      <select value={serviceTip} onChange={handleService}>
        <option value={0}>it was dissatisfied ( 0% )</option>
        <option value={5}>it was Okay ( 5% )</option>
        <option value={10}>it was good (10%)</option>
        <option value={20}>Absaloutly Amazing (20%)</option>
      </select>
    </div>
  );
}
