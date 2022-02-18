import React, { useState ,useEffect} from "react";
import { useHistory, useLocation,useParams } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import "./Add.css"
const initialState = {
  name: "",
  email: " ",
  contact: " ",
};

const AddEdit = () => {
  
  const [state, setState] = useState(initialState);
  const [fname,setFname] = useState("");

  const { name, email, contact } = initialState;

  const history = useHistory();


  const addUser = async (data) => {
    console.log(data);
    const response = await axios.get("http://localhost:5000/user", data);
    if (response.status === 200) {
      toast.success(response.data);
      setTimeout(()=>history.push("/"),500);
    }
  };

  const updateUser = async (data,id) => {
    console.log(data);
    const response = await axios.get(`http://localhost:5000/user/${id}`, data);
    if (response.status === 200) {
      toast.success(response.data);
      setTimeout(()=>history.push("/"),500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please provide value  into each input  field");
    } else {
      if(!id) {
        addUser(state);
      }
      else{
        updateUser(state,id)
      }
      addUser(state);
      history.push("/");
    }
  };
  const id = useParams();
  useEffect(()=>{
    console.log(id);
    if(id) {
      getSingleUser(id);
    }
  },[id])

  const getSingleUser =async(id)=>{
    const response = await axios.get(`http://localhost:5000/user/${id}`);
      if(response.status===200){
        setState({...response.data[0]})
      }
  }
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...initialState, [name]: value, });
  };

  return (
    <div className="container">
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxwidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name..."
          onChange={e=>(setFname(e.target.value))}
          value={name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email..."
          onChange={handleInputChange}
          value={email}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Enter number..."
          onChange={handleInputChange}
          value={contact}
        />
        <input type="submit" value={id?"update" : "Add"}/>
      </form>
    </div>
    </div>
    
  );
};

export default AddEdit;
