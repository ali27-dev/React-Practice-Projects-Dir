function Payment({ isBill, serviceTip, tip, onChangeBill }) {
  console.log(isBill);

  const totalBill = isBill + serviceTip;

  // function totalBill() {
  //   isBill + serviceTip
  // }
  return (
    <div className="" style={{ fontWeight: "bold" }}>
      <p>
        you pay ${totalBill} ($ {isBill} + ${tip} tip)
      </p>
    </div>
  );
}

export default Payment;
