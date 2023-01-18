import React,{useState, useEffect} from "react";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert'; // npm install react-confirm-alert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


function ViewTimeTbTrain(){


    
// Delete Function
    // const onDelete = (id) =>{

    //     axios.delete(`http://localhost:8070/train/delete/${id}`).then((res) =>{
    //       alert("Deleted successfully!");
    //       this.retrievePosts();
    //     })
    //   }

    // const onDelete= (id)=>{

   

    //     let ans = window.confirm("Are you sure want to delete this time slot ?");
    
    //     if(ans){  
    
    //     axios.delete(`http://localhost:8070/train/delete/${id}`).then((res)=>{
    
    //         alert("Time slot deleted successfully!");
    
    //         this.props.history.push('/');
    
    //         }).catch((err)=>{
    
    //         alert(err.message);
    
    //        })
    
    //     }    
    
    
    // }


    // Delete Function

  const onDelete = (id) =>{

    confirmAlert({

        title: 'Confirm to Delete',

        message: 'Are you sure you want to delete this.',

        buttons: [

          {

            label: 'Yes',

            onClick: () => axios.delete(`http://localhost:8070/train/delete/${id}`).then((res) =>{

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
  }, [trains]);

    

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
                <a  href="/timeTableTrain"><button style={{ marginLeft:'38%'}} type="button" class="btn btn-secondary">Add New Time</button></a>
                <a  href="/ViewTimeTbTrain"><button style={{ marginLeft:'25px',marginRight:'15px'}} type="button" class="btn btn-success">View Time Table</button></a>

        </div>

    <div>
    <label style={{ marginLeft:'35%',marginRight:'15px', fontSize:'25px', fontWeight:'bold',marginTop:'40px'}}>PUBLIC TRANSPORT TIMETABLE</label>
       {/* <ul>{trains.map(train => <li key={train.id}>{train.trainName}</li>
       )}</ul> */}
       
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
            <th>Action</th>
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
                    <td>
                    <a href={`/updateTimeTableTrain/${train._id}`}><button type="/updateTimeTableTrain"  className="btn btn-primary" >UPDATE</button> </a> 

                    <a className="btn btn-danger" href="#" onClick={() =>onDelete(train._id)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                    </td>
                    </tr>
                ))
            }
            


        </tbody>
        </table>

    </div>
    </div>
  
       
    )
}

export default ViewTimeTbTrain;



