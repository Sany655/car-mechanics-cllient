import axios from 'axios'
import React, { useState } from 'react'

const AddSercvise = () => {
    const [form,setForm] = useState({
        name:'',price:'',img:'',description:''
    })
    function handleSubmit(e){
        e.preventDefault()
        axios('/services').then(res=>res.json()).then(data=>{
            setForm({name:'',img:'',price:'',description:''})
            alert('added')
        })
        // fetch('http://localhost:5000/services',{
        //     method:'POST',
        //     headers:{'content-type':'application/json'},
        //     body:JSON.stringify(form)
        // }).then(res=>res.json()).then(data=>{
        //     setForm({name:'',img:'',price:'',description:''})
        //     alert('added')
        // })
    }
    return (
        <div>
            <h1>Add Sercvise</h1>
            <form style={{margin:'auto',width:'50%',display:'flex',flexDirection:'column',gap:10}} onSubmit={handleSubmit}>
                <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} required type="text" placeholder="Name" className="form-control " max="20" min="3"/>
                <input value={form.price} onChange={(e)=>setForm({...form,price:e.target.value})} required type="number" placeholder="Price" className="form-control "/>
                <input value={form.img} onChange={(e)=>setForm({...form,img:e.target.value})} required type="text" className="form-control " placeholder="image url"/>
                <textarea value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})} required placeholder='description'  className="form-control "></textarea>
                <button className="btn btn-primary ">Create</button>
            </form>
        </div>
    )
}

export default AddSercvise
