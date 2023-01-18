import React,{useState, useEffect} from "react";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function ViewTravelForm(){




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
    


    <div>
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


    </div></div>
  
       
    )
}

export default ViewTravelForm;




