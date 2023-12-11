import "./styles.css"
import { useState } from "react";
function App() {
   const [count, setCount] = useState(0);
   const [step, setStep] = useState(1);
     const date = new Date();
     date.setDate(date.getDate() + count);
    // const [message, setmessage] = useState("");
    // if(count === 0 )
    //  setmessage("Todays date is ");
    // else if(count>0) 
    // {
    //   let ch=`${count} days from today is`; 
    //   setmessage(ch);
    // }
    // else if(count < 0)
    // {
    //   let ch = `${count} days ago was`;
    //   setmessage(ch);
    // }
   function increaseCount()
   { 
      setCount((c)=>c+step);
   }
   function decreaseCount()
   {
      setCount((c)=>c-step); //
   }
   function increaseStep()
   {
      setStep((s)=>s+1);
   }
   function decreaseStep()
   {
      setStep((s)=>s-1);
   }
  return (
    <>
      <div className="step">
        <button className="btn" onClick={increaseStep}>
          +
        </button>
        <p>Step:{` ${step}`}</p>
        <button className="btn" onClick={decreaseStep}>
          -
        </button>
      </div>
      <div className="count">
        <button className="btn" onClick={increaseCount}>
          +
        </button>
        <p>Count:{` ${count}`}</p>
        <button className="btn" onClick={decreaseCount}>
          -
        </button>
      </div>
      {/* <p>{message}</p> */}
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
    

export default App;
