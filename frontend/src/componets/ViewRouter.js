
//IT21055058
//Kumara L.L.M.N.
//Route Management


import React,{useState, useEffect} from "react";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import ReactHTMLTableToExcel from 'react-html-table-to-excel'; //report generation

function ViewRouter(){




// Creating states for assigning user input data
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


  // Delete Function

  const onDelete = (id) =>{



    confirmAlert({

        title: 'Confirm to Delete',

        message: 'Are you sure you want to delete this.',

        buttons: [

          {

            label: 'Yes',

            onClick: () => axios.delete(`http://localhost:8070/trip/delete/${id}`).then((res) =>{

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

      {/* //--------------------------------------Search-------------------------------------------------- */}
      <div className="col-lg-3 mt-2 mb-2">
             <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchTerm"
              //onChange={handleTextSearch}
            ></input>
      </div>      
      {/* //--------------------------------------Search End-------------------------------------------------- */}

    <label style={{ marginLeft:'40%',marginRight:'15px', fontSize:'25px', fontWeight:'bold',marginTop:'40px'}}>VIEW TRIP</label>
       
        <table className="table table-striped" style={{ marginTop: 20 }} id="view_routes">
        <thead>
            <tr>
                <th>No.</th>
            <th>Route ID</th>
            <th>Customer Name</th>
            <th>Guide Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Start Place</th>
            <th>End Place</th>
            <th>Route Details</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>

            {
                router.map((router,index) =>(
                    <tr key={index}>
                        {/* <td></td> */}
                        <th scope = "row">{index+1}</th>
                    <td>{router.route_ID}</td>
                    <td>{router.cust_name}</td>
                    <td >{router.guide_name}</td>
                    <td >{router.startDate}</td>
                    <td>{router.endDate}</td>
                    <td>{router.startPlace}</td>
                    <td>{router.endPlace}</td>
                    <td>{router.Locations}</td>
                    <td>
                    <a href={`/updateTrip/${router._id}`}><button type="/updateTrip"  className="btn btn-primary" >UPDATE</button> </a>
                    <br></br>
                    <a className="btn btn-danger" href="#" onClick={() =>onDelete(router._id)}>
                                                <i className="far fa-trash-alt"></i>&nbsp;Delete
                                            </a>

                    </td>
                    </tr>
                ))
            }
            


        </tbody>
        </table>


        <a  href="/AdminPanel"><button type="button" style={{ marginLeft:'45%',marginTop:'2%',marginBottom:'2%'}} className="btn btn-primary">Back</button></a>
        <button  type="button" className="btn btn-info" style={{marginLeft:'30px', marginRight:'0px' }}>
        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-info"
                    table="view_routes"
                    filename="routes_details"
                    sheet="routes_details_xls"
                    buttonText="Download Trips Details"
                     style={{marginLeft:'0px', marginRight:'0px',padding:'1px 1px'}}/>
                    
                    </button>


    </div></div>
  
       
    )
}

export default ViewRouter;




