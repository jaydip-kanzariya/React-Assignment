

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {



    const navigate = useNavigate();
    const test = () => {
        // alert(1)
        navigate('/')

    }

   

const[name,setname]= useState('')
const[email,setemail]= useState('')
      
 const {id} =useParams()

 useEffect(()=>{
     fetch(`http://localhost:2000/student/${id}`)
     .then((res)=>{return res.json()})
     .then((data)=>{
         setname(data.name)
         setemail(data.email)

     })
 },[])


 
 function handleedt() {

    
    
    fetch('http://localhost:2000/student/'+id, {
        method: 'put',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({name,email})
    })
   
}

    return (
        <div>

            <h1>Edit page</h1>

            <div className='container'>
                <div className='row justify-content-center text-start'>
                    <div className='col-xl-6'>
                        <div>
                            <h3>Add Students Details</h3>
                            <button onClick={test} className='btn btn-warning my-3'>Go back</button>
                        </div>
                        <div>
                            <form onSubmit={handleedt}>
                                <div>
                                    <label>Name :</label>
                                    <input type="text" name="" value={name} onChange={(e)=>{setname(e.target.value)}} className='form-control  border border-primary' />
                                </div>
                                <div>
                                    <label>Email :</label>
                                    <input type="text" name="" value={email} onChange={(e)=>{setemail(e.target.value)}} className='form-control border border-primary' />
                                </div>
                                <div>
                                    <input type="submit"  value="update" className='btn btn-primary my-3' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit
