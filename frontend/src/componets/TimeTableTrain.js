import React,{useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function TimeTableTrain(){

    const notify = () => toast("Successfully Add New Time !");


    
    // Creating states for assigning user input data
    const [trnspodtType, SetTrnspodtType] = useState("");
    const [trainName, SetTrainName] = useState("");
    const [startStation, SetStartStation] = useState("");
    const [endStation, SetEndStation] = useState("");
    const [startTime, SetStartTime] = useState("");
    const [endTime, SetEndTime] = useState("");
    
  
    
// --------creating function to send data------------------
    function sendData(e){
        e.preventDefault();
        

        const newTraindata ={
            trnspodtType,
            trainName,
            startStation,
            endStation,
            startTime,
            endTime,
            

        }

        
        // creating axios request for send data to backend
        axios.post("http://localhost:8070/train/addtrain",newTraindata).then(()=>{
            notify();
            
        }).catch((err)=>{
            alert(err)
        })
    }

    const filldata = (e) => { 
        e.preventDefault();
        document.getElementById("trainName").value = "Udarata Manike";
        SetTrainName( "Udarata Manike");
        document.getElementById("startStation").value = "Colombo";
        SetStartStation("Colombo");
        document.getElementById("endStation").value = "Kandy";
        SetEndStation("Kandy")
        
        
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
                <a  href="/timeTableTrain"><button style={{ marginLeft:'40%'}} type="button" class="btn btn-success">Add New Time</button></a>
                <a  href="/ViewTimeTbTrain"><button style={{ marginLeft:'25px',marginRight:'15px'}} type="button" class="btn btn-secondary">View Time Table</button></a>

        </div>

    <div className="container" >

        <br></br>
       <div style={{border: '2px solid rgba(0,255,0,0.3)'}}>

        <br></br>
        <h2 style={{ marginLeft:'28%'}}>PUBLIC TRANSPORT TIMETABLE</h2>
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
                <input style={{ marginBottom:'10px'}} type="text" class="form-control" required id="trainName" placeholder="Name" 
                onChange={(e) =>{
                    SetTrainName(e.target.value);
                }}/>

        <div className="form-row">

            <div className="col">
                <label>Start Location :</label>
                <input type="text" class="form-control" id="startStation" required placeholder="Colombo" 
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
                <input style={{ marginLeft:'5px'}} type="time" required id="startTime" name="startTime"
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

        
        <button type="submit" className="btn btn-success">Add New Time</button>
        <button onClick={filldata} className="btn btn-secondary" style={{ marginLeft:'20px'}}>DEMO</button>
        {/* <a  href="/PublicTransDashboard"><button type="button" style={{ marginLeft:'5px'}} className="btn btn-secondary">Back</button></a> */}
        <br></br><br></br>
      </form>
      </div><br></br>
    </div>  </div>
    )
}
export default TimeTableTrain;