function Payment({ isBill, serviceTip, onChangeBill }) {
  console.log(isBill);

  const totalBill = isBill + serviceTip;

  // function totalBill() {
  //   isBill + serviceTip
  // }
  return (
    <div className="" style={{ fontWeight: "bold" }}>
      <p>
        you pay ${totalBill} ($ {isBill} + ${serviceTip}tip)
      </p>
    </div>
  );
}

export default Payment;
