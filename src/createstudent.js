import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router";
import { Link } from "react-router-dom";


export default function Createstudent()
{   
    let[name,uname] = useState("");
    let[subject,usubject] = useState("");
    const location = useLocation();

    return <div className="container-fluid">
        <div className="row">
            <div className="offset-4 col-5">
            <div class="mb-3">
            <form className="center" onSubmit={
                (e)=>{
                  e.preventDefault();
                  let obj = {
                    name : name , 
                    subject : subject
                }
               axios.post("https://mondodbmentorassign.herokuapp.com/student",obj);
               uname("");
               usubject("");
                }}>
           <label for="exampleFormControlInput1" class="form-label">Student name</label>
           <input type="text" class="form-control" id="exampleFormControlInput1" value={name} onChange={(e)=>{uname(e.target.value)}}/>
           <label for="exampleFormControlInput1" class="form-label">favourite subject</label>
           <input type="text" class="form-control" id="exampleFormControlInput1" value={subject} onChange={(e)=>{usubject(e.target.value)}}/><br/>
           <button className="btn btn-primary" type="submit">Save</button> <Link to="/"><button className="btn btn-primary" type="submit">Back</button></Link></form>
           </div>    
          </div>
        </div>
        </div>
}