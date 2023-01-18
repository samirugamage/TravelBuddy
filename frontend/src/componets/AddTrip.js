//IT21055058
//Kumara L.L.M.N.
//Route Management


import React,{useState, useEffect} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { confirmAlert } from 'react-confirm-alert'; // Import

import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function AddTripDetails(){

    
// Creating states for assigning user input data
const [travelForm, SetTravelForm] = useState([]);
   
useEffect(() => {
  function getTravelForm() {
      axios.get("http://localhost:8070/travelerdata/").then((res)=>{
          
          console.log(res.data)
          SetTravelForm(res.data);
          
      }).catch((err)=>{
          alert(err.message);
      })
  }

  getTravelForm();
}, [travelForm])


    const notify = () => toast("Successfully sent trip");
    const notify_val = () => toast("Route ID Already Exists");
    
    // Creating states for assigning user input data
    const [route_ID, SetRouteID] = useState("");
    const [cust_name, SetCustName] = useState("");
    const [guide_name, SetGuideName] = useState("");
    const [startDate, SetStartDate] = useState("");
    const [endDate, SetEndDate] = useState("");
    const [startPlace, SetStartPlace] = useState("");
    const [endPlace, SetEndPlace] = useState("");
    const [Locations, SetLocations] = useState("");
    
  // Delete Function

  const onDelete = (id) =>{

    confirmAlert({

        title: 'Confirm to Delete',

        message: 'Are you sure you want to delete this.',

        buttons: [

          {

            label: 'Yes',

            onClick: () => axios.delete(`http://localhost:8070/travelerdata/delete/${id}`).then((res) =>{

                //alert("Deleted successfully!");

                //this.retrievePosts();

              })

          },

          {

            label: 'No',

           

          }

        ]

      });}
    
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
        axios.post("http://localhost:8070/trip/add",newTripdata).then(()=>{
           notify();
            console.log(newTripdata)
            
        }).catch((err)=>{
            notify_val();
            // alert(err)
        })
    }

    const cancelCourse = (e) => { 
        e.preventDefault();
        document.getElementById("trip-form").reset();
      }

      const filldata = (e) => { 
        e.preventDefault();
        document.getElementById("routeid").value = "R021";
        SetRouteID( "R021");
        document.getElementById("custname").value = "Saman";
        SetCustName("Saman");
        document.getElementById("guidename").value = "Kasun";
        SetGuideName("Kasun")
        document.getElementById("Locations").value = "Day 01 -> kandy, day 02-> nuwara eliya, ......";
        SetLocations("Day 01 -> kandy, day 02-> nuwara eliya, ......");
        
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
              <a class="nav-link" href="/AddTrip">Add Trip<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/ViewRoute">View Trip</a>
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
        <h3 style={{ marginLeft:'35%'}}>ADD TRIP DETAILS</h3>
        <br></br>

        <form style={{ marginLeft:'25px',marginRight:'15px'}} id="trip-form" onSubmit={sendData}>

        <label >Route ID :</label>
                <input style={{ marginBottom:'10px'}} type="text" required class="form-control" id="routeid" placeholder="Route ID" 
                onChange={(e) =>{
                    SetRouteID(e.target.value);
                }}/>

        <label >Cust Name :</label>
                <input style={{ marginBottom:'10px'}} type="text" required class="form-control" id="custname" placeholder="Customer Name" 
                onChange={(e) =>{
                    SetCustName(e.target.value);
                }}/>

        <label >Guide Name :</label>
                <input style={{ marginBottom:'10px'}} type="text" required class="form-control" id="guidename" placeholder="Guide Name" 
                onChange={(e) =>{
                    SetGuideName(e.target.value);
                }}/>

        <label >Start Date :</label> 
                <DatePicker selected={startDate} onChange={date => SetStartDate(date)} minDate={new Date()} style={{ marginBottom:'10px'}} class="form-control"/>


        <label >End Date :</label> 
                <DatePicker selected={endDate} onChange={date => SetEndDate(date)} minDate={new Date()} style={{ marginBottom:'10px'}} class="form-control"/>        


        {/* <label >Start Date :</label>
                <input style={{ marginBottom:'10px'}} type="date" class="form-control" id="startdate"  
                onChange={(e) =>{
                    SetStartDate(e.target.value);
                }}/>

        <label >End Date :</label>
                <input style={{ marginBottom:'10px'}} type="date" class="form-control" id="enddate"  
                onChange={(e) =>{
                    SetEndDate(e.target.value);
                }}/> */}

        <div className="form-row" style={{ marginBottom:'25px'}}>
            <div className="col">
                <label>Start Place :</label>
                <select className="custom-select" id="inputState" 
                onChange={(e) =>{
                    SetStartPlace(e.target.value);
                }}>
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

            <div className="col">
            <label>End Place:</label>
            <select className="custom-select" id="inputState" 
                onChange={(e) =>{
                    SetEndPlace(e.target.value);
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

        </div>    


        <label >Route Details :</label>
                <textarea style={{ marginBottom:'10px'}}  class="form-control" id="Locations" placeholder="Enter Route Details" 
                onChange={(e) =>{
                    SetLocations(e.target.value);
                }}>
                </textarea>


      <br />
        <button type="submit" className="btn btn-primary" style={{ marginLeft:'5px'}}>Submit</button> 

        <button onClick={cancelCourse} className="btn btn-primary" style={{ marginLeft:'5px'}}>Reset Data</button>
       
        <a  href="/AdminPanel"><button type="button" style={{ marginLeft:'5px'}} className="btn btn-primary">Back</button></a>
        <button onClick={filldata} className="btn btn-secondary" style={{ marginLeft:'20px'}}>DEMO</button>

        <br></br><br></br>
      </form>
      </div><br></br>
    </div>  
    
    
    {/* dISPLAYING TRAVELER DATA */}
    <div  >
    <label style={{ marginLeft:'40%',marginRight:'15px', fontSize:'25px', fontWeight:'bold',marginTop:'40px'}}>TRAVELER PREFFERD DATA</label>
       
        <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
            <tr>
                <th></th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Weather</th>
            <th>No Of Travelers</th>
            <th>Areas Serching</th>
            <th>Activities Search</th>
            <th>Transport Type</th>
            <th>Need Guide</th>
            <th>Need Accommodation</th>
            <th>Accommodation Preffered</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>

            {
                travelForm.map((travelForm) =>(
                    <tr>
                        <td></td>
                    <td>{travelForm.startDate}</td>
                    <td>{travelForm.endDate}</td>
                    <td >{travelForm.weather}</td>
                    <td >{travelForm.nooftraveler}</td>
                    <td>{travelForm.areasearching}</td>
                    <td>{travelForm.activitieswish}</td>
                    <td>{travelForm.transporttype}</td>
                    <td>{travelForm.accommodation}</td>
                    <td>{travelForm.needguide}</td>
                    <td>{travelForm.accommodationprefer}</td>
                    <td>
                   
                    <a className="btn btn-danger" href="#" onClick={() =>onDelete(travelForm._id)}>
                                                <i className="far fa-trash-alt"></i>&nbsp;Delete
                                            </a>

                    </td>
                    </tr>
                ))
            }
            


        </tbody>
        </table>


        <a  href="/AdminPanel"><button type="button" style={{ marginLeft:'45%',marginTop:'2%',marginBottom:'2%'}} className="btn btn-primary">Back</button></a>


    </div>

    
    
    </div>
    )
}
export default AddTripDetails;