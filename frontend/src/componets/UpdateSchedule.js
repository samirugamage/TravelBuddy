// import React,{useState ,useEffect} from "react";
// import axios from "axios";
// import {useLocation} from "react-router-dom";



// function UpdateSchedule(){

//     // Creating states for assigning user input data


//     const [scheduleID, SetScheduleID] = useState("");
//     const [startDate, SetStartDate] = useState("");
//     const [endDate, SetEndDate] = useState("");
//     const [customerName, SetCustomerName] = useState("");
//     const [driverName, SetDriverName] = useState("");
//     const [publicTransport, SetPublicTransport] = useState("");


//     const location = useLocation();
//     // console.log(location);
//     const id= location.pathname.split("/")[2];
//     // console.log(id);
    

    
// // --------creating function to send data------------------
//     function sendData(e){
//         e.preventDefault();
        
//         const newschedule ={
//                         scheduleID,
//                         startDate,
//                         endDate,
//                         customerName,
//                         driverName,
//                         publicTransport
            
//                     }



        
//         // creating axios request for send data to backend

//         axios.put(`http://localhost:8070/schedule/update/${id}`,newschedule).then(()=>{
//             alert("Submit")
            
//         }).catch((err)=>{
//             alert(err)
//         })
//     }

//     return (


        
//     <div className="container" >

//         <br></br>
//        <div style={{border: '2px solid rgba(0,255,0,0.3)'}}>

//         <br></br>
//         <h3 style={{ marginLeft:'35%'}}>UPDATE SCHEDULE</h3>
//         <br></br>


//         <form style={{ marginLeft:'25px',marginRight:'15px'}} onSubmit={sendData}>
         
//          <label >Schedule ID :</label>
//          <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="ScheduleID" placeholder="Schedule ID" 
//                          onChange={(e) =>{
//                              SetScheduleID(e.target.value);
//                          }}/>
         
//                  <label >Start Date :</label>
//                          <input style={{ marginBottom:'10px'}} type="date" class="form-control" id="StartDate"  
//                          onChange={(e) =>{
//                              SetStartDate(e.target.value);
//                          }}/>
         
//                  <label >End Date :</label>
//                          <input style={{ marginBottom:'10px'}} type="date" class="form-control" id="EndDate"  
//                          onChange={(e) =>{
//                              SetEndDate(e.target.value);
//                          }}/>
         
//                  <label >Customer Name :</label>
//                          <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="CustomerName" placeholder="Customer Name" 
//                          onChange={(e) =>{
//                              SetCustomerName(e.target.value);
//                          }}/>
         
//                  <label >Driver Name :</label>
//                          <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="DriverName" placeholder="Driver Name" 
//                          onChange={(e) =>{
//                              SetDriverName(e.target.value);
//                          }}/>
         
//                  <label >Public Transport :</label>
//                          <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="PublicTransport" placeholder="Public Transport" 
//                          onChange={(e) =>{
//                              SetPublicTransport(e.target.value);
//                          }}/>
         
         
         
//                  <br></br>
         
                 
//                  <button type="submit" className="btn btn-primary">update Schedule</button>
//                  <a  href="/AdminPanel"><button type="button" style={{ marginLeft:'5px'}} className="btn btn-primary">Back</button></a>
//                  <br></br><br></br>
//                </form>



        
//       </div><br></br>
//     </div>  
//     )
// }
// export default UpdateSchedule; 





