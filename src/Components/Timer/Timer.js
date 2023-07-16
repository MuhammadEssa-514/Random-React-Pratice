function Timer({ timerDays, timerHours, timerMinutes, timerSeconds }) {
    return (
      <div className="flex justify-between text-center uppercase">
        <div className="bg-[#37474F] p-4 m-3 ml-0 w-[100px]">
          <h1 className="text-[24px]">{timerDays}</h1>
          <h3>Days</h3>
        </div>
        <div className="bg-[#37474F] p-4 m-3 w-[100px]">
          <h1 className="text-[24px]">{timerHours}</h1>
          <h3>Hours</h3>
        </div>
        <div className="bg-[#37474F] p-4 m-3 w-[100px]">
          <h1 className="text-[24px]">{timerMinutes}</h1>
          <h3>Minutes</h3>
        </div>
        <div className="bg-[#37474F] p-4 m-3">
          <h1 className="text-[24px]">{timerSeconds}</h1>
          <h3>Seconds</h3>
        </div>
      </div>
    );
  }
  
  export default Timer;
  