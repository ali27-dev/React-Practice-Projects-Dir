function Bill({ isBill, onIsBill }) {
  return (
    <>
      <div className="">
        <span>How much the bill?</span>
        <input
          type="text"
          placeholder="Enter your bill"
          value={isBill}
          onChange={onIsBill}
        />
      </div>
    </>
  );
}

export default Bill;