import React,{useState ,useEffect} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateSchedule(){

//get details from databse and save and display details on form
    const [form , setForm] = useState({
        status:"",
        scheduleID:"",
        startDate:"",
        endDate:"",
        customerName:"",
        driverName:"",
        publicTransport:"",
    })


    const notify = () => toast("Successfully Updated Schedule!");

    
    // Creating states for assigning user input data
    const [scheduleID, SetScheduleID] = useState("");
    const [startDate, SetStartDate] = useState("");
    const [endDate, SetEndDate] = useState("");
    const [customerName, SetCustomerName] = useState("");
    const [driverName, SetDriverName] = useState("");
    const [publicTransport, SetPublicTransport] = useState("");

    const location = useLocation();
    //console.log(location); //testing for function in console getting ID
    const id= location.pathname.split("/")[2];
    //console.log(id);  //testing for function in console and splitting ID
    // trying to get update data-----------------------------------------
    
    
// --------creating function to send data------------------
    function sendData(e){
        e.preventDefault();
        

        const newScheduledata ={
            scheduleID,
            startDate,
            endDate,
            customerName,
            driverName,
            publicTransport

        }

        
        // creating axios request for send data to backend

        axios.put(`http://localhost:8070/schedule/update/${id}`,newScheduledata).then(()=>{
            notify();
            
        }).catch((err)=>{
            alert(err)
        })
        
    }

    const [schedules,setSchedules] = useState([]); //taking all the datas from mongoDB input into this array


///////////////////////getting informmation about events/////////////
useEffect(()=>{

    function getSchedule () {
      axios.get(`http://localhost:8070/schedule/get/${id}`)
      .then((res)=>{

        
        console.log("your data has been received")
        console.log(res.data.schedules)

        //alert(res.data)
        
        
        //(res.data); //using setSchedule function to retrieve data and display on website
        setForm(res.data.schedule);

        SetScheduleID(res.data.schedule.scheduleID);
        SetStartDate(res.data.schedule.startDate);
        SetEndDate(res.data.schedule.endDate);
        SetCustomerName(res.data.schedule.customerName);
        SetDriverName(res.data.schedule.driverName);
        SetPublicTransport(res.data.schedule.publicTransport);

    }).catch((err)=>{
            alert(err.message);
      })
    }
    getSchedule();
},[schedules]) // to update the array instantly when changed rather than refresh page.
///////////////////////end of getting informmation about form/////////////





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
              <a class="nav-link" href="/ScheduleForm">Schedule Management<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/timeTableTrain">Public Transport</a>
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
<a  href="/ScheduleForm"><button style={{ marginLeft:'38%'}} type="button" class="btn btn-secondary">Create New Schedule</button></a>
                <a  href="/ViewSchedule"><button style={{ marginLeft:'25px',marginRight:'15px'}} type="button" class="btn btn-success">View Schedules</button></a>

</div>

        
    <div className="container" >

        <br></br>
       <div style={{border: '2px solid rgba(0,255,0,0.3)'}}>

        <br></br>
        <h3 style={{ marginLeft:'35%'}}>UPDATE SCHEDULE</h3>
        <br></br>

        <form style={{ marginLeft:'25px',marginRight:'15px'}} onSubmit={sendData}>
         
        <label >Schedule ID :</label>
          <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="ScheduleID" placeholder="Schedule ID" 
                         onChange={(e) =>{
                             SetScheduleID(e.target.value);
                         }}
                         defaultValue={form.scheduleID} //setting the value automatically to update schedule form
                         />
         
                 <label >Start Date :</label>
                         <input style={{ marginBottom:'10px'}} type="date" class="form-control" id="StartDate"  
                         onChange={(e) =>{
                             SetStartDate(e.target.value);
                         }}
                         defaultValue={form.startDate}/>
         
                 <label >End Date :</label>
                         <input style={{ marginBottom:'10px'}} type="date" class="form-control" id="EndDate"  
                         onChange={(e) =>{
                             SetEndDate(e.target.value);
                         }}
                         defaultValue={form.endDate}/>
         
                 <label >Customer Name :</label>
                         <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="CustomerName" placeholder="Customer Name" 
                         onChange={(e) =>{
                             SetCustomerName(e.target.value);
                         }}
                         defaultValue={form.customerName} />
         
                 <label >Driver Name :</label>
                         <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="DriverName" placeholder="Driver Name" 
                         onChange={(e) =>{
                             SetDriverName(e.target.value);
                         }}
                         defaultValue={form.driverName}/>
         
                 <label >Public Transport :</label>
                         <input style={{ marginBottom:'10px'}} type="text" class="form-control" id="PublicTransport" placeholder="Public Transport" 
                         onChange={(e) =>{
                             SetPublicTransport(e.target.value);
                         }}
                         defaultValue={form.publicTransport}/>
         
         
         
              

        <br></br>

        
        <button type="submit"  className="btn btn-success">Update Schedule</button>
        <a  href="/ViewTimeTbTrain"><button type="button" style={{ marginLeft:'5px'}} className="btn btn-secondary">Back</button></a>
        <br></br><br></br>
      </form>
      </div><br></br>
    </div>  </div>
    )
}
export default UpdateSchedule; 




























                    























                    
