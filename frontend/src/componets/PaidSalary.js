import axios from "axios";
import React,{useState ,useEffect} from "react";
import { useLocation } from "react-router-dom";



function PaidSalary (){

    const location = useLocation();
    console.log(location);
    const id= location.pathname.split("/")[2];
    console.log(id);
    

        //input any authentications are needed
        //(path,function needed to execute)
        axios.delete( `http://localhost:8070/salary/paid/${id}`).then(()=>{
            alert("Salary Paid")
            

        }).catch((err)=>{
            alert(err)
        })



        return (
            <div>
              <h3>  Salary Paid </h3>
            </div>  
          );
       
    }

    
      
    

export default PaidSalary;