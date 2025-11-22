import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Step />
    </div>
  );
}
function Step() {
  const [step, setStep] = useState(1);

  const handlePlus = () => {
    if (step >= 0 && step <= 100) {
      setStep(step + 1);
    }
  };
  const handleMinus = () => {
    if (step <= 100 && step >= 1) {
      setStep(step - 1);
    }
  };
  return (
    <>
      <div className="step">
        <button onClick={handleMinus}>-</button>
        <p>step:{step}</p>
        <button onClick={handlePlus}>+</button>
      </div>
      <Counter step={step} />
    </>
  );
}
// Logic
function Counter({ step }) {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter(counter + step);
  };
  const handleMinus = () => {
    setCounter(counter - step);
  };
  return (
    <>
      <div className="counter">
        <button onClick={handleMinus}>-</button>
        <p>Counter:{counter}</p>
        <button onClick={handlePlus}>+</button>
      </div>
      <Dates counter={counter} />
    </>
  );
}

function Dates(props) {
  // const [days, setDays] = useState([
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ]);
  const date = new Date();
  date.setDate(date.getDate() + props.counter);
  // const handleDays = () => {
  //   setDays();
  // };
  // const dayOfWeek = days[currDay];
  // const newDate = new Date().toLocaleDateString();
  return (
    <>
      <div className="date">
        <p>
          <span>
            {props.counter === 0
              ? "today is"
              : props.counter > 0
              ? `${props.counter} days from today is`
              : `${props.counter} days ago was`}
          </span>{" "}
          <span>{date.toDateString()}</span>{" "}
        </p>
      </div>
    </>
  );
}
