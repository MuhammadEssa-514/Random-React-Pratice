import React, { useState } from 'react';
import essa from "../../images/essa.jpeg"
import nature from "../../images/download.jpeg"

function HandShow() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const toggleVisibility = (id) => {
    if (id === 1) {
      setIsVisible1(!isVisible1);
      setIsVisible2(false);
      setIsVisible3(false);
    } else if (id === 2) {
      setIsVisible1(false);
      setIsVisible2(!isVisible2);
      setIsVisible3(false);
    } else if (id === 3) {
      setIsVisible1(false);
      setIsVisible2(false);
      setIsVisible3(!isVisible3);
    }
  };

  return (
    <>
      <div style={{ display: isVisible1 ? 'block' : 'none' }}>
        <p>This is my DIV element 1.</p>
        <img  src={essa} className='h-[20vh] w-[20%]'/>
       
      </div>

      <div style={{ display: isVisible2 ? 'block' : 'none' }}>
        <p>This is my DIV element 2.</p>
        <img src={nature}/>
      </div>

      <div style={{ display: isVisible3 ? 'block' : 'none' }}>
        <p>This is my DIV element 3.</p>
        <img  src={essa} className='h-[20vh] w-[20%]' />
       
      </div>

      <button
        className="bg-blue-600 text-white px-3 py-2 cursor-pointer"
        onClick={() => toggleVisibility(1)}
      >
        1 Show and hide
      </button>
      <br />
      <br />
      <button
        className="bg-blue-600 text-white px-3 py-2 cursor-pointer"
        onClick={() => toggleVisibility(2)}
      >
        2 Show and hide
      </button>
      <br />
      <br />
      <button
        className="bg-blue-600 text-white px-3 py-2 cursor-pointer"
        onClick={() => toggleVisibility(3)}
      >
        3 Show and hide
      </button>
      <br />
      <br />
    </>
  );
}

export default HandShow;
