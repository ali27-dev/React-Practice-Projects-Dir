import { useState } from "react";

import Button from "./Button";
import Payment from "./Payment";
import Service from "./Service";

function Bill() {
  const [isBill, setIsBill] = useState(0);
  const [tipService, setTipService] = useState(10);
  console.log(isBill);

  function handleBill(e) {
    setIsBill(Number(e.target.value));
  }
  return (
    <>
      <div className="">
        <span>How much the bill?</span>
        <input type="text" value={isBill} onChange={handleBill} />
      </div>
      <Service tipService={tipService} />
      <Payment isBill={isBill} tipService={tipService} />
      <Button />
    </>
  );
}

export default Bill;
