import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function View() {

 const[data,setData]= useState([])

 const {id} =useParams()

    useEffect(()=>{
        fetch(`http://localhost:2000/student/${id}`)
        .then((res)=>{return res.json()})
        .then((data)=>{
            setData(data)

        })
    },[])

  return (
    <div>
      <h1  className='text-success'>view page</h1>

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-6'>

            <div>
              
              {/* <Link to='/add' className='btn btn-warning my-3'>Add Students</Link> */}


              <div>
                <h4 className='text-danger'>NAME : </h4>
                <h5><h1>{data.name}</h1></h5>
              </div>


              <div>
                <h4 className='text-danger'>EMAiL : </h4>
                <h5><h1> {data.email}</h1></h5>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default View;
