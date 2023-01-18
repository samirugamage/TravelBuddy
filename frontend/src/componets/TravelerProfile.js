import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//toastify alert messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddEvent (){

 //add toastify message
 const notify = () => toast("Successfully event added");



    return (
        <div  >
{/* // -------------------------------------------------------------------------------Top Navigation Start----------------------------------------------------------------------------------------------- */}
<div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/AdminPanel">Travel Buddy</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
         
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item ">
              <a class="nav-link" href="/AdminPanel">Home</a>
            </li>
            
           
          </ul>
          
      
          <div>
      
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <a class="nav-link" href="">Log Out</a>
          </ul>
            
          </div>
        </div>
      </nav>
      </div>
{/* //----------------------------------------------------------------------------------------------Top Navigation End-------------------------------------------------- */}
   
   <div className="container">
<br></br>   <br></br>   <br></br>   <br></br>   

<div className="form-row">

      <div className="col">
      <img src="../img/Profile.png"  width="100" height="100"  alt="Profile Picture"></img> 
      </div>

      <div style={{ marginLeft:'-58%'}}  className="col">

      <div className="form-row">
      <div className="col">Name</div>
      <div className="col"></div>
      </div>

      <div className="form-row">
      <div className="col">Address</div>
      <div className="col"></div>
      </div>

      <div className="form-row">
      <div className="col">Email</div>
      <div className="col"></div>
      </div>

      <div className="form-row">
      <div className="col">Contact Number</div>
      <div className="col"></div>
      </div>

      <div className="form-row">
      <div className="col">NIC or Passport Number</div>
      <div className="col"></div>
      </div>


      
      </div>

  </div>


  </div>
  <br></br>   <br></br>   <br></br>   <br></br>   
  </div>


)

}
export default AddEvent;