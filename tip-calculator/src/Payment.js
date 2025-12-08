function Payment({ isBill, tipService, onChangeBill }) {
  console.log(isBill);

  const totalBill = isBill + tipService;

  // function totalBill() {
  //   isBill + tipService
  // }
  return (
    <div className="">
      <p>
        you pay ${totalBill} ($ {isBill} + ${tipService}tip)
      </p>
    </div>
  );
}

export default Payment;
