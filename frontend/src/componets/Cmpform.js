
import { useNavigate } from "react-router";
import axios from "axios";
import React ,{useState,useEffect} from "react";
export default function Cmpform() {


  //Contacts function//
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [cmptype, setCmptype] = useState("");
  const [language, setLanguage] = useState("");
  const [cid, setCid] = useState("");
  
   function sendData(e){
      e.preventDefault(); // to execute only the function "sendData" without submitting data.
      
      const newRecord = {
          name,
          email,
          message,
          cmptype,
          language,
          cid
         
          
      }
  //input any authentications are needed
      //(path,function needed to execute)
      axios.post ( "http://localhost:8070/record/add",newRecord).then(()=>{
          alert("Record Added")
          

      }).catch((err)=>{
          alert(err)
      })
      
  }
  
   
  //view all locations function//
  const [records,setRecords] = useState([]); //taking all the datas from mongoDB input into this array

useEffect(()=>{

      function getRecords () {
         axios.get("http://localhost:8070/record/")
         .then((res)=>{

          
          console.log("your data has been received")
          console.log(res.data)
          
          
          setRecords(res.data); //using setLocations function to retrieve data and display on website
          
      
      }).catch((err)=>{
              alert(err.message);
         })
      }
      getRecords();
  },[records]) // to update the array instantly when changed rather than refresh page.

  const filldata = (e) => { 
    e.preventDefault();
    document.getElementById("name").value = "prabodha";
    setName( "prabodha");
    document.getElementById("email").value = "prabodha@gmail.com";
    setEmail("prabodha@gmail.com");
    document.getElementById("message").value = "i need to know the open hours";
    setMessage("i need to know the open hours");
    document.getElementById("cmptype").value = "Payment";
    setCmptype( "payment");
    document.getElementById("language").value = "English";
    setLanguage("English");
    document.getElementById("cid").value = "12345678";
    setCid("12345678")
    
    
  }


         
 
  return (


        <><>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Travel Buddy</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="/viewpost">Community</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="/eventspage">Events <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Cntus">Contact Us</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="Cmpform">Make a Complain</a>
      </li>
      
    </ul>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

    <ul class="navbar-nav ms-auto">
    <button type="button ms-suto" class="btn btn-warning ms-suto">Plan Your Trip</button>





  
</ul>
  
      
      
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
<br></br>
<br></br>
<br></br>
<br></br>
        

          
<div class="container-fluid h-100 bg-light text-dark">
    <div class="row justify-content-center align-items-center">
        <h1>Tell Us!</h1>
        <form class="col-lg-6 offset-lg-3  " onSubmit={sendData}>
          
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"

                onChange={(e) =>{ setEmail(e.target.value); }} required />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <br></br>

          <div class="mb-3">
            <label for="name" class="form-label">Complaint's Name</label>
            <input type="text" class="form-control" id="name"

                onChange={(e) =>{ setName(e.target.value); }} required />
</div>
          <br></br>

          <select id="cmptype" class="form-select form-select-sm" aria-label=".form-select-sm example"
            onChange={(e) =>{ setCmptype(e.target.value); }}required

          >
            <option selected>Complain Type</option>
            <option value="Payment">Payment</option>
            <option value="Accomadation">Accomadation</option>
            <option value="Transportation">Transportation</option>
            <option value="Travel Guide">Travel Guide</option>
            <option value="Cancellations">Cancellations</option>
          </select>
          <br>
          </br>

          <div class="mb-3">

            <label for="message" class="form-label">More Details</label>
            <textarea class="form-control" id="message" rows="3" maxlength="150"

              onChange={(e) =>{ setMessage(e.target.value); }} required/>

          </div>
          <div class="row">
            <div class="col">
              <label for="language">Select Your Language</label>
              <select id="language" class="form-control"
                onChange={(e) =>{ setLanguage(e.target.value); }} required

              >


                <option selected>Choose...</option>
                <option value="English">English</option>
                <option value="Sinhala">Sinhala</option>
                <option value="Tamil">Tamil</option>
                <option value="Mandarin">Mandarin</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div class="col">
              <label for="cid">Customer ID</label>
              <input type="text" class="form-control" id="cid" maxlength="8"

                  onChange={(e) =>{ setCid(e.target.value); }} required />


            </div>
          </div>
          <br></br>

          <button type="submit" class="btn btn-primary">Submit</button>
          <button onClick={filldata} className="btn btn-secondary" style={{ marginLeft:'20px'}}>DEMO</button>
          <br></br>
          <br></br>
        </form>
      </div>
      </div>
      </><br></br><br></br></>
            
    )
}
