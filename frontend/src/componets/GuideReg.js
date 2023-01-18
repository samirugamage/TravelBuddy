import React ,{useState} from "react";
import axios from "axios";

//toastify alert messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GuideReg(){

    //add toastify message
 const notify = () => toast("Successfully Guide added");

    const[Full_name, setName] = useState("");
    const[Address, setAddress] = useState("");
    const[Email, setEmail] = useState("");
    const[Contact_Number, setCoNumber] = useState("");
    const[NIC_Number, setNicNum] = useState("");
    const[GuideL,setGuideL] = useState("");
    const[Password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");


    function sendData(e){
        e.preventDefault();

        const newGuide ={

            Full_name,
            Address,
            Email,
            Contact_Number,
            NIC_Number,
            GuideL,
            Password,
        }

        if(Password===confirmPassword){
        axios.post("http://localhost:8070/Guide/add",newGuide).then(()=>{
            //alert("Guide Added")
            notify();
        }).catch((err)=>{
            alert(err.response.data.msg)
        })
        
        }
        else{
            alert("Please confirm your password")
        }


    }
    const filldata = (e) => { 
        e.preventDefault();
        document.getElementById("Full_Name").value = "Ajith";
        setName( "Ajith");
        document.getElementById("Address").value = "Matara";
        setAddress("Matara");
        document.getElementById("Email").value = "ajith1@gmail.com";
        setEmail("ajith1@gmail.com");
        document.getElementById("Contact_Number").value = "0761986545";
        setCoNumber( "0761986545");
        document.getElementById("NIC_Number").value = "759878789V";
        setNicNum("759878789V");
        document.getElementById("GuideL").value = "G007";
        setGuideL("G007");
        document.getElementById("Password").value = "Ajith@75";
        setPassword("Ajith@75")
        document.getElementById("setConfirmPassword").value = "Ajith@75";
        setConfirmPassword("Ajith@75")
       
    }

               
    return(


        
<div>
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
            
            <li class="nav-item active">
              <a class="nav-link" href="/gui">Travel Guide</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/dri">Transport Agent</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/htl">Hotel Agent</a>
            </li>
           
          </ul>
          
      
          <div>
      
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
           
          </ul>
            
            
            
          </div>
        </div>
      </nav>
      </div>
{/* //----------------------------------------------------------------------------------------------Top Navigation End-------------------------------------------------- */}


       

        <center>
        <div className= "container1">
        <form onSubmit={sendData} class="row g-3">
            <div class="col-12">
                <label for="inputAddress" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="Full_Name"
                onChange={(e)=>{
        
                    setName(e.target.value);

                }}></input>
            </div>

            <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="Address"
                onChange={(e)=>{
        
                    setAddress(e.target.value);

                }}></input>
            </div>

            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="Email"
                onChange={(e)=>{
        
                    setEmail(e.target.value);

                }}></input>
            </div>

            <div class="col-md-6">
                <label for="inputNum" class="form-label">Contact Number</label>
                <input type="tel"
                          name="phone"
                          className="form-control"
                          id="Contact_Number"
                          required
                        
                          pattern="07[1,2,5,6,7,8][0-9]{7}"
                          maxLength="10"
                          placeholder="07xxxxxxxx"
                onChange={(e)=>{
        
                    setCoNumber(e.target.value);

                }}></input>
            </div>

            <div class="col-md-6"><br/>
                <label for="inputNum" class="form-label">NIC Number</label>
                <input type="text" class="form-control" id="NIC_Number"
                onChange={(e)=>{
        
                    setNicNum(e.target.value);

                }}></input><br/>
            </div>

            <div> 
            <hr style={{size:"4"}}/>
            </div>

            <div class="col-md-6">
            <br></br>
            <label for="inputNum" class="form-label">Guide License Number</label>
            <input type="text" class="form-control" id="GuideL"
            onChange={(e)=>{
        
                setGuideL(e.target.value);

            }}></input>
            </div>

            <div> 
            <hr style={{size:"4"}}/>
            </div>

            
           <div class="col-md-6">
           Create your Password
           </div>
                
           <div class="col-md-6">  </div>
            
           
  
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" id="Password"
                onChange={(e)=>{
        
                    setPassword(e.target.value);

                }}></input>
            </div>

            <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="setConfirmPassword"
            onChange={(e)=>{
        
                setConfirmPassword(e.target.value);

       }}></input>
            </div>

           <br/><br></br>

            <div className="col-md-6"><br></br>
                <button type="submit" class="btn btn-primary">Register</button>
                <button onClick={filldata} className="btn btn-secondary" style={{ marginLeft:'20px'}}>DEMO</button>
                &nbsp;&nbsp;&nbsp;
                
            </div>

            

        </form>
        </div>
        </center>
        
        <div style={{ marginTop:'5%'}}>  
              
              <a  href="/viewguide"><button style={{ marginLeft:'45%',marginRight:'15px',marginBottom:"2%"}} type="button" class="btn btn-secondary">View Guides</button></a>
             

      </div>

        </div>
    )
}