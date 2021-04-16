import React, { useEffect, useState } from "react";
import axios from"axios";
import { Link } from "react-router-dom";

export default function Leftside()
{     
     let [mentor,umentor] = useState([]);
     let [student,ustudent] = useState([]);
     useEffect(async()=>{
       let temp =await axios.get("https://mondodbmentorassign.herokuapp.com/mentor");
       console.log(temp.data);
        umentor([...(temp.data)]);
        let tem = (await (axios.get("https://mondodbmentorassign.herokuapp.com/student"))).data;
        console.log("r",tem);
        ustudent([...tem])
     },[]);
    return <div class="container-fluid">
           <div class ="row">
           <div class="col-4">
           <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Mentor's List</li>
            {
              mentor.map((item)=>{
                return <li class="list-group-item"><div class="dropdown">
                  
              <Link to ={"/mentor/"+item.id}>  <button class="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {item.name}
                </button></Link>   <button class="btn btn-danger cl" onClick={async ()=>{
                  await axios.delete(`https://mondodbmentorassign.herokuapp.com/mentor/${item.id}`);
                  let temp =await axios.get("https://mondodbmentorassign.herokuapp.com/mentor");
                  console.log(temp.data);
                   umentor([...(temp.data)]);                       
                }}>Delete</button>
              </div></li>
              })
            }
            </ul>
           </div>
             <div class="offset-5 col-4">
               <div className="createbtn"> <Link to="/creatementor"><button class="btn btn-primary">Create Mentor</button></Link></div>
               <div className="createbtn1"> <Link to="/createstudent"><button class="btn btn-primary">Create student</button> </Link></div>
             </div>
             <div class="offset-8 col-4 bt">
             <ul class="list-group">
             <li class="list-group-item active" aria-current="true">Student's List- unassigned</li>
             {
              student.map((item)=>{
                return  item.mentor_id==0? 
            <li class="list-group-item"><div class="dropdown">
           <Link to ={"/student/"+item.id} > <button class="btn btn-success" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {item.name}
                </button></Link> <button class="btn btn-danger cl" onClick={async ()=>{
                  await axios.delete(`https://mondodbmentorassign.herokuapp.com/student/${item.id}`);
                  let temp =await axios.get("https://mondodbmentorassign.herokuapp.com/student");
                  console.log(temp.data);
                   ustudent([...(temp.data)]);                       
                }}>Delete</button>
              </div></li>:<></>
              })
              }
            </ul>
           </div>
         </div>
    </div>
} 