import React,{useState} from 'react'

function UseState() {

     {/* for input start */}
    const [count,setCount]=useState(10);
    const [text,setText]=useState("MUhammadhmas ");
     {/* for input end=========== */}
{/* ======================================================================================= */}
     {/* for heading student detail start */}
    const [name,setName]=useState("Ahmad");
    const [fname,setFname]=useState("Julam");
    const [clas,setClas]=useState(9);

    const student=()=>{
        setName("MuhammadEssa-514");
        setFname("Musa Ali");
        setClas(14);
    }
     {/* for heading student detail end====== */}
{/* ======================================================================================= */}
     {/* for shirt Start */}
    const [shirt,setShirt]=useState({
        color:"green",
        size:"L",
        price:1400,
    });
    function shirts (){
        const update={...shirt,color:"yellow",size:"Small",price:1200}
        setShirt(update)

        // or other method

        setShirt(updatee=>{
            return{...updatee,color:"red",size:"Medium",price:1700}
        })

    }
     {/* for shirt End====== */}
{/* ======================================================================================= */}
     {/* for counter start====== */}
     const [countt,setCountt]=useState(0)

     function increase(){
        setCountt(countt+1)
     }
     function decrease(){
        setCountt(countt-1)
     }
     {/* for counter end====== */}



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
      <button onClick={student} className='bg-black text-white px-3 py-2 rounded'>change student data in above line</button>
     {/* for heading student detail end========= */}
{/* ======================================================================================= */}
     {/* for shirt Start */}
     <p>shirt color is {shirt.color} and size is {shirt.size} and final price is {shirt.price}</p>
     <button onClick={shirts} className='bg-black text-white px-3 py-2 rounded'>change shirt detail above line</button>
     {/* for shirt end */}
{/* ====================================================================================== */}
     {/* for counter start====== */}
     <h1>For counter</h1>

    <div className='countt flex'>
     <button onClick={decrease} className='px-1 py-1 bg-[red] text-white'>-</button>
     <h1>Count : {countt}</h1>
     <button onClick={increase} className='px-1 py-1 bg-[green] text-white'>+</button>
   </div>
     {/* for counter end====== */}
{/* ====================================================================================== */}





    </>
  )
}

export default UseState