import React,{useState} from 'react'

function UseState() {

     {/* for input start */}
    const [count,setCount]=useState(10);
    const [text,setText]=useState("MUhammadhmas ");
     {/* for input end */}
    const [name,setName]=useState("Ahmad");
    const [fname,setFname]=useState("Julam");
    const [clas,setClas]=useState(9);

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
     {/* for input end */}

    </>
  )
}

export default UseState