import React, { useState } from 'react';
import essa from "../../images/essa.jpeg"
import naturee from "../../images/download.jpeg"
import line from "../../images/pro1.jpeg"

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
 const [count,setCount]=useState(10);
 const [text,setText]=useState("MUhammadhmas ");

  return (
    <>
    <div>
      <h1>{count}</h1>
      <input className='border border-1 outline-none' type="text" placeholder='enter here'
      onChange={(event)=>{
        setCount(count+1)
        let a=event.target.value;
        setText(a)

      }}
      />
      {text}
    </div>

      {/* <div style={{ display: isVisible1 ? 'block' : 'none' }}>
        <p>This is my DIV element 1.</p>
        <img  src={essa} className='h-[20vh] w-[20%]'/>
       
      </div>

      <div style={{ display: isVisible2 ? 'block' : 'none' }}>
        <p>This is my DIV element 2.</p>
        <img src={nature} className='h-[20vh] w-[20%]'/>
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
      <br /> */}

      <div className="main">
        <div className="buttons flex gap-10 justify-center">
        <button onClick={() => toggleVisibility(1)} className='bg-black text-white px-3 py-2 rounded mt-2'>Read More 1</button>
        <button onClick={() => toggleVisibility(2)} className='bg-black text-white px-3 py-2 rounded mt-2'>Read More 2</button>
        <button onClick={() => toggleVisibility(3)} className='bg-black text-white px-3 py-2 rounded mt-2'>Read More 3</button>
        </div>
        
        
        <div className="flex" style={{ display: isVisible1 ? 'block' : 'none' }}>
        <div className=" content w-[90%] h-[70vh] bg-[red] m-auto flex transition-all translate-x-1 duration-300">
          <img src={essa} className='h-[70vh] w-[40%]'/>
          <div className="text">
          <h1 className='text-[30px]'>Abbdullah</h1>
          <p className=''>Muhammad ipsum dolor sit amet consectetur adipisicing elit. Quam harum vero officiis nostrum labore pariatur ipsum impedit aperiam consectetur illo odit deleniti, fugiat iure qui delectus laborum neque amet end .Muhammad ipsum dolor sit amet consectetur adipisicing elit. Quam harum vero officiis nostrum labore pariatur ipsum impedit aperiam consectetur illo odit deleniti, fugiat iure qui delectus laborum neque amet end .Muhammad ipsum dolor sit amet consectetur adipisicing elit. Quam harum vero officiis nostrum labore pariatur ipsum impedit aperiam consectetur illo odit deleniti, fugiat iure qui delectus laborum neque amet end .Muhammad ipsum dolor sit amet consectetur adipisicing elit. Quam harum vero officiis nostrum labore pariatur ipsum impedit llo odit deleniti, fugiat iure qui delectus laborum neque amet eectus laborum neque amet end .Muhammad  </p>
          <button className='bg-black text-white px-3 py-2 rounded mt-2'>Read More</button>
          </div>
        </div>
        </div>

        <div className="flex" style={{ display: isVisible2 ? 'block' : 'none' }}>
        <div className=" content w-[90%] h-[70vh] bg-[red] m-auto flex">
          <img src={line} className='h-[70vh] w-[40%]'/>
          <div className="text">
          <h1 className='text-[30px]'>junaid</h1>
          <p className=''>Muhammad ipsum dolor sit amet consectetur adipisicing elit. Quam harum vero officiis nostrum labore pariatur ipsum impedit aperiam consectetur illo odit deleniti, fugiat iure qui delectus laborum neque amet end .Muhammad ipsum dolor sit amet consectetur adipisicing elit. Quam harum vero officiis nostrum labore pariatur ipsum impedit aperiam consectetur illo odit deleniti, fugiat iure qui delectus laborum neque amet end .Muhammad ipsum dolor sit amet consectetur adipisicing elit. Quam harum vero officiis nostrum labore pariatur ipsum impedit aperiam consectetur illo odit deleniti, fugiat iure qui delectus laborum neque amet end .Muhammad ipsum dolor sit amet consectetur adipisicing elit. Quam harum vero officiis nostrum labore pariatur ipsum impedit llo odit deleniti, fugiat iure qui delectus laborum neque amet eectus laborum neque amet end .Muhammad  </p>
          <button className='bg-black text-white px-3 py-2 rounded mt-2'>Read More</button>
          </div>
        </div>
        </div>

        <div className="flex" style={{ display: isVisible3 ? 'block' : 'none' }}>
        <div className=" content w-[90%] h-[70vh] bg-[red] m-auto flex">
          <img src={naturee} className='h-[70vh] w-[40%]'/>
          <div className="text">
          <h1 className='text-[30px]'>Jabar</h1>
          <p className=''>Muhammad ipsum dolor sit amet consectetur adipisicing elit. Quam harum vero officiis nostrum labore pariatur ipsum impedit aperiam consectetur illo odit deleniti, fugiat iure qui delectus laborum neque amet end .Muhammad ipsum dolor sit amet consectetur adipisicing elit. Quam harum vero officiis nostrum labore pariatur ipsum impedit aperiam consectetur illo odit deleniti, fugiat iure qui delectus laborum neque amet end .Muhammad ipsum dolor sit amet consectetur adipisicing elit. Quam harum vero officiis nostrum labore pariatur ipsum impedit aperiam consectetur illo odit deleniti, fugiat iure qui delectus laborum neque amet end .Muhammad ipsum dolor sit amet consectetur adipisicing elit. Quam harum vero officiis nostrum labore pariatur ipsum impedit llo odit deleniti, fugiat iure qui delectus laborum neque amet eectus laborum neque amet end .Muhammad  </p>
          <button className='bg-black text-white px-3 py-2 rounded mt-2'>Read More</button>
          </div>
        </div>
        </div>
        
      </div>
      {/* <div className="animate-ping h-1 w-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione illo, porro aut, suscipit aliquam temporibus repudiandae assumenda inventore quaerat qui nam doloribus sunt nemo ipsam modi maiores fugiat beatae ducimus? Iste quisquam temporibus minus est totam animi illo repellat.</div> */}
    </>
  );
}

export default HandShow;
