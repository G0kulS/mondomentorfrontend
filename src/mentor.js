import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Mentor()
{   
    let {id} = useParams();
    let[sl,usl] = useState([]);
    useEffect(async()=>{
          let temp = await axios.get(`https://mondodbmentorassign.herokuapp.com/mentor/${id}`);
          console.log(temp);
          usl([...temp.data.students]);
    
    },[])
    return <div class="container-fluid">
        <div class="row">
           <div class="offset-3 col-6">
           <ul class="list-group">
          <li class="list-group-item active" aria-current="true">Student's List</li>
          {
             sl.map((item)=>{
                 return <li class="list-group-item list">{item.name}<Link to={"/useredit/"+item.id}><button className="btn btn-warning corner">Edit</button></Link></li>
             })         
          }
          </ul>
            </div>  
        </div>
    </div>
} 