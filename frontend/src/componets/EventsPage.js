import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

// import log from "../images/wallpaper.jpg";
// import Button from 'react-bootstrap/Button';

import React,{useState,useEffect} from 'react';
import axios from "axios";

//npm install these dependancies
// import Button from 'react-bootstrap/Button';
// import { CFormSelect } from '@coreui/react';
// import {BrowserRouter as Router, Route} from "react-router-dom";

function EventsPage() {

////////////////get all events from the database via backend//////////////////////////////
const [events,setEvents] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getEvents () {
           axios.get("http://localhost:8070/event/")
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data)
            
            
            setEvents(res.data); //using setEvents function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getEvents();
    },[events]) //[events] to update the array instantly when changed rather than refresh page.



    return (
      <div >
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
      <li class="nav-item active">
        <a class="nav-link" href="/eventspage">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/locationp">Locations</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      
    </ul>
    <a href="/travelerForm"><button type="button"  class="btn btn-warning">Plan Your Trip</button></a>

    <div>

    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">LogIn </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">|</a>
      </li>
      <li class="nav-item active">
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
    

</div>

        <div className='container'>
         
              {/* ////////////////////////////////// view all events by table /////////////////////////////////////////  */ }


            <h3>Event List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                
                  <th>Event Name</th>
                  <th>Event description</th>
                  <th>Event Website</th>
                  
                </tr>
                </thead>
                  <tbody>
                  {
                    events.map((event)=>(
                      <tr>
                        <td>{event.name}</td>
                        <td>{event.description}</td>
                        <td> <a href={event.eventLink}><button type="/eventwebsite" className="btn btn-primary">Go To Event Website</button> </a> </td>
                        
                        
                      </tr>

                    ))
                  }
                  </tbody>
                  

          
              
             
              </table>








              {/* ////////////////////////////////// view all events by cards /////////////////////////////////////////  */ }
          
              </div>
          


    </div>



                


        

        
      );
    }
        
        export default EventsPage;



        






       