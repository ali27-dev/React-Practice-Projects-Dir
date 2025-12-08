import { useState } from "react";

import Bill from "./Bill";
import Button from "./Button";
import Payment from "./Payment";
import Service from "./Service";
function TipCalculator() {
  const [isBill, setIsBill] = useState(0);
  const [serviceTip, setServiceTip] = useState(0);

  function handleBill(e) {
    setIsBill(Number(e.target.value));
  }
  function handleRestBtn() {
    setIsBill(0);
    setServiceTip(0);
  }
  return (
    <>
      <Bill isBill={isBill} onIsBill={handleBill} />
      <Service serviceTip={serviceTip} setServiceTip={setServiceTip}>
        How did you like the service?
      </Service>
      <Service serviceTip={serviceTip} setServiceTip={setServiceTip}>
        How did your friend like the service?
      </Service>
      <Payment isBill={isBill} serviceTip={serviceTip} />
      <Button onRestBtn={handleRestBtn} />
    </>
  );
}

export default TipCalculator;
