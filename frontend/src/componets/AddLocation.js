import React,{useState,useEffect} from "react";
import axios from "axios";

function AddLocation (){ 

    const [LocationName, setName] = useState("");
    const [description, setDiscription] = useState("");
    const [district, setDistric] = useState("");
    const [linkPlace, setLink] = useState("");


    function sendData(e){
      e.preventDefault();
      
      const newLocation ={
        LocationName,
        description,
        district,
        linkPlace
      }

      axios.post("http://localhost:8070/location/add",newLocation).then(()=>{
        alert("Location Added")


      }).catch((err)=>{
        alert(err.response.data.msg)
      })

    }


    //view all locations function//
    const [locations,setLocations] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getLocations () {
           axios.get("http://localhost:8070/location/")
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data)
            
            
            setLocations(res.data); //using setLocations function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getLocations();
    },[locations]) //[locations] to update the array instantly when changed rather than refresh page.

    const filldata = (e) => { 
      e.preventDefault();
      document.getElementById("inputCity").value = "Nine arch";
      setName( "Nine arch");
      document.getElementById("exampleFormControlTextarea1").value = "The Nine Arch Bridge, also known as the 'Bridge in the Sky'..";
      setDiscription("The Nine Arch Bridge, also known as the 'Bridge in the Sky'..");
      document.getElementById("inputState").value = "Colombo";
      setDistric("Colombo")
      document.getElementById("inputCity1").value = "https://www.google.com/search";
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
            
            <li class="nav-item active">
              <a class="nav-link" href="/aloca">Add Location<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/locationview">View Locations</a>
            </li>
            <li class="nav-item ">
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

            <center><a className="navbar-bran"><h1 style={{color: "#193B4D"}}>Add New Location</h1></a></center>
        <br/>
        <form onSubmit={sendData}>
        <div class="form-group">
            <label for="inputCity">Location Name</label>
            <input type="text" class="form-control" id="inputCity" placeholder="Name..."
            onChange={(e)=>{
              setName(e.target.value);
            }} required/>
          </div>

        <div class="form-group">
        <label for="exampleFormControlTextarea1">Discription</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Type here..." 
        onChange={(e)=>{
          setDiscription(e.target.value);
        }} required/>
        </div>

      {/* <div class="mb-3">
      <label for="formFileMultiple" class="form-label" required>Upload your Location image(Select Maximum Three Photos)</label><br/>
      <input class="form-control" type="file" id="formFileMultiple" multiple/>
      </div> */}


      <div className="form-group">
                <label for="inputDistric">District</label>
                <select id="inputState" className="form-control"
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setDistric(e.target.value); //save the target values in name variable
                }} >
                <option defaultValue>Choose...</option>
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
                
                </select>
          </div>

          <div class="form-group">
        <label for="exampleFormControlTextarea1">Location Link</label>
        <input type="text" class="form-control" id="inputCity1" placeholder="Enter your location... " onChange={(e)=>{
          setLink(e.target.value);
        }} />
        </div>

        <div className="col-md-6">
        <center><button type="submit" class="btn btn-outline-danger btn-lg">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="btn" class="btn btn-outline-danger btn-lg"><a href="/locationview">Back</a></button></center> </div>
        <button onClick={filldata} className="btn btn-secondary" style={{ marginLeft:'20px'}}>DEMO</button>
        
      </form>
      <br/><br/>

      </div>
</div>
    )
}
export default AddLocation;