import React,{useState} from "react";
import axios from "axios";

export default function TravelerReg(){

    const[Full_name, setName] = useState("");
    const[Address, setAddress] = useState("");
    const[Email, setEmail] = useState("");
    const[Contact_Number, setCoNumber] = useState("");
    const[NIC_Number, setNicNum] = useState("");
    const[Password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    function sendData(e){
        e.preventDefault();

        const newHotel ={

            Full_name,
            Address,
            Email,
            Contact_Number,
            NIC_Number,
            Password,
        }

        if(Password===confirmPassword){
            
            axios.post("http://localhost:8070/HotelA/add",newHotel).then(()=>{
                alert("Hotel Agent Added")
            }).catch((err)=>{
                alert(err.response.data.msg)
            })
    
            }
            else{
                alert("Please confirm your password")
            }
    
        
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
            
            <li class="nav-item ">
              <a class="nav-link" href="/gui">Travel Guide</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/dri">Transport Agent</a>
            </li>
            <li class="nav-item active">
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
                <input type="text" class="form-control" 
                onChange={(e)=>{
        
                    setName(e.target.value)

                }}></input>
            </div>

            <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" 
                onChange={(e)=>{
        
                    setAddress(e.target.value)

                }}></input>
            </div>

            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control"
                onChange={(e)=>{
        
                    setEmail(e.target.value)

                }}></input>
            </div>

            <div class="col-md-6">
                <label for="inputNum" class="form-label">Contact Number</label>
                <input type="tel"
                          name="phone"
                          className="form-control"
                          id="phone"
                          required
                        
                          pattern="07[1,2,5,6,7,8][0-9]{7}"
                          maxLength="10"
                          placeholder="07xxxxxxxx"
                onChange={(e)=>{
        
                    setCoNumber(e.target.value)

                }}></input>
            </div>

            <div class="col-md-6"><br/>
                <label for="inputNum" class="form-label">NIC Number</label>
                <input type="text" class="form-control"
                onChange={(e)=>{
        
                    setNicNum(e.target.value)

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
        
                    setPassword(e.target.value)

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
                &nbsp;&nbsp;&nbsp;
            
            </div>

            

        </form>
        </div>
        </center>
        <div style={{ marginTop:'5%'}}>  
              
              <a  href="/viewhtl"><button style={{ marginLeft:'45%',marginRight:'15px',marginBottom:"2%"}} type="button" class="btn btn-secondary">View Hotels</button></a>
             

      </div>
        </div>
    )
}