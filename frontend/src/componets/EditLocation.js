import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";
import { useLocation } from "react-router-dom";




function EditLocation (){

  const [form , setForm] = useState({
    status:"",
    LocationName:"",
    district:"",
    district:"",
    linkPlace:"",
  
})

    const [LocationName, setName] = useState("");
    const [description, setDiscription] = useState("");
    const [district, setDistric] = useState("");
    const [linkPlace, setLink] = useState("");

    const Location = useLocation();
    const id= Location.pathname.split("/")[2];

    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const updateLocation = {
            LocationName,
            description,
            district,
            linkPlace
        }
console.log(updateLocation);
        //input any authentications are needed
        //(path,function needed to execute)
        axios.put(`http://localhost:8070/Location/update/${id}`,updateLocation).then(()=>{
            alert("location Edited")
            

        }).catch((err)=>{
            alert(err)
        })


        console.log(updateLocation); //printing the sent form data on console.log f12
        
    }



    ////////////view SPECIFIC lOCATION/////////////////
    //taken from view all locations function and passed specific ID//
    const [locations,setLocations] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getLocations () {
           axios.get(`http://localhost:8070/location/get/${id}`)
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data.location)
            
            
            setForm(res.data.location); //using setLocations function to retrieve data and display on website
            
            setName(res.data.location.LocationName);
            setDiscription(res.data.location.description);
            setDistric(res.data.location.district);
            setLink(res.data.location.linkPlace);
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getLocations();
    },[locations]) //[locations] to update the array instantly when changed rather than refresh page.



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
            <li class="nav-item active">
              <a class="nav-link" href="/locationview">View Locations</a>
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
    
        <div className="container" >
            
            <br/><br/>
            <center><a className="navbar-bran"><h1 style={{color: "#193B4D"}}>Edit Location</h1></a></center>

            <form onSubmit={sendData}>
        <div class="form-group">
            <label for="inputCity">Location Name</label>
            <input type="text" class="form-control" id="inputCity" placeholder="Name..."
            onChange={(e)=>{
              setName(e.target.value);
            }}
            defaultValue={form.LocationName}
             />
          </div>

        <div class="form-group">
        <label for="exampleFormControlTextarea1">Description</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Type here..." 
        onChange={(e)=>{
          setDiscription(e.target.value);
        }} defaultValue={form.description}/>
        </div>

      


      <div className="form-group">
                <label for="inputDistric">District</label>
                <select id="inputState" className="form-control"
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setDistric(e.target.value); //save the target values in name variable
                }} defaultValue={form.district}>
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
        <input type="text" class="form-control" id="inputCity" placeholder="Enter your location... " onChange={(e)=>{
          setLink(e.target.value);
        }} defaultValue={form.linkPlace}/>
        </div>

        <div className="col-md-6">
        <center><button type="submit" class="btn btn-outline-danger btn-lg">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/locationview"><button type="button" class="btn btn-outline-danger btn-lg">Back</button></a></center> </div>
        
      </form>
        
        </div>
            
</div>

    )
}
export default EditLocation;