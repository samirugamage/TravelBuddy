import React,{useState} from "react";
import axios from "axios";

//toastify alert messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Hotel () {

   //add notify msg
   const notify = () => toast("Successfully Hotel Added");
      
  const [regNum, setregNum] = useState("");
  const [hotelName, setName] = useState("");
  const [description, setDiscription] = useState("");
  const [district, setDistric] = useState("");
  const [linkPlace, setLink] = useState("");


  function sendData(e){
    e.preventDefault();
    


    const newHotel ={
      regNum,
      hotelName,
      description,
      district,
      linkPlace
    }

    axios.post("http://localhost:8070/hotel/add",newHotel).then(()=>{
      
    //alert("Hotel Added")
    notify();

      setregNum("");
      setName("");
      setDiscription("");
      setDistric("");
      setLink("");


    }).catch((err)=>{
      alert(err)
    })

  }
  const filldata = (e) => { 
    e.preventDefault();
    document.getElementById("inputCity2").value = "A123";
    setregNum( "A123");
    document.getElementById("inputCity3").value = "Hotel Royal Park";
    setName("Hotel Royal Park");
    document.getElementById("exampleFormControlTextarea1").value = "Hotel Royal Park, which was established in 1998";
    setDiscription("Hotel Royal Park, which was established in 1998")
    document.getElementById("inputState").value = "Colombo";
    setDistric("Colombo");
document.getElementById("inputCity4").value = "https://www.google.com/search";
    setLink("https://www.google.com/search");
    
  }

//


    return (
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
            <a class="nav-link" href="/aloca">Add Location<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/locationview">View Locations</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/hotel">Add Hotel</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/hotelview">View Hotels</a>
          </li>
          
         
        </ul>
        
    
        <div>
    
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
         
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
    </div>
{/* //----------------------------------------------------------------------------------------------Top Navigation End-------------------------------------------------- */}
  

        <div className="Tdy" style={{marginLeft:'320px',marginRight:'320px'}}>
            <br/><br/>

            <center><a className="navbar-bran"><h1 style={{color: "#193B4D"}}>Add New Hotel</h1></a></center>
        <br/>
        <form onSubmit={sendData}>
        <div class="form-group">
            <label for="inputCity">Reg No</label>
            <input type="text" class="form-control" id="inputCity2" placeholder="1234..." onChange={(e)=>{
              setregNum(e.target.value);
            }} />
          </div>

          <div class="form-group">
            <label for="inputCity">Hotel Name</label>
            <input type="text" class="form-control" id="inputCity3" placeholder="Name..." onChange={(e)=>{
              setName(e.target.value);
            }}/>
          </div>

        <div class="form-group">
        <label for="exampleFormControlTextarea1">Discription</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Type here..." onChange={(e)=>{
              setDiscription(e.target.value);
            }} > </textarea>
        </div>

        {/* <div class="mb-3">
        <label for="formFile" class="form-label" required>Upload Business Registration Certificate Photo</label>
        <input class="form-control" type="file" id="formFile"/>
        </div> */}

        {/* <div class="mb-3">
      <label for="formFileMultiple" class="form-label" required>Upload Hotel image (Select Maximum Three Photos)</label><br/>
      <input class="form-control" type="file" id="formFileMultiple" multiple/>
      </div> */}


         <div class="form-group">
            <label for="inputDistric">Select Your Distric</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>Colombo</option>
              <option> Gampaha</option>
              <option>Kalutara</option>
              <option>Kandy</option>
              <option>Matale</option>
              <option>Nuwara Eliya</option>
              <option> Galle</option>
              <option>Matara</option>
              <option>Hambantota</option>
              <option>Jaffna</option>
              <option>Kilinochchi</option>
              <option>Mannar</option>
              <option>Vavuniya</option> <option>Mullaitivu</option> <option>Batticaloa</option> <option>Ampara</option> 
              <option>Trincomalee</option> <option>Kurunegala</option> <option>Puttalam</option>
              <option>Anuradhapura</option> <option>Polonnaruwa</option> <option>Badulla</option> <option>Moneragala</option> 
              <option>Ratnapura</option>
              <option>Kegalle</option>
              onChange={(e)=>{
          setDistric(e.target.value);
        }}
            </select>
          </div>

          <div class="form-group">
        <label for="exampleFormControlTextarea1">Location Link</label>
        <input type="text" class="form-control" id="inputCity4" placeholder="Enter your location... " onChange={(e)=>{
              setLink(e.target.value);
            }} />
        </div>

        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" required />
            <label class="form-check-label" for="gridCheck">
              I agree with terms and conditions
            </label>
          </div>
        </div>
        <center><button type="submit" class="btn btn-outline-danger btn-lg">Submit</button></center>
        <button onClick={filldata} className="btn btn-secondary" style={{ marginLeft:'20px'}}>DEMO</button>

        
      </form>
      <br/><br/>
      </div>
</div>
    )
}
export default Hotel;