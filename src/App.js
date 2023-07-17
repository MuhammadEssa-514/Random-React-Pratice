// import Home from './Components/Home';
// import Navbar from './Components/Navbar';
// import Timer from './Components/Timer/Timer';
import React, { useState, useEffect } from "react";
// import TodoApp from './Components/TodoApp/TodoApp';
// import Button from './Components/Button.js/Button';
import HandShow from './Components/HandShow/HandShow';


function App() {
  // const [timerDays, setTimerDays] = useState();
  // const [timerHours, setTimerHours] = useState();
  // const [timerMinutes, setTimerMinutes] = useState();
  // const [timerSeconds, setTimerSeconds] = useState();

  // const startTimer = () => {
  //   const countDownDate = new Date("May 30,2024 ").getTime();

  //    setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countDownDate - now;
  //     const days = Math.floor(distance / (24 * 60 * 60 * 1000));
  //     const hours = Math.floor(
  //       (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (60 * 1000)) / 1000);
  //     if (distance < 0) {
  //       {
  //         alert("this is end");
  //       }
  //     } else {
  //       setTimerDays(days);
  //       setTimerHours(hours);
  //       setTimerMinutes(minutes);
  //       setTimerSeconds(seconds);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   startTimer();
  // });
  return (
   <>
   <h1>hellow salam muhammad sultani</h1>
   <p>hey i a muhammad essa hope you all are fine i beg to say that i cannot came to school due to some important work</p>
   <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea magnam veritatis explicabo!</h2>
   <strong>important</strong>
 <ul>
  <li>Home</li>
  <li>ABout</li>
  <li>service</li>
  <li>dds</li>


  
{/*/* timer start here */}
{/* <div className="flex justify-between ">
              <Timer
                timerDays={timerDays}
                timerHours={timerHours}
                timerMinutes={timerMinutes}
                timerSeconds={timerSeconds}
              />
 </div>
 /* timer end here  */}

 
 </ul>
   {/* <Navbar/>
   <Home/>
   <Timer/>
   <TodoApp/> */}
   {/* <Button label="Login / Signup" height={"h-[60px]"} width={"w-[196px]"} variants="primary"/> */}
   {/* <Button/> */}
    <HandShow/>
   </>
  );
}

export default App;
