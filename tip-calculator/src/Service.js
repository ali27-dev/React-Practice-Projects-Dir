export default function Service() {
  return (
    <div className="">
      <span>How did you like the service?</span>
      <select name="" id="">
        <option value="good">it was good (10%)</option>
        <option value="noraml">it was normal (5%)</option>
        <option value="bad">it was bad (0%)</option>
      </select>
      <FriendSer />
    </div>
  );
}

function FriendSer() {
  return (
    <div className="">
      <span>How did your friend like the service?</span>
      <select name="" id="">
        <option value="good">it was good (20%)</option>
        <option value="noraml">it was normal (10%)</option>
        <option value="bad">it was bad (5%)</option>
      </select>
    </div>
  );
}
