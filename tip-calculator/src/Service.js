import { useState } from "react";

export default function Service({ serviceTip, setServiceTip, children }) {
  function handleService(e) {
    setServiceTip(Number(e.target.value));
  }
  return (
    <div className="">
      <span>{children}</span>
      <select onChange={handleService}>
        <option value={0}>
          it was good ({handleService === 10 ? 0 : serviceTip + 10}%)
        </option>
        <option value={0}>
          it was normal ({handleService === 10 ? 0 : serviceTip - 5}%)
        </option>
        <option value={serviceTip}>it was bad ({serviceTip}%)</option>
        <option value={serviceTip + 20}>
          Absaloutly Amazing ({serviceTip}%)
        </option>
      </select>
      {/* <FriendSer serviceTip={serviceTip} onHandleService={handleService} /> */}
    </div>
  );
}

// function FriendSer({ serviceTip, onHandleService }) {
//   return (
//     <div className="">
//       <span>How did your friend like the service?</span>
//       <select name="" id="" onChange={onHandleService}>
//         <option value={0}>
//           it was good ({onHandleService === 10 ? 0 : serviceTip + 10}%)
//         </option>
//         <option value={10}>
//           it was normal ({onHandleService === 10 ? 0 : serviceTip - 5}%)
//         </option>
//         <option value={serviceTip}>it was bad ({serviceTip}%)</option>
//         <option value={serviceTip + 20}>
//           Absaloutly Amazing ({serviceTip}%)
//         </option>
//       </select>
//     </div>
//   );
// }
