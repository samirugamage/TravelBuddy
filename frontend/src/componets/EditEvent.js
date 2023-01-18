//IT21098246
//Samiru J.G.S
//Event Management

import React ,{useState , useEffect} from "react"; //useState is needed for functional components
import axios from "axios";
import { useLocation } from "react-router-dom";

function EditEvent (){

    const [form , setForm] = useState({
        status:"",
        name:"",
        eventType:"",
        description:"",
        date:"",
        place:"",
        eventLink:"",
    })
    

    const [name,setName] = useState("");
    const [eventType,setEventType] = useState("");
    const [description,setDescription] = useState("");
    const [date,setDate] = useState("");
    const [place,setPlace] = useState("");
    const [eventLink,setEventLink] = useState("");

    const location = useLocation();
    console.log(location); //testing for function in console getting ID
    const id= location.pathname.split("/")[2];
    console.log(id);  //testing for function in console and splitting ID

    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const updateEvent = {
            name,
            eventType,
            description,
            date,
            place,
            eventLink
        }
console.log(updateEvent);
        //input any authentications are needed
        //(path,function needed to execute)
        axios.put( `http://localhost:8070/event/update/${id}`,updateEvent).then(()=>{
            alert("Event Edited")
           
            

        }).catch((err)=>{
            alert(err)
        })


        console.log(updateEvent); //printing the sent form data on console.log f12
        
    }


    
    const [events,setEvents] = useState([]); //taking all the datas from mongoDB input into this array
    // const params = useParams();
    useEffect(()=>{

            function getEvents () {
              axios.get(`http://localhost:8070/event/get/${id}`)
              .then((res)=>{

                
                console.log("your data has been received")
                console.log(res.data.event)

                //alert(res.data)
                
                
                //setEvents(res.data); //using setEvents function to retrieve data and display on website
                setForm(res.data.event);

                setName(res.data.event.name);
                setEventType(res.data.event.eventType);
                setDescription(res.data.event.description);
                setDate(res.data.event.date);
                setPlace(res.data.event.place);
                setEventLink(res.data.event.eventLink);

            }).catch((err)=>{
                    alert(err.message);
              })
            }
            getEvents();
        },[events]) //[events] to update the array instantly when changed rather than refresh page.




    
   


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
          
        <div className="container" >
            
            <br></br>
        <h3> Update Event </h3>
        <br></br>
            <form onSubmit={sendData}>
           
          
            <div className="form-row" >
            <div className="form-group col-md-6">

            
                <label for="inputEventName">Event Name </label>
            
                <input type="Text" className="form-control" id="inputEventName" placeholder="Event Name.." 
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setName(e.target.value); //save the target values in name variable
                }} 
                defaultValue={form.name}
                />
            
            </div>
            </div> 

            <div className="form-group">
            <label for="inputEventType">Event Type</label>
            <select  id="inputeventType" className="form-control" 
            onChange={(e)=>{ //onchange refers to saving automatically when typing

                setEventType(e.target.value); //save the target values in name variable
            }} 
            >
                 <option defaultValue>{form.eventType}</option>
                <option>Cultural</option>
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
            defaultValue={form.description}
            />
            </div>

           
                            {/* date/ */}
            <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputDate">Date</label>
            
                <input style={{ marginLeft:'10px'}}  type="date" id="startDate" name="startDate" defaultValue={form.date}
                onChange={(e) =>{ //onchange refers to saving automatically when typing
                 setDate(e.target.value); //save the target values in name variable
        }}
        />
            </div>
            </div>



            <div className="form-group col-md-4">
                <label for="inputDistric">Location</label>
                <select id="inputState" className="form-control"
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setPlace(e.target.value); //save the target values in name variable
                }} 
                
                >
                <option defaultValue>{form.place}</option>
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
                }} 
                defaultValue={form.eventLink}/>
            </div>
            </div>


            </div>

            


            <button type="submit" className="btn btn-primary">Update event</button>
        </form>
        
        </div>
        </div>
            


    )
    
}
export default EditEvent;