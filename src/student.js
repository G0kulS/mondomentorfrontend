import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


export default  function Student()
{ 
    let {id} = useParams();
    let [u,us] = useState("");
    let [s,ss] = useState("");
    let [m,um] = useState("");
    useEffect( async ()=>{
        let temp = await axios.get(`https://mondodbmentorassign.herokuapp.com/student/${id}`);
        us(temp.data.name);
        ss(temp.data.subject);
    },[])
    return <div className="container-fluid row center">
            <div className="offset-4 col-4">
            <ul class="list-group">
           <li class="list-group-item active" aria-current="true">Student details</li>
           <li class="list-group-item">Name : {u}</li>
           <li class="list-group-item">Fav.subject :{s}</li>
           <li class="list-group-item">
               <form onSubmit={
                 async  (e)=>{
                       e.preventDefault();
                       let obj = {
                           name: m
                       }
                      await axios.put(`https://mondodbmentorassign.herokuapp.com/student/${id}`,obj)
                      um("");
                   }
               }>
               <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Assign a mentor</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Mentor name" value={m} onChange={
          (e)=>{
              um(e.target.value);
          }
      }/>
               </div>
               <button type="submit" className="btn btn-primary">save</button> <Link to="/"><button type="submit" className="btn btn-primary">Back</button></Link>
               </form>
           </li>
           </ul> 
            </div>
    </div>
} 