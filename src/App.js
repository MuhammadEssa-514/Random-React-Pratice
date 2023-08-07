import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Timer from './Components/Timer/Timer';
import React, { useState, useEffect, createContext } from "react";
import TodoApp from './Components/TodoApp/TodoApp';
import Button from './Components/Button.js/Button';
import HandShow from './Components/HandShow/HandShow';
import UseState from './Components/Hooks/UseState';
import UseEffect from './Components/Hooks/UseEffect';
import UseContext from './Components/Hooks/UseContext';

const data=createContext();
const data1=createContext();

function App() {
  const name="MuhammadEssa"
  const age =14

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const startTimer = () => {
    const countDownDate = new Date("May 30,2024 ").getTime();

     setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        {
          alert("this is end");
        }
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
   <>
   <h1>hellow salam muhammad sultani</h1>
   <p>hey i a muhammad essa hope you all are fine i beg to say that i cannot came to school due to some important work</p>
   <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea magnam veritatis explicabo!</h2>
   <strong>important</strong>
 <ul>
  
  <li>ABout</li>
  <li>service</li>
  <li>dds</li>

  <ol>
  
  

    <li>abid a bamar</li>
    <li>baqar</li>
    <li>jafar a sadiq</li>
    <li>mosa kazim</li>
    <li>ali raza</li>
    <li>ali naqi</li>
    <li>taqi</li>
    <li>hasaan asghari</li>
    <li>imam a zaman </li>
    <li>fatima</li>
    <li>zainab</li>
    <li>sultan muhammad essa</li>


  </ol>
  


  
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
   {/* <Button label="Login / Signup" height={"h-[60px]"} width={"w-[196px]"} variants="primary"/>  */}
    <Button/>
    <HandShow/>
    {/* <UseState/> */}
    {/* <UseEffect/> */}

      {/* this small piece of code is just for usecontext start==== */}
  <data.Provider value={name}>
    <data1.Provider value={age}>
        <UseContext/>
    </data1.Provider>
  </data.Provider>
  {/* this small piece of code is just for usecontext end===== */}

   </>
  );
}

export default App;
export {data,data1};
