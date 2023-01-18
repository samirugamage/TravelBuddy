import React,{useState,useEffect} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


function ScheduleForm(){

    const notify = () => toast("Successfully Add new Schedule !");
    const notify_2 = () => toast("This Schedule already exists");

    // Getting data from traveller preffered data
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


     //view all Driver Details
     const [Driver,setDrivers] = useState([]); 

     useEffect(()=>{
   
           function getDriver () {
              axios.get("http://localhost:8070/driver/")
              .then((res)=>{
   
               
               console.log("your data has been received")
               console.log(res.data)
               
               
               setDrivers(res.data); 
               
           
           }).catch((err)=>{
                   alert(err.message);
              })
           }
           getDriver();
       },[Driver]) 
       
    
    // Getting Route details
        const [router, SetRouter] = useState([]);
        
        useEffect(() => {
        function getRouter() {
            axios.get("http://localhost:8070/trip/").then((res)=>{
                
                console.log(res.data)
                SetRouter(res.data);
                
            }).catch((err)=>{
                alert(err.message);
            })
        }

        getRouter();
        }, [router])



        // Getting data from train table
        // Creating states for assigning user input data
        const [trains, SetTrains] = useState([]);
        
        useEffect(() => {
        function getTrains() {
            axios.get("http://localhost:8070/train/").then((res)=>{
                
                console.log(res.data)
                SetTrains(res.data);
                
            }).catch((err)=>{
                alert(err.message);
            })
        }

        getTrains();
        }, [trains])


    
    // Creating states for assigning user input data
    const [scheduleID, SetScheduleID] = useState("");
    const [startDate, SetStartDate] = useState("");
    const [endDate, SetEndDate] = useState("");
    const [customerName, SetCustomerName] = useState("");
    const [driverName, SetDriverName] = useState("");
    const [publicTransport, SetPublicTransport] = useState("");
  
    
// -------------------------------------------------------------creating function to send data------------------------------------------
    function sendData(e){
        e.preventDefault();
        

        const newschedule ={
            scheduleID,
            startDate,
            endDate,
            customerName,
            driverName,
            publicTransport

        }

        
        // creating axios request for send data to backend
        axios.post("http://localhost:8070/schedule/addSchedule",newschedule).then(()=>{
            notify();
           
            
        }).catch((err)=>{
            notify_2();
        })
    }

    
    const filldata = (e) => { 
        e.preventDefault();
        document.getElementById("ScheduleID").value = "Sh021";
        SetScheduleID( "Sh021");
        document.getElementById("CustomerName").value = "john de siva";
        SetCustomerName("john de siva");
	document.getElementById("DriverName").value = "Kasun Perera";
    SetDriverName("Kasun Perera");
	document.getElementById("PublicTransport").value = "day1 by kasun perera, vehicle number:CBF-2345, toyota chr, day2 by nimal silva, vehicle number:ABF234";
    SetPublicTransport("day1 by kasun perera, vehicle number:CBF-2345, toyota chr, day2 by nimal silva, vehicle number:ABF234");
        
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
              <a class="nav-link" href="/AdminPanel">Home<span class="sr-only">(current)</span></a>
            </li>
            
            <li class="nav-item active">
              <a class="nav-link" href="/ScheduleForm">Shedule Management</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/timeTableTrain">Public Transport<span class="sr-only">(current)</span></a>
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
    
<div style={{ marginTop:'5%'}}>  
                <a  href="/ScheduleForm"><button style={{ marginLeft:'38%'}} type="button" class="btn btn-success">Create New Schedule</button></a>
                <a  href="/ViewSchedule"><button style={{ marginLeft:'25px',marginRight:'15px'}} type="button" class="btn btn-secondary">View Schedules</button></a>

        </div>
    
    
    <div className="container" >

        <br></br>
       <div style={{border: '2px solid rgba(0,255,0,0.3)'}}>

        <br></br>
        <h3 style={{ marginLeft:'40%'}}>CREATE SCHEDULE</h3>
        <br></br>

        <form style={{ marginLeft:'25px',marginRight:'15px'}} onSubmit={sendData}>
         
        <label >Schedule ID :</label>
                <input style={{ marginBottom:'10px'}} type="text" required class="form-control" id="ScheduleID" placeholder="Schedule ID" 
                onChange={(e) =>{
                    SetScheduleID(e.target.value);
                }}/>

        {/* <div className="form-row">
            <div className="col">
            <label >Start Date :</label>
                <input style={{ marginBottom:'10px'}} type="date" required class="form-control" id="StartDate"  
                onChange={(e) =>{
                    SetStartDate(e.target.value);
                }}/>
            </div>

            <div className="col">
            <label >End Date :</label>
                <input style={{ marginBottom:'10px'}} type="date" required class="form-control" id="EndDate"  
                onChange={(e) =>{
                    SetEndDate(e.target.value);
                }}/>
            </div>
        </div>   */}

                <label >Start Date :</label>
                <DatePicker selected={startDate} onChange={date => SetStartDate(date)} minDate={new Date()} style={{ marginBottom:'10px'}} class="form-control"/>

                <label >End Date :</label>
                <DatePicker selected={endDate} onChange={date => SetEndDate(date)} minDate={new Date()} style={{ marginBottom:'10px'}} class="form-control"/>
        

        

        <label >Customer Name :</label>
                <input style={{ marginBottom:'10px'}} type="text" required class="form-control" id="CustomerName" placeholder="Customer Name" 
                onChange={(e) =>{
                    SetCustomerName(e.target.value);
                }}/>

        <label >Driver Name :</label>
                <input style={{ marginBottom:'10px'}} type="text" required class="form-control" id="DriverName" placeholder="Driver Name" 
                onChange={(e) =>{
                    SetDriverName(e.target.value);
                }}/>

        <label >Transport Description:</label>
        <textarea style={{ marginBottom:'10px'}} class="form-control" required id="PublicTransport" rows="3" placeholder="Information"
         onChange={(e) =>{
            SetPublicTransport(e.target.value);
        }}></textarea>
                



        <br></br>

        
        <button type="submit" className="btn btn-success">Create Schedule</button>
        <a  href="/AdminPanel"><button type="button" style={{ marginLeft:'5px'}} className="btn btn-secondary">Back</button></a>
        <button onClick={filldata} className="btn btn-secondary" style={{ marginLeft:'20px'}}>DEMO</button>
        <br></br><br></br>
      </form>
      </div><br></br>
    </div>  
    
        {/* Displaying trip details */}
        <div className="container">

        <label style={{ marginLeft:'40%',marginRight:'15px', fontSize:'25px', fontWeight:'bold',marginTop:'40px'}}>VIEW TRIP</label>
       
       <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
           <tr>
               <th></th>
           <th>Route ID</th>
           <th>Customer Name</th>
           <th>Guide Name</th>
           <th>Start Date</th>
           <th>End Date</th>
           <th>Start Place</th>
           <th>End Place</th>
           <th>Route Details</th>
          
           </tr>
       </thead>
       <tbody>

           {
               router.map((router) =>(
                   <tr>
                       <td></td>
                   <td>{router.route_ID}</td>
                   <td>{router.cust_name}</td>
                   <td >{router.guide_name}</td>
                   <td >{router.startDate}</td>
                   <td>{router.endDate}</td>
                   <td>{router.startPlace}</td>
                   <td>{router.endPlace}</td>
                   <td>{router.Locations}</td>
                   
                   </tr>
               ))
           }
           


       </tbody>
       </table>

        </div>

{/* Displaying traveler preffered data */}
<div className="container">
    <label style={{ marginLeft:'40%',marginRight:'15px', fontSize:'25px', fontWeight:'bold',marginTop:'40px'}}>TRAVELER PREFFERD DATA</label>
       
        <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
            <tr>
                <th></th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>No Of Travelers</th>
            <th>Transport Type</th>
            </tr>
        </thead>
        <tbody>

            {
                travelForm.map((travelForm) =>(
                    <tr>
                        <td></td>
                    <td>{travelForm.startDate}</td>
                    <td>{travelForm.endDate}</td>
                  
                    <td >{travelForm.nooftraveler}</td>
                   
                    <td>{travelForm.transporttype}</td>
                   
                    
                    </tr>
                ))
            }
            


        </tbody>
        </table>




    </div>

    {/* Displaying Train time table */}
    <div className="container">
    <label style={{ marginLeft:'40%',marginRight:'15px', fontSize:'25px', fontWeight:'bold',marginTop:'40px'}}>PUBLIC TRANSPORT TIMETABLE</label>
             
        <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
            <tr>
                <th></th>
                <th>Type</th>
            <th>Name</th>
            <th>Start Location</th>
            <th>Start Time</th>
            <th>End Location</th>
            <th>End Time</th>
            </tr>
        </thead>
        <tbody>

            {
                trains.map((train) =>(
                    <tr>
                        <td></td>
                     <td>{train.trnspodtType}</td>
                    <td>{train.trainName}</td>
                    <td>{train.startStation}</td>
                    <td >{train.endStation}</td>
                    <td >{train.startTime}</td>
                    <td>{train.endTime}</td>
                    
                    
                    </tr>
                ))
            }
            


        </tbody>
        </table>
        {/* <a  href="/PublicTransDashboard"><button type="button" style={{ marginLeft:'45%',marginTop:'2%',marginBottom:'2%'}} className="btn btn-primary">Back</button></a> */}
            
            {/* Driver details */}
            <div className="container">
                    
                    <label style={{ marginLeft:'40%',marginRight:'15px', fontSize:'25px', fontWeight:'bold',marginTop:'40px'}}>DRIVER DETAILS</label>

        <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
            <tr>
            
            <th>Full Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>NIC Number</th>
            <th>Vehicle Number</th>
            <th>Vehicle Type</th>
            

            </tr>
            </thead>
            <tbody>
            {
                Driver.map((traveler)=>(
                <tr>
                    <td>{traveler.Full_name}</td>
                    <td>{traveler.Address}</td>
                    <td>{traveler.Email}</td>
                    <td>{traveler.Contact_Number}</td>
                    <td>{traveler.NIC_Number}</td>
                    <td>{traveler.VehicleNum}</td>
                    <td>{traveler.VehicleType}</td>
                   

                </tr>

                ))
            }
            </tbody>
            
    </table>
            </div>
    </div>

    </div>
    )
}
export default ScheduleForm;