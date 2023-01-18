//IT21098246
//Samiru J.G.S
//Event Management

import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";


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


        const filldata = (e) => { 
          e.preventDefault();
          document.getElementById("inputEventName").value = "Esala Perahara";
          setName( "Esala Perahara");
          document.getElementById("inputDescription").value = "The Kandy Esala Perahera (the Sri Dalada Perahara procession of Kandy) also known as The Festival of the Tooth is a festival held in July and August in Kandy, Sri Lanka. This historical procession is held annually to pay homage to the Sacred Tooth Relic of Buddha, which is housed at the Sri Dalada Maligawa in Kandy. A unique symbol of Sri Lanka, the procession consists of traditional local dances such as fire dances and performances in whip-dance garments. The festival ends with the traditional Diya-kepeema ritual, a water cutting ceremony which is held at the Mahaweli River at Getambe, Kandy.";
          setDescription("The Kandy Esala Perahera (the Sri Dalada Perahara procession of Kandy) also known as The Festival of the Tooth is a festival held in July and August in Kandy, Sri Lanka. This historical procession is held annually to pay homage to the Sacred Tooth Relic of Buddha, which is housed at the Sri Dalada Maligawa in Kandy. A unique symbol of Sri Lanka, the procession consists of traditional local dances such as fire dances and performances in whip-dance garments. The festival ends with the traditional Diya-kepeema ritual, a water cutting ceremony which is held at the Mahaweli River at Getambe, Kandy.");
          document.getElementById("inputEventLink").value = "https://kandyesalaperahera.com/";
          setEventLink("https://kandyesalaperahera.com/");
          
        }
  
  //
  
  
  



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
                 <li class="nav-item active">
                   <a class="nav-link" href="/addevent">Add Event </a>
                 </li>
                 <li class="nav-item ">
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
        
        <div className="container" >
          <br></br>
        <h3> Add New Event </h3>
        <br></br>
            <form onSubmit={sendData}>

            <div className="form-row" >
            <div className="form-group col-md-6">
                <label for="inputEventName">Event Name</label>
                <input type="Text" className="form-control" id="inputEventName" placeholder="Event Name.." 
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setName(e.target.value); //save the target values in name variable
                }} />
            </div>
            </div>

            <div className="form-group">
            <label for="inputEventType">Event Type</label>
            <select  id="inputeventType" className="form-control" 
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setEventType(e.target.value); //save the target values in name variable
            }} >
                <option defaultValue>Cultural</option>
                <option>Musical</option>
                <option> Traditional</option>
                <option>Religious</option>
                <option>Entertainment</option>
                
            </select>
            </div>

            <div className="form-group">
            <label for="inputDescription">Description</label>
            <input type="text" className="form-control" id="inputDescription"
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setDescription(e.target.value); //save the target values in name variable
            }} 
            />
            </div>

            <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputDate">Date</label>
                <input style={{ marginLeft:'10px'}}  type="date" id="startDate" name="startDate"
                onChange={(e) =>{
                 setDatee(e.target.value);
        }}/>
            </div>
            </div>

            

            <div className="form-group">
                <label for="inputDistric">Location</label>
                <select id="inputState" className="form-control"
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setPlace(e.target.value); //save the target values in name variable
                }} >
                <option defaultValue>Choose...</option>
                <option>Colombo</option>
                <option> Gampaha</option>
                <option>Kalutara</option>
                <option>Kandy</option>
                <option>Matale</option>
                <option>Nuwara Eliya</option>
                <option> Galle</option>
                <option>Matara</option>
                <option>Hambantota</option>
                <option>Jaffna</option>
                <option>Kilinochchi</option>
                <option>Mannar</option>
                <option>Vavuniya</option> <option>Mullaitivu</option> <option>Batticaloa</option> <option>Ampara</option> 
                <option>Trincomalee</option> <option>Kurunegala</option> <option>Puttalam</option>
                <option>Anuradhapura</option> <option>Polonnaruwa</option> <option>Badulla</option> <option>Moneragala</option> 
                <option>Ratnapura</option>
                <option>Kegalle</option>
                
                </select>


                <div className="form-row" >
                <div className="form-group col-md-6">
                <label for="inputEventLink">Event Website Link</label>
                <input type="Text" className="form-control" id="inputEventLink" placeholder="Event Link.." 
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setEventLink(e.target.value); //save the target values in name variable
                }} />
            </div>
            </div>
                <br></br>
                {/* /////////inputting an image into database/////////// */}

                {/* <label for="img">Select image:</label> <br></br>
                <input type="file" id="img" name="img" accept="jpg|jpeg|png"></input> */}
                
            </div>

            

            
            <button onSubmit={sendData} type="submit" className="btn btn-primary">Add an event</button>
            <button onClick={filldata} className="btn btn-secondary" style={{ marginLeft:'20px'}}>DEMO</button>
        </form> 
       <br></br><br></br>


{/* ////////////////////////// View events on a table//////////////////// */}

{/* <h3> Event List </h3>
<table className="table table-striped" style={{ marginTop: 20 }}>
  <thead>
    <tr>
    
      <th>Event Name</th>
      <th>Event description</th>
      <th>Event link</th>

      <th>update</th>
      <th>Delete</th>
      
    </tr>
    </thead>
      <tbody>
      {
        events.map((event)=>(
          <tr>
            <td>{event.name}</td>
            <td>{event.description}</td>
            <td> <a href={event.eventLink}><button type="/eventwebsite" className="btn btn-primary">Go To Event Website</button> </a> </td>
            <td> <a href={`/editevent/${event._id}`}><button type="/editevent" className="btn btn-primary">UPDATE</button> </a> </td>
            <td><a className="btn btn-danger" href="#" onClick={() =>onDelete(event._id)}> <i className="far fa-trash-alt"></i>Delete</a></td>
            
          </tr>

        ))
      }
      </tbody>
      
      


  
 
  </table> */}

</div>
  </div>


)

}
export default AddEvent;