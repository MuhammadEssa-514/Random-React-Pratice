import React,{useContext} from 'react'
// i use usecontext from parent App.js to child directly usecontext.
import {data,data1} from './App';
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