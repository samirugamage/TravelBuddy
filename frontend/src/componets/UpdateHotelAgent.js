import React ,{useState} from "react"; //useState is needed for functional components
import axios from "axios";
import { useLocation } from "react-router-dom";




function UpdateGuide (){

    const[Full_name, setName] = useState("");
    const[Address, setAddress] = useState("");
    const[Email, setEmail] = useState("");
    const[Contact_Number, setCoNumber] = useState("");
    const[NIC_Number, setNicNum] = useState("");
    const[Password, setPassword] = useState("");
    
    

    const location = useLocation();
    console.log(location); //testing for function in console getting ID
    const id= location.pathname.split("/")[2];
    console.log(id);  //testing for function in console and splitting ID

    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const updateGuide = {
            Full_name,
            Address,
            Email,
            Contact_Number,
            NIC_Number,
            Password,
        }
console.log(updateGuide);
        //input any authentications are needed
        //(path,function needed to execute)
        axios.put( `http://localhost:8070/HotelA/update/${id}`,updateGuide).then(()=>{
            alert("Hotel Agent details Edited")
            

        }).catch((err)=>{
            alert(err)
        })


        console.log(updateGuide); //printing the sent form data on console.log f12
        
    }



    
    


    return (
        <div className="container" >
            

            <form onSubmit={sendData} class="row g-3">
            <div class="col-12"><br/><br/>
                <label for="inputAddress" class="form-label">Full Name</label>
                <input type="text" class="form-control" 
                onChange={(e)=>{
        
                    setName(e.target.value)

                }}></input>
            </div>

            <div class="col-12"><br/>
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" 
                onChange={(e)=>{
        
                    setAddress(e.target.value)

                }}></input>
            </div>

            <div class="col-md-6"><br/>
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control"
                onChange={(e)=>{
        
                    setEmail(e.target.value)

                }}></input>
            </div>

            <div class="col-md-6"><br/>
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

                    <h5><br/><br/><br/><br/><br/>
                        Create your Password
                    </h5>
            
           
  
            <div class="col-md-6"><br/>
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" 
                onChange={(e)=>{
        
                    setPassword(e.target.value)

                }}></input>
            </div>

            

           <br/><br></br>

            <div className="col-md-6"><br/>
                <button type="submit" class="btn btn-primary">update Hotel agent</button>&nbsp;&nbsp;&nbsp;
                <a  href="/viewhtl"><button  type="button" class="btn btn-secondary">View Hotel Agents</button></a>
            
            </div>

            

        </form>
        
        </div>
            


    )
    
}
export default UpdateGuide;