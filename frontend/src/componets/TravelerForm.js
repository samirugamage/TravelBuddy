import React,{useState} from "react";
import axios from "axios";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function TravelerForm(){

    // Creating states for assigning user input data
    const [startDate, SetStartDate] = useState("");
    const [endDate, SetEndDate] = useState("");
    const [weather, SetWeather] = useState("");
    const [nooftraveler, SetNooftraveler] = useState("");
    const [areasearching, SetAreasearching] = useState("");
    const [activitieswish, SetActivitieswish] = useState("");
    const [comfatravelwith, SetComfatravelwith] = useState("");
    const [needvehical, SetNeedvehical] = useState("");
    const [transporttype, SetTransporttype] = useState("");
    const [vehical, SetVehical] = useState("");
    const [needguide, SetNeedguide] = useState("");
    const [guidetype, SetGuidetype] = useState("");
    const [guidelang, SetGuidelang] = useState("");
    const [accommodation, SetAccommodation] = useState("");
    const [accommodationprefer, Setaccommodationprefer] = useState("");
   
    const notify = () => toast("Successfully sent your Requirements");
   
   
    // const [activities, SetActivities] = useState("");
    
// --------creating function to send data------------------
    function sendData(e){
        e.preventDefault();
        

        const newTravelerdata ={
            startDate,
            endDate,
            weather,
            nooftraveler,
            areasearching,
            activitieswish,
            comfatravelwith,
            needvehical,
            transporttype,
            vehical,
            needguide,
            guidetype,
            guidelang,
            accommodation,
            accommodationprefer
        }

       

        // console.log(newTravelerdata);

        // creating axios request for send data to backend
        axios.post("http://localhost:8070/travelerdata/adddata",newTravelerdata).then(()=>{
            notify();
            

        }).catch((err)=>{
            alert(err)
        })
    }

    return (

        
<div>

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
        <a class="nav-link" href="/viewpost">Community<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/eventspage">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      
    </ul>


    <div>

    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link" href="#">LogIn </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">|</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Register </a>
      </li>
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
    


    <div className="container" >
    <br></br>
        
    <h2 style={{ marginLeft:'35%'}}>PLAN YOUR TRIP</h2><br></br>
    <p className="mb-0" style={{fontsize:15}}>With Us, Plan Your Upcoming Vacation. Simply provide your desired information here, and we will contact you shortly. Thank You! We'll be in touch soon.</p>
        <br></br>
       <div style={{border: '2px solid rgba(0,255,0,0.3)'}}>
<br></br><br></br>
        
        

        <form style={{ marginLeft:'25px',marginRight:'15px'}} onSubmit={sendData}>
         


        <label >Start Date :</label> 
                <DatePicker selected={startDate} onChange={date => SetStartDate(date)} minDate={new Date()} style={{ marginBottom:'10px'}} class="form-control"/>


        <label >End Date :</label> 
                <DatePicker selected={endDate} onChange={date => SetEndDate(date)} minDate={new Date()} style={{ marginBottom:'10px'}} class="form-control"/>     




        {/* ------------------Date Range Travelling---------------------- */}
        {/* <label>Start Date :</label>
        <input style={{ marginLeft:'10px'}}  type="date" id="startDate" name="startDate"
         onChange={(e) =>{
            SetStartDate(e.target.value);
        }}/>

        <label style={{ marginLeft:'20px'}}>End Date :</label>
        <input style={{ marginLeft:'10px'}}  type="date" id="endDate" name="endDate"
        onChange={(e) =>{
            SetEndDate(e.target.value);
        }}/> */}

        <br></br><br></br>


        {/* -------------------weather preference---------------------- */}
        <label>Weather Preference</label><br/>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="weather"  value="Cold"
        onChange={(e) =>{
            SetWeather(e.target.value);
        }}/>
            <label className="form-check-label" for="inlineCheckbox1">Cold</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="weather"  value="Warm"
        onChange={(e) =>{
            SetWeather(e.target.value);
        }}/>
            
            <label className="form-check-label" for="inlineCheckbox2">Warm</label>
        </div><br/><br/>

{/*--------------------------------No fo Travelers---------------------------------- */}
        <label>No Of Travelers : </label>
        <input style={{ marginLeft:'5px'}} type="number" id="nofotravelers" name="quantity" min="1" max="50"
        onChange={(e) =>{
            SetNooftraveler(e.target.value);
        }}/>
        <br></br><br></br>

        {/* -------------------Travel with---------------------- */}
        {/* <label>Travel With :</label><br></br>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="Solo" value="Solo"/>
            <label className="form-check-label" for="inlineCheckbox1">Solo</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label className="form-check-label" for="inlineCheckbox2">Family</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
            <label className="form-check-label" for="inlineCheckbox1">Friends</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label className="form-check-label" for="inlineCheckbox2">Partner</label>
        </div><br></br><br/> */}

        {/* -------------------Fun type---------------------- */}
        <label>Areas Searching : </label><br></br>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="areasearching" value="Adventure"
            onChange={(e) =>{
                SetAreasearching(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineCheckbox1">Adventure</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="areasearching" value="Culture"
            onChange={(e) =>{
                SetAreasearching(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineCheckbox2">Culture</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="areasearching" value="Wildlife"
            onChange={(e) =>{
                SetAreasearching(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineCheckbox1">Wildlife</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="areasearching" value="Beaches"
            onChange={(e) =>{
                SetAreasearching(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineCheckbox2">Beaches</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="areasearching" value="Shopping"
            onChange={(e) =>{
                SetAreasearching(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineCheckbox2">Shopping</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="areasearching" value="Historical Sites"
            onChange={(e) =>{
                SetAreasearching(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineCheckbox2">Historical Sites</label>
        </div><br></br><br/>



        {/* -------------------Activities wish to do---------------------- */}
        <label>Activities wish to do...</label><br></br>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" name="activitywish" value="Hiking and Trekking"
            onChange={(e) =>{
                SetActivitieswish(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineCheckbox1">Hiking and Trekking</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" name="activitywish" value="Surfing"
            onChange={(e) =>{
                SetActivitieswish(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineCheckbox2">Surfing</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" name="activitywish" value="Mountain Climb"
            onChange={(e) =>{
                SetActivitieswish(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineCheckbox1">Mountain Climb</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" name="activitywish" value="Waterfalls Hunting"
            onChange={(e) =>{
                SetActivitieswish(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineCheckbox2">Waterfalls Hunting</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" name="activitywish" value="Snorkeling and Scuba Diving"
            onChange={(e) =>{
                SetActivitieswish(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineCheckbox2">Snorkeling and Scuba Diving</label>
        </div><br></br><br/>
        

        {/* -------------------Travel time---------------------- */}
        {/* <label>Comfortable With</label><br></br>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="comfor" value="All Day Travel"
            onChange={(e) =>{
                SetComfatravelwith(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineRadio1">All Day Travel</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="comfor"  value="Less Travel"
            onChange={(e) =>{
                SetComfatravelwith(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineRadio2">Less Travel</label>
        </div><br></br><br/> */}
        

{/* -----------------------------------------------Transport---------------------------------------------- */}
        {/* <label>Transport</label><br></br>
        <label>Need Vehicle</label><br></br>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="needvehicle"  value="yes"
            onChange={(e) =>{
                SetNeedvehical(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineRadio1">Yes</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="needvehicle" value="no"
            onChange={(e) =>{
                SetNeedvehical(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineRadio2">No</label>
        </div><br></br><br/> */}
        
 
        <label>Preferred Transport Type :</label><br/>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="transporttype"  value="private"
            onChange={(e) =>{
                SetTransporttype(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineRadio1">Private Transport</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="transporttype"  value="public"
            onChange={(e) =>{
                SetTransporttype(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineRadio2">Public Transport</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="transporttype"  value="public"
            onChange={(e) =>{
                SetTransporttype(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineRadio2">Both</label>
        </div><br></br>
        

        {/* <div className="form-row">

        <div className="col">
            <label>Vehical Type</label>
            <select  id="vehtype" disabled className="custom-select"
            onChange={(e) =>{
                SetVehical(e.target.value);
            }}>
                <option value="car">Car</option>
                <option value="jeep">Jeep</option>
                <option value="van">Van</option>
            </select>
        </div>
        
        <div className="col">
        <label>Vehical Type</label>
            <select className="custom-select"
            onChange={(e) =>{
                SetVehical(e.target.value);
            }}>
            <option value="train">Train</option>
                <option value="bus">Bus</option>
               
            </select>
        </div>
        </div><br></br> */}

<br></br>
        <label>Need a Guide</label><br/>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="needguide"  value="yes"
            onChange={(e) =>{
                SetNeedguide(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineRadio1">Yes</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="needguide"  value="no"
            onChange={(e) =>{
                SetNeedguide(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineRadio2">No</label>
        </div><br></br>

        
        <div className="form-row">
{/* 
        <div className="col">
            <label>Preferred Guide </label>
            <select className="custom-select"
            onChange={(e) =>{
                SetGuidetype(e.target.value);
            }}>
                <option ></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div> */}
        
        {/* <div className="col">
        <label>Preferred Language </label>
            <select className="custom-select"
            onChange={(e) =>{
                SetGuidelang(e.target.value);
            }}>
                <option ></option>
                <option value="English">English</option>
                <option value="Sinhala">Sinhala</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
                <option value="French">French</option>
            </select>
        </div> */}
        </div><br></br>

        {/* <label>Accommodation</label><br/> */}

        <label>Do you need us to arrange accommodation for you ?</label><br/>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="accommodation"  value="yes"
            onChange={(e) =>{
                SetAccommodation(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineRadio1">Yes</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="accommodation"  value="no"
            onChange={(e) =>{
                SetAccommodation(e.target.value);
            }}/>
            <label className="form-check-label" for="inlineRadio2">No</label>
        </div><br></br>
        <div className="form-row">

        <div className="col">
            <label>Preferred Condition</label>
            <select className="custom-select" 
            onChange={(e) =>{
                Setaccommodationprefer(e.target.value);
            }}>
                <option ></option>
                <option value="Luxury">Luxury</option>
                <option value="SemiLuxury">Semi-Luxury</option>
                <option value="Cottage">Cottage</option>
                <option value="Natural">Natural</option>
            </select>
        </div>
        
        {/* <div className="col">
        <label>Requirements</label><br></br>

        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label className="form-check-label" for="inlineCheckbox2">Hot Water</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label className="form-check-label" for="inlineCheckbox2">Pool</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label class="form-check-label" for="inlineCheckbox2">Gym</label>
        </div>

        </div> */}
        </div><br></br>
        


        
        <button type="submit" className="btn btn-primary">Plan for Me</button>
        <button style={{ marginLeft:'5px'}} className="btn btn-primary">Back</button>
        <br></br><br></br>
      </form>
      </div><br></br>
    </div>  </div>
    )
}
export default TravelerForm;