import React,{useState, useEffect} from "react";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert'; // npm install react-confirm-alert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; //report generation


function ViewSchedule(){

    //  // Delete Function

  const onDelete = (id) =>{

    confirmAlert({

        title: 'Confirm to Delete',

        message: 'Are you sure you want to delete this.',

        buttons: [

          {

            label: 'Yes',

            onClick: () => axios.delete(`http://localhost:8070/schedule/delete/${id}`).then((res) =>{

                //alert("Deleted successfully!");

                //this.retrievePosts();

              })

          },

          {

            label: 'No',

          }

        ]

      });}


    
// Creating states for assigning user input data
const [schedule, SetSchedule] = useState([]);
   
  useEffect(() => {
    function getSchedule() {
        axios.get("http://localhost:8070/schedule").then((res)=>{
            
            console.log(res.data)
            SetSchedule(res.data);
            
        }).catch((err)=>{
            alert(err.message);
        })
    }

    getSchedule();
  }, [schedule])

    

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
              <a class="nav-link" href="/ScheduleForm">Shedule Management <span class="sr-only">(current)</span></a>
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


    <div>
    <label style={{ marginLeft:'40%',marginRight:'15px', fontSize:'25px', fontWeight:'bold',marginTop:'40px'}}>SCHEDULE TIMETABLE</label>
       
        <table id="viewscheduleid" className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
            <tr>
                <th></th>
            <th>Schedule ID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Customer Name</th>
            <th>Driver Name</th>
            <th>Public Transport</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>

            {
                schedule.map((schedule) =>(
                    <tr>
                        <td></td>
                    <td>{schedule.scheduleID}</td>
                    <td>{schedule.startDate}</td>
                    <td >{schedule.endDate}</td>
                    <td >{schedule.customerName}</td>
                    <td>{schedule.driverName}</td>
                    <td>{schedule.publicTransport}</td>
                    <td>

                    <a href={`/UpdateSchedule/${schedule._id}`}><button type="/UpdateSchedule"  className="btn btn-primary" >UPDATE</button> </a> 
                       <a className="btn btn-danger" href="#" onClick={() =>onDelete(schedule._id)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                    </td>
                    </tr>
                ))
            }
            


        </tbody>
        </table>

        <button  type="button" className="btn btn-info" style={{marginLeft:'30px', marginRight:'0px' }}>
        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-info"
                    table="viewscheduleid"
                    filename="Schedule_Details"
                    sheet="routes_details_xls"
                    buttonText="Download Schedule Details"
                     style={{marginLeft:'0px', marginRight:'0px',padding:'1px 1px'}}/>
                    
                    </button>
                    
        {/* <a  href="/PublicTransDashboard"><button type="button" style={{ marginLeft:'45%',marginTop:'2%',marginBottom:'2%'}} className="btn btn-primary">Back</button></a> */}

    </div>
  
    </div>
    )
}

export default ViewSchedule;




