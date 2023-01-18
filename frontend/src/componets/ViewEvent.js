//IT21098246
//Samiru J.G.S
//Event Management

import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";

import ReactHTMLTableToExcel from 'react-html-table-to-excel'; //report generation



import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

//toastify alert messages
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddEvent (){

 //add toastify message
 const notify = () => toast("Successfully event added");


    
// Delete Function
const onDelete = (id) =>{

  confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => axios.delete(`http://localhost:8070/event/delete/${id}`).then((res) =>{
              
            })
        },
        {
          label: 'No',
         
        }
      ]
    });

  
}
   




      


    //addevent function//
    const [name,setName] = useState("");
    const [eventType,setEventType] = useState("");
    const [description,setDescription] = useState("");
    const [date,setDatee] = useState("");
    const [place,setPlace] = useState("");
    const [eventLink,setEventLink] = useState("");
    


    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const newEvent = {
            name,
            eventType,
            description,
            date,
            place,
            eventLink
           
            
        }

        //input any authentications are needed
        //(path,function needed to execute)
        axios.post ( "http://localhost:8070/event/add",newEvent).then(()=>{
            //alert("Event Added")
            notify();
            
            
            

        }).catch((err)=>{
            alert("event already exists")
        })


        // console.log(newEvent); //printing the sent form data on console.log f12
        
    }

    //view all events function//
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

   

    // add search prathila-------------------------------------
  //   filterData(posts,searchKey)
  //   {

  //     const result = events.filter((event) =>
      
  //     event.name.toLowerCase().includes(searchKey)||
  //     event.eventType.toLowerCase().includes(searchKey)
     
  //     )
  
  //     this.setState({events:result})
  
  //   }
  
  // handleSearchArea=(e) =>{
  //   const searchKey= e.currentTarget.value;
  
  //   axios.get("/posts").then(res =>{
  //     if(res.data.success){
  //      this.filterData(res.data.existingPosts,searchKey)
  
  //     }
  
  //     })
  
  
  
  // }
  
    // --------------------------------------------------------



    return (
        <div  >
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
              <a class="nav-link" href="/addevent">Add Event </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/viewevent"><span class="sr-only">(current)</span>View Events</a>
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
   
{/* ////////////////////////// View events on a table//////////////////// */}
<div className="container">

<div className="form-row">

  <div className="col">
    <h3> Event List </h3>
  </div>



  </div>


</div>



<table id="eventTable" className="table table-striped" style={{ marginTop: 20 }}>


  <thead>
    <tr>
    
      <th>Event Name</th>
      <th>Event Type</th>
      <th>Event Description</th>
      <th>Event Date</th>
      <th>Event Location</th>
      <th>Event Link</th>

      <th>Update</th>
      <th>Delete</th>
      
    </tr>
    </thead>
      <tbody>
      {
        events.map((event)=>(
          <tr>
            <td>{event.name}</td>
            <td>{event.eventType}</td>
            <td>{event.description}</td>
            <td>{event.date}</td>
            <td>{event.place}</td>
            <td> <a href={event.eventLink}><button type="/eventwebsite" className="btn btn-primary">Go To Event Website</button> </a> </td>
            <td> <a href={`/editevent/${event._id}`}><button type="/editevent" className="btn btn-primary">UPDATE</button> </a> </td>
            <td><a className="btn btn-danger" href="#" onClick={() =>onDelete(event._id)}> <i className="far fa-trash-alt"></i>Delete</a></td>
            
          </tr>

        ))
      }
      </tbody>
      
      


  
 
  </table>


  <button  type="button" className="btn btn-info" style={{marginLeft:'30px', marginRight:'0px' }}>
        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-info"
                    table="eventTable"
                    filename="Schedule_Details"
                    sheet="Event_details_xls"
                    buttonText="Download Schedule Details"
                     style={{marginLeft:'0px', marginRight:'0px',padding:'1px 1px'}}/>
                    
                    </button>

  </div>

  


)

}
export default AddEvent;