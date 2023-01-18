import React,{useState ,useEffect} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UpdateTimeTableTrain(){

    const notify = () => toast("Successfully Updated TimeTable !");

    
    // Creating states for assigning user input data
    const [trnspodtType, SetTrnspodtType] = useState("");
    const [trainName, SetTrainName] = useState("");
    const [startStation, SetStartStation] = useState("");
    const [endStation, SetEndStation] = useState("");
    const [startTime, SetStartTime] = useState("");
    const [endTime, SetEndTime] = useState("");

    const location = useLocation();
    //console.log(location); //testing for function in console getting ID
    const id= location.pathname.split("/")[2];
    //console.log(id);  //testing for function in console and splitting ID
    // trying to get update data-----------------------------------------
    
    
// --------creating function to send data------------------
    function sendData(e){
        e.preventDefault();
        

        const newTraindata ={
            trnspodtType,
            trainName,
            startStation,
            endStation,
            startTime,
            endTime

        }

        
        // creating axios request for send data to backend

        axios.put(`http://localhost:8070/train/update/${id}`,newTraindata).then(()=>{
            notify();
            
        }).catch((err)=>{
            alert(err)
        })
    }

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
              <a class="nav-link" href="/ScheduleForm">Shedule Management</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/timeTableTrain">Public Transport<span class="sr-only">(current)</span></a>
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

<div style={{ marginTop:'5%'}}>  
    <a  href="/timeTableTrain"><button style={{ marginLeft:'40%'}} type="button" class="btn btn-secondary">Add New Train</button></a>
    <a  href="/ViewTimeTbTrain"><button style={{ marginLeft:'25px',marginRight:'15px'}} type="button" class="btn btn-success">View Time Table</button></a>

</div>

        
    <div className="container" >

        <br></br>
       <div style={{border: '2px solid rgba(0,255,0,0.3)'}}>

        <br></br>
        <h3 style={{ marginLeft:'28%'}}>UPDATE PUBLIC TRANSPORT TIMETABLE</h3>
        <br></br>

        <form style={{ marginLeft:'25px',marginRight:'15px'}} onSubmit={sendData}>

        <label>Transport Type :</label>
            <select className="custom-select" required
            onChange={(e) =>{
                SetTrnspodtType(e.target.value);
            }}>
                <option ></option>
                <option value="Train">Train</option>
                <option value="Bus">Bus</option>
                
            </select>
         
        <label >Name :</label>
                <input style={{ marginBottom:'10px'}} type="text" required class="form-control" id="trainName" placeholder="Train Name" 
 
                onChange={(e) =>{
                    SetTrainName(e.target.value);
                }}/>

        <div className="form-row">

            <div className="col">
                <label>Start Location :</label>
                <input type="text" class="form-control" required id="startStation" placeholder="colombo" 
                onChange={(e) =>{
                    SetStartStation(e.target.value);
                }}/>
                
            </div>
        
            <div className="col">
            <label>End Location:</label>
            <input type="text" class="form-control" required id="endStation"  
            onChange={(e) =>{
                SetEndStation(e.target.value);
            }}/>
            
            </div>
        </div>

        <div style={{ marginTop:'10px'}} className="form-row">

            <div className="col">
                <label>Start Time :</label>
                <input style={{ marginLeft:'5px'}} type="time"  required id="startTime" name="startTime"
                onChange={(e) =>{
                    SetStartTime(e.target.value);
                }}/>
            </div>
        
            <div className="col">
            <label>End Time:</label>
                <input style={{ marginLeft:'5px'}} type="time" required id="endTime" name="endTime"
                onChange={(e) =>{
                    SetEndTime(e.target.value);
                }}/>
            </div>

        </div>

        <br></br>

        
        <button type="submit"  className="btn btn-success">Update Time</button>
        <a  href="/ViewTimeTbTrain"><button type="button" style={{ marginLeft:'5px'}} className="btn btn-secondary">Back</button></a>
        <br></br><br></br>
      </form>
      </div><br></br>
    </div>  </div>
    )
}
export default UpdateTimeTableTrain; 




























                    
