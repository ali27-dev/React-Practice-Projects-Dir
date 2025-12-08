function Payment({ isBill, onChangeBill }) {
  console.log(isBill);

  return (
    <div className="">
      <p>you pay $92 ($ {isBill} + $12 tip)</p>
    </div>
  );
}

export default Payment;
