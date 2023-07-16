import {React,useState} from 'react'

function TodoApp() {
// array of list
    const [List,setList]=useState([{brand:"",model:"",year:"",color:"",price:""}])
    const [table,setTable]=useState([])
// object
const [form,setForm]=useState({
    // brand:"",
    // model:"",
    // year:"",
    // color:"",
    // price:""

})
const handleChange=(event)=>{
    setForm((item)=>({
        ...item,//spread operators
        [event.target.name]:event.target.value
    }))
}
const handleSubmit=(event)=>{
    event.preventDefault()
    
    const arr=[]
        arr.push(form)
        setTable((item)=>[...item,form])
        setList((item)=>[...item,form])

        ////// to empty form
        setForm({
            brand:"",
            model:"",
            year:"",
            color:"",
            price:""
        })
}

//////// for search
// console.log(searchValue,'search Value')
const searchHandleChange=(event)=>{
    const value = event.target.value
    let filteredList=List.filter((item)=>{
        console.log(item,'items')
        return value !==""? item.brand.includes(value):item
    })
    setTable([...filteredList])//use speared operator to create new array
    console.log(filteredList,'filtered list')
}
console.log(List,'list')
console.log(table,table)
  return (
       <>
       <div className=''>
          <div className=''>
            <form>
                <label className='px-3'>Enter You Brand Name</label>
                <input type="text"
                 onChange={handleChange}
                 name='brand'
                 value={form.brand}
                 className='border'
                 /> <br /><br />

                <label className='px-3'>Enter You Model Name</label>
                <input type="text"
                 onChange={handleChange}
                 name='model'
                 value={form.model}
                 className='border'
                 /><br /><br />

                <label className='px-3'>Enter You Year</label>
                <input type="text"
                 onChange={handleChange}
                 name='year'
                 value={form.year}
                 className='border'
                 /><br /><br />

                <label className='px-3'>Enter Your color</label>
                 <input type="text"
                 onChange={handleChange}
                 name='color'
                 value={form.color}
                 className='border'
                 /><br /><br />

                <label className='px-3'>Enter Your Price</label>
                <input type="text"
                 onChange={handleChange}
                 name='price'
                 value={form.price}
                 className='border'
                 /><br /><br />

                 <button
                  className='text-md mx-10 border p-2 font-bold'
                  onClick={handleSubmit}
                  >
                   Submit 
                  </button>
            </form>
            <form>
                <input 
                onChange={searchHandleChange}                                                              
                type="text"
                name='search'
                placeholder='search by name'
                />
            </form>
          </div>
          <div>
          <table>
                <thead>
                    <tr>
                        <th className='text-backcolor bg-bkgrd'> Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {table.length !==0 ? (
                        table.map((item)=>{
                            return (
                                <div>
                                    <tr>
                                        <td>{item.brand}</td>
                                        <td>{item.model}</td>
                                        <td>{item.year}</td>
                                        <td>{item.color}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                </div>
                            )
                        })
                    ):(
                        <div>
                            <p>results not found !!</p>
                        </div>
                    )}
                </tbody>
            </table>
          </div>
       </div>
       </>
  )
}

export default TodoApp