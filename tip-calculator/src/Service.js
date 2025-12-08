import { useState } from "react";

export default function Service({ tipService }) {
  return (
    <div className="">
      <span>How did you like the service?</span>
      <select name="" id="">
        <option value="good">it was good ({tipService}%)</option>
        <option value="noraml">it was normal ({tipService - 5}%)</option>
        <option value="bad">it was bad ({tipService - 10}%)</option>
      </select>
      <FriendSer tipService={tipService} />
    </div>
  );
}

function FriendSer({ tipService }) {
  return (
    <div className="">
      <span>How did your friend like the service?</span>
      <select name="" id="">
        <option value="good">it was good ({tipService + 10}%)</option>
        <option value="noraml">it was normal ({tipService}%)</option>
        <option value="bad">it was bad ({tipService - 5}%)</option>
      </select>
    </div>
  );
}
