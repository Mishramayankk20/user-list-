import axios from  'axios'
import React,{useState} from 'react'
//import {useHistory} from 'react-router-dom'
//import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
//import axios from "axios";
import { toast } from "react-toastify";
const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone:"",
    })
    //distruption  feature of es6
    const {name,username,email,phone,website} =  user;
    const onInputChange=(event) =>{
        setUser({...user,[event.target.name]: event.target.value});
    }
    const onSubmit= async e=>{
        e.preventDefault();
        await  axios.get("http://localhost:5000/user", user);
        history.push('/')
    }
    return (
        <div className="container  col-12 ">
            <div className='w-75 mx-auto shadow p-5 bg-secondary'>
                <h2 className='text-center mb-4'>Add User</h2>
                <form onSubmit={e=>onSubmit(e)}>
                    <div className="col-12 mx-2 my-3">
                        <div className="form-group">

                            <input type="text" className="form-control form-control-lg"  placeholder="Enter your name"  name='name' value={name}  onChange={e=> onInputChange(e)}/>
                        </div>
                    </div>

                    <div className="col-12 mx-2 my-3">
                        <div className="form-group">

                            <input type="text" className="form-control form-control-lg"  placeholder="Enter Your E-mail Address"  name='email' value={email}  onChange={e=> onInputChange(e)}/>
                        </div>
                    </div>

                    <div className="col-12 mx-2 my-3">
                        <div className="form-group">

                            <input type="number" className="form-control form-control-lg"  placeholder="Enter Your Number Name "  name='number' value={phone} onChange={e=> onInputChange(e)}/>
                        </div>
                    </div>
                    <button className="btn btn-success col-12" type="submit">Submit</button>
                </form>
               
            </div>
           
        </div>

    )
}
export default AddUser;