import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    if (response.status === 200) {
      setData(response.data);
    }
  };
  const onDeleteUser=async(id)=>{
      if( window.confirm("do you want to delete the user with  "));{
        console.log("id is ",id);
        const response = await axios.delete(`http://localhost:5000/user/${id}`);
      if(response.status===200){
      toast.success(response.data);
      getUsers();
      }
    }
  }
  console.log("data =>", data);
  return (
    <div>
      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table className="table table-light table-hover table-bordered ">
            <caption>users</caption>
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    
                    <td>
                        <NavLink to ={`/update/${item.id}`}>
                            <button className="btn btn-success mx-2">Edit</button>
                        </NavLink>
                        <button className="btn btn-danger mx-2" onClick={()=>onDeleteUser(item.id)}>Delete</button>
                        <NavLink to ={`/view/${item.id}`}>
                            <button className="btn btn-primary mx-2">View</button>
                        </NavLink>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
