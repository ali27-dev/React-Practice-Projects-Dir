import { useState } from "react";

import Bill from "./Bill";
import Button from "./Button";
import Payment from "./Payment";
import Service from "./Service";
function TipCalculator() {
  const [isBill, setIsBill] = useState("");
  const [serviceTip, setServiceTip] = useState(0);
  const [serviceTip2, setServiceTip2] = useState(0);

  function handleBill(e) {
    setIsBill(Number(e.target.value));
  }

  const tip = isBill * ((serviceTip + serviceTip2) / 2 / 100);
  function handleRestBtn() {
    setIsBill("");
    setServiceTip(0);
    setServiceTip2(0);
  }
  return (
    <>
      <Bill isBill={isBill} onIsBill={handleBill} />
      <Service serviceTip={serviceTip} setServiceTip={setServiceTip}>
        How did you like the service?
      </Service>
      <Service serviceTip={serviceTip2} setServiceTip={setServiceTip2}>
        How did your friend like the service?
      </Service>
      {isBill && (
        <>
          <Payment isBill={isBill} serviceTip={serviceTip} tip={tip} />
          <Button onRestBtn={handleRestBtn} />
        </>
      )}
    </>
  );
}

export default TipCalculator;
