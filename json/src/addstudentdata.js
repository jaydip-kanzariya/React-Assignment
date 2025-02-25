

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Addstudentdata() {

    const [name, setname] = useState('');
    const [email, setemail] = useState('')

    const navigate = useNavigate();
    const test = () => {
        // alert(1)
        navigate('/')

    }

    function handleAdd(e) {

        e.preventDefault();
        console.log({ name, email })
        let obj = { name, email };
        fetch('http://localhost:2000/student', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(obj)
        })
       .then((res) => {
                if (res) {
                    alert('Data added..!')
                    // navigate('/')
                }
            }
            )
    }


    return (
        <div>

            <div className='container'>
                <div className='row justify-content-center text-start'>
                    <div className='col-xl-6'>
                        <div>
                            <h3>Add Students Details</h3>
                            <button onClick={test} className='btn btn-warning my-3'>Go back</button>
                        </div>
                        <div>
                            <form onSubmit={handleAdd}>
                                <div>
                                    <label>Name :</label>
                                    <input type="text" name="" value={name} onChange={(e) => { setname(e.target.value) }} className='form-control  border border-primary' />
                                </div>
                                <div>
                                    <label>Email :</label>
                                    <input type="text" name="" value={email} onChange={(e) => { setemail(e.target.value) }} className='form-control border border-primary' />
                                </div>
                                <div>
                                    <input type="submit" value="Add" className='btn btn-primary my-3' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Addstudentdata;
