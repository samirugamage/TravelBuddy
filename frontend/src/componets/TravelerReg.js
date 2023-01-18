import React ,{useState} from "react";
import axios from "axios";

export default function TravelerReg(){

    const[Full_name, setName] = useState("");
    const[Address, setAddress] = useState("");
    const[Email, setEmail] = useState("");
    const[Contact_Number, setCoNumber] = useState("");
    const[NIC_or_Passport_Number, setNicNum] = useState("");
    const[Password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");


    function sendData(e){
        e.preventDefault();

        const newTraveler ={

            Full_name,
            Address,
            Email,
            Contact_Number,
            NIC_or_Passport_Number,
            Password

        }
        
        if(Password===confirmPassword){
            
        axios.post("http://localhost:8070/Traveler/add",newTraveler).then(()=>{
            alert("Traveler Added")
            window.location = "/login" 
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
      document.getElementById("Full_Name").value = "Savindi Perera";
      setName( "Savindi Perera");
      document.getElementById("Address").value = "Galle";
      setAddress("Galle");
      document.getElementById("Email").value = "savindi8@gmail.com";
      setEmail("savindi8@gmail.com");
      document.getElementById("Contact_Number").value = "0768746545";
      setCoNumber( "0768746545");
      document.getElementById("NIC_Number").value = "989888789V";
      setNicNum("989888789V");
 
     
  }

              

    return(

        
<div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Travel Buddy</a>
    
      
    <div>

    
      
      
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
</nav>
    


        <center>
        <div className= "container1">
        <form onSubmit={sendData}  class="row g-3">
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
                <label for="inputNum" class="form-label">NIC/Passport Number</label>
                <input type="text" class="form-control" id="NIC_Number"
                onChange={(e)=>{
        
                    setNicNum(e.target.value);

                }}></input>
            </div>

            <div> 
            <hr style={{size:"4"}}/>
            </div>

           <h5>
                Create your Password
                </h5>
            
           
  
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" 
                onChange={(e)=>{
        
                    setPassword(e.target.value);

                }}></input>
            </div>

            <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" 
            onChange={(e)=>{
        
                     setConfirmPassword(e.target.value);

            }}></input>
            </div>

           <br/><br></br>

            <div className="col-md-6">
                <button type="submit" class="btn btn-primary">Register</button>
                <button onClick={filldata} className="btn btn-secondary" style={{ marginLeft:'20px'}}>DEMO</button>
                &nbsp;&nbsp;&nbsp;
            </div>

            

        </form>
        </div>
        </center></div>
    )
}