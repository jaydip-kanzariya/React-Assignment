
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {


    const[data,setData]= useState([])

    useEffect(()=>{
        fetch('http://localhost:2000/student')
        .then((res)=>{return res.json()})
        .then((data)=>{
            setData(data)

        })
    })

    const handaldel = (id)=>{
        
        fetch('http://localhost:2000/student/'+id,{
            method:"delete",
            headers:{"content-type":"application/json"},
          
        })
       
    }

  return (
    <div>
          <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-xl-6'>
                    
                <div>
                        <h3>Students Details</h3>
                        <Link to='/add' className='btn btn-warning my-3'>Add Students</Link>
                    </div>
                    <div>
                        <table className='table'>
                            <thead className='table-dark'>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                               {data.map((obj)=>(
                                 <tr key={obj.id}>
                                 <td>{obj.id}</td>
                                 <td>{obj.name}</td>
                                 <td>{obj.email}</td>
                                 <td>
                                    <Link to={`/view/${obj.id}`} className='btn btn-info'>View</Link>
                                    <Link to={`/edit/${obj.id}`} className='btn btn-success mx-2'>Edit</Link>
                                    <button className='btn btn-danger' onClick={()=>{handaldel(obj.id)}}>Delete</button>
                                 </td>
                             </tr>
                               ))}
                            </tbody>
                        </table>
                    </div>


                  </div>
              </div>
          </div>
    </div>
  )
}

export default Home;
