import React,{useState} from 'react'

function UseState() {

     {/* for input start */}
    const [count,setCount]=useState(10);
    const [text,setText]=useState("MUhammadhmas ");
     {/* for input end=========== */}

     {/* for heading student detail start */}
    const [name,setName]=useState("Ahmad");
    const [fname,setFname]=useState("Julam");
    const [clas,setClas]=useState(9);

    const data=()=>{
        setName("MuhammadEssa-514");
        setFname("Musa Ali");
        setClas(14);
    }
     {/* for heading student detail end====== */}

     {/* for shirt Start */}
    const [shirt,setShirt]=useState({
        color:"green",
        size:l,
        price:1400,
    })
     {/* for shirt End====== */}



  return (
    <>
     {/* for input start */}
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
     {/* for input end=============== */}
{/* ======================================================================================= */}
     {/* for heading student detail start */}
      <h1>student detail</h1>
      <p>my name is ,{name}, and my father name is ,{fname}, and i am in {clas} class</p>
      <button onClick={data} className='bg-black text-white px-3 py-2 rounded'>change student data in above line</button>
     {/* for heading student detail end========= */}
{/* ======================================================================================= */}
     {/* for shirt Start */}
     <p>shirt color is {shirt.color} and size is {shirt.size} and final price is {shirt.price}</p>
     {/* for shirt end */}



    </>
  )
}

export default UseState