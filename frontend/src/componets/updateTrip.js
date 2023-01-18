import React,{useState ,useEffect} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


//import DatePicker from "react-datepicker";

//import "react-datepicker/dist/react-datepicker.css";


import 'react-toastify/dist/ReactToastify.css';



//IT21055058
//Kumara L.L.M.N.
//Route Management


function UpdateTrip(){

    const [form , setForm] = useState({
        status:"",
        route_ID:"",
        cust_name:"",
        guide_name:"",
        startDate:"",
        endDate:"",
        startPlace:"",
        endPlace:"",
        Locations:"",
    })

    const notify = () => toast("Successfully updated trip");
    
    // Creating states for assigning user input data
    const [route_ID, SetRouteID] = useState("");
    const [cust_name, SetCustName] = useState("");
    const [guide_name, SetGuideName] = useState("");
    const [startDate, SetStartDate] = useState("");
    const [endDate, SetEndDate] = useState("");
    const [startPlace, SetStartPlace] = useState("");
    const [endPlace, SetEndPlace] = useState("");
    const [Locations, SetLocations] = useState("");
    
    const tripidentity = useLocation();
    const id = tripidentity.pathname.split("/")[2];
  
    
// --------creating function to send data------------------
    function sendData(e){
        e.preventDefault();
        

        const newTripdata ={
            route_ID, 
            cust_name, 
            guide_name, 
            startDate, 
            endDate, 
            startPlace, 
            endPlace, 
            Locations

        }

        
        // creating axios request for send data to backend
        axios.put(`http://localhost:8070/trip/update/${id}`,newTripdata).then(()=>{
            notify();
            
            
        }).catch((err)=>{
            alert(err)
        })
    }


    const [trips,setTrips] = useState([]); //taking all the datas from mongoDB input into this array
 
    useEffect(()=>{

        function getTrips () {
          axios.get(`http://localhost:8070/trip/get/${id}`)
          .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data.trip)

            //alert(res.data)
            
            
            //setEvents(res.data); //using setEvents function to retrieve data and display on website
            setForm(res.data.trip);

            SetRouteID(res.data.trip.route_ID);
            SetCustName(res.data.trip.cust_name);
            SetGuideName(res.data.trip.guide_name);
            SetStartDate(res.data.trip.startDate);
            SetEndDate(res.data.trip.endDate);
            SetStartPlace(res.data.trip.startPlace);
            SetEndDate(res.data.trip.endPlace);
            SetLocations(res.data.trip.Locations);

        }).catch((err)=>{
                alert(err.message);
          })
        }
        getTrips();
    },[trips]) //[events] to update the array instantly when changed rather than refresh page.





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
              <a class="nav-link" href="/AddTrip">Add Trip</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/ViewRoute">View Trip<span class="sr-only">(current)</span></a>
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

        <br></br>
       <div style={{border: '2px solid rgba(0,255,0,0.3)'}}>

        <br></br>
        <h3 style={{ marginLeft:'35%'}}>UPDATE TRIP DETAILS</h3>
        <br></br>

        <form style={{ marginLeft:'25px',marginRight:'15px'}} onSubmit={sendData}>

        <label >Route ID :</label>
                <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="routeid" placeholder="Route ID" 
                onChange={(e) =>{
                    SetRouteID(e.target.value);
                }}
                defaultValue={form.route_ID}
                />

        <label >Cust Name :</label>
                <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="custname" placeholder="Customer Name" 
                onChange={(e) =>{
                    SetCustName(e.target.value);
                }}
                defaultValue={form.cust_name}/>

        <label >Guide Name :</label>
                <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="guidename" placeholder="Guide Name" 
                onChange={(e) =>{
                    SetGuideName(e.target.value);
                }}
                defaultValue={form.guide_name}/>


    {/* <label >Start Date :</label> */}
{/* 
    <DatePicker selected={startDate} onChange={date => SetStartDate(date)}  style={{ marginBottom:'10px'}} class="form-control" defaultValue={form.startDate}/>




    <label >End Date :</label>

    <DatePicker selected={endDate} onChange={date => SetEndDate(date)}  style={{ marginBottom:'10px'}} class="form-control"  defaultValue={form.endDate}/>

 */}

        <label >Start Date :</label>
                <input style={{ marginBottom:'10px'}} type="date" class="form-control" id="startdate"  
                onChange={(e) =>{
                    SetStartDate(e.target.value);
                }}defaultValue={form.startDate}/>

        <label >End Date :</label>
                <input style={{ marginBottom:'10px'}} type="date" class="form-control" id="enddate"  
                onChange={(e) =>{
                    SetEndDate(e.target.value);
                }}defaultValue={form.endDate}/>

        <div className="form-row" style={{ marginBottom:'25px'}}>
            <div className="col">
                <label>Start Place :</label>
                <select className="custom-select"
                onChange={(e) =>{
                    SetStartPlace(e.target.value);

                }}defaultValue={form.startPlace}>
                    <option value="colombo">colombo</option>
                    
                    
                    
                </select>
            </div>

            <div className="col">
            <label>End Place:</label>
            <select className="custom-select"
                onChange={(e) =>{
                    SetEndPlace(e.target.value);

                }}defaultValue={form.endPlace} >
                    
                    <option value="kandy">kandy</option>
                    <option value="galle">galle</option>
                </select>
            </div>

         

        </div>    


        <label >Route Details :</label>
                <textarea style={{ marginBottom:'10px'}}  class="form-control" id="Locations" placeholder="Enter Route Details" 
                onChange={(e) =>{
                    SetLocations(e.target.value);
                }}defaultValue={form.Locations}>
                </textarea>

         {/* old data */}
        {/* <input type="submit" value="Update" class="btn btn-primary" /> */}
        <button type="submit" className="btn btn-primary">Update</button>
        {/* <a  href="/PublicTransDashboard"><button type="button" style={{ marginLeft:'5px'}} className="btn btn-primary">Back</button></a> */}
        <br></br><br></br>
      </form>
      </div><br></br>
    </div>  
    </div>
    )
}

export default UpdateTrip;