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
  const [counter, setCounter] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + counter);

  // const handlePlus = () => {
  //   if (step >= 0 && step <= 100) {
  //     setStep(step + 1);
  //   }
  // };
  // const handleMinus = () => {
  //   if (step <= 100 && step >= 1) {
  //     setStep(step - 1);
  //   }
  // };

  const handleRest = () => {
    setStep(1);
    setCounter(0);
  };
  return (
    <>
      <div className="step">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <p>{step}</p>
      </div>
      {/* Counter */}
      <div className="counter">
        <button onClick={() => setCounter((c) => c - step)}>-</button>
        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={() => setCounter((c) => c + step)}>+</button>
      </div>
      {/* Date */}
      <div className="date">
        <p>
          <span>
            {counter === 0
              ? "today is"
              : counter > 0
              ? `${counter} days from today is`
              : `${counter} days ago was`}
          </span>{" "}
          <span>{date.toDateString()}</span>{" "}
        </p>
      </div>
      {counter !== 0 || step !== 1 ? (
        <div>
          <button className="rest-btn" onClick={handleRest}>
            Rest
          </button>
        </div>
      ) : null}
    </>
  );
}
// Logic
// function Counter({ step }) {

//   return (
//     <>
//       <div className="counter">

//       </div>
//       <Dates counter={counter} />
//     </>
//   );
// }

// function Dates(props) {
//   return (
//     <>
//       <div className="date"></div>
//       <button className="rest-btn" onClick={handleRest}>
//         Rest
//       </button>
//     </>
//   );
// }
