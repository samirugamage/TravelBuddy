import React, { useEffect, useState, setState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

import ReactHTMLTableToExcel from 'react-html-table-to-excel'; //report generation
 //report generation



 
function Adpanel() {
 
	  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [cmptype, setCmptype] = useState("");
    const [language, setLanguage] = useState("");
    const [cid, setCid] = useState("");
    

      // const id= Record.pathname.split("/")[2];
      const location = useLocation();
      console.log(location); //testing for function in console getting ID
      const id= location.pathname.split("/")[2];
      console.log(id); 

    function sendData(e){
      e.preventDefault(); // to execute only the function "sendData" without submitting data.
      
      const updateRecord		= {
          name,
          email,
          message,
          cmptype,
          language,
          cid
    
      }
          console.log(updateRecord);
      //input any authentications are needed
      //(path,function needed to execute)
      axios.put(`http://localhost:8070/Record/update/${id}`,updateRecord).then(()=>{
          alert("Record Edited")
          

      }).catch((err)=>{
          alert(err)
      })


      console.log(updateRecord); //printing the sent form data on console.log f12
      
  }

    const onDelete = (id) =>{

   

      let ans = window.confirm("Are you sure want to delete the record?");
  
      if(ans){  
  
        axios.delete(`http://localhost:8070/Record/delete/${id}`).then((res) =>{
          alert("Deleted successfully!");
  
          }).catch((err)=>{
  
          alert(err.message);
  
         })
  
      }    
  
 
  
  
  }
 
const [Record,setRecords] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getRecord () {
           axios.get("http://localhost:8070/Record/")
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data)
            
            
            setRecords(res.data); //using setLocation function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getRecord();
    },[Record]) //[Traveler] to update the array instantly when changed rather than refresh page.
 


const app =() => {
  const [ search, setSearch] = React.useState('');
  const handleSearch = (event) =>{
    setSearch(event.target.value);

  };
}
    

 // This following section will display the table with the records of individuals.
 return (


  <><nav class="navbar navbar-expand-lg navbar-light bg-light">
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
       <a class="navbar-brand" href="AdminPanel">Travel Buddy</a>
       <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
         <li class="nav-item ">
         <a class="nav-link" href="/AdminPanel">Home</a>
         </li>
         <li class="nav-item ">
           <a class="nav-link" href="Adpanel">Service management</a>
         </li>
         
         

       </ul>
       <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

         



         {/* <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Name
            </a>
          
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">My Account</a>
            <a class="dropdown-item" href="#">Log Out</a>
            </div>
        </li>
    </ul> */}
       </div>
     </div>
   </nav><div>
       <h3><center>Contact List</center></h3>
       <div className="row">
        <div className=" col-lg-9 mt-2 mb-2">
          <h4>All records</h4>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input
          id="search"
          className="form-control"
          type="text"
          placeholder="Search"
          
          ></input>
          
        </div>
       </div>
       <table class="sortable table table-striped table-secondary" style={{ marginTop: 20 }} id="serv_records" data={Record}>
         <thead>
           <tr class="table-info">
             <th>Name</th>
             <th>email</th>
             <th>message</th>
             <th>cmptype</th>
             <th>language</th>
             <th>cid</th>
             <th>update</th>
             <th>delete</th>
           </tr>
         </thead>
         <tbody>{
			 
			 
			 Record.map((record)=>(
          <tr>
            <td contenteditable='true'>{record.name}</td>
            <td>{record.email}</td>
			      <td>{record.message}</td>
            <td>{record.cmptype}</td>
            <td>{record.language}</td>
			      <td>{record.cid}</td>

            <td> <a href={`/Edit/${record._id}`}><button type="/editrecordt" className="btn btn-primary">UPDATE</button> </a> </td>
            <td><a className="btn btn-danger" href="#" onClick={() =>onDelete(record._id)}> <i className="far fa-trash-alt"></i>Delete</a></td>
			 
			</tr>

        ))
      }
		 
		 </tbody>
       </table>

       <button  type="button" className="btn btn-info" style={{marginLeft:'30px', marginRight:'0px' }}>
   <ReactHTMLTableToExcel
               id="test-table-xls-button"
               className="btn btn-info"
               table="serv_records"
               filename="routes_details"
               sheet="routes_details_xls"
               buttonText="Download A report"
                style={{marginLeft:'0px', marginRight:'0px',padding:'1px 1px'}}/>
               
               </button>

     </div></>

     
 
 
 );
    }

export default Adpanel;