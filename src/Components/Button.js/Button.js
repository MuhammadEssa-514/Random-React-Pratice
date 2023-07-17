import React from "react";
const Button = ({ label, width, height, variants }) => {
  return (
    <div>
      {/* {variants === "primary" && (
        <button
          className={`${width} ${height} bg-[#0C50CA] hover:bg-[#336ECC] rounded text-center text-[#FFFFFF]  font-[Poppins] font-semibold leading-4 text-[18px] uppercase flex justify-center content-center items-center `}
        >
          {label}
        </button>
      )}
      {variants === "secondary" && (
        <button
          className={`${width} ${height} bg-[#FFFFFF] border-2 border-[#0C50CA] rounded text-center text-[#0C50CA]  font-[Poppins] font-semibold leading-4 text-[18px] uppercase flex justify-center content-center items-center`}
        >
          // {label}
        </button>
      )} */}

      <div className="buttons">
        {/* shuter left to right */}
      <button className="
       relative
       py-2.5
       px-5
       before:absolute
       before:left-0
       before:top-0
       before:-z-10
       before:h-full
       before:w-full
      //before:origin-top-left//is ko on karna sa slide left sa right ki taraf hota ha
       before:scale-x-0
     before:bg-green-400
       before:duration-300
     hover:text-red-700
       before:hover:scale-x-100
      ">
        button
      </button>
        {/* shuter top to down */}
        <button className="relative border-2 font-medium border-gray-800 bg-transparent py-2.5 px-5 uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100">
        button
      </button>

      {/* ppoup */}
      <button className="
      relative 
      font-medium 
      py-2.5
      px-5 
      uppercase 
      text-white 
      transition-colors
      before:content:[''] 
      before:absolute 
      before:inset-0 
      before:w-full
      before:h-full
      before:border-2
      before:border-transparent
      before:hover:border-gray-700 
      before:hover:top-1 
      before:hover:left-1 
      before:-z-10 
      before:translate-all">
        button
      </button>

        
        <button className="before:hover:scale-x-0 relative px-3 py-2 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-red-600 before:hover:bg-blue-700 before:duration-1000 before:hover:rounded-full ">Random</button>
      </div>
      
    </div>
    
  );
};
export default Button;
