import React,{useContext} from 'react'
// i use usecontext to pass value from parent App.js to child directly usecontext.we use to pass values from parent to nested childs.
import {data,data1} from '../../App.js';
function UseContext() {
    const name=useContext(data)
    const age=useContext(data1)
  return (
    <>
    <h1>hello my name {name} and my age is  {age}</h1>
    </>
  )
}

export default UseContext