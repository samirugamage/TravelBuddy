

import React,{useState,useEffect} from 'react';
import axios from "axios";


//npm install these dependancies

// import {BrowserRouter as Router, Route} from "react-router-dom";

function ViewPost() {

  
  const [description,setDescription] = useState("");
  const [name,setName] = useState("");

  

  function sendData(e){
      e.preventDefault(); // to execute only the function "sendData" without submitting data.
      
      const newPost = {
          
         
          description,name
         
      }

      //input any authentications are needed
      //(path,function needed to execute)
      axios.post ( "http://localhost:8070/community/add",newPost).then(()=>{
          alert("Post Added")
          

      }).catch((err)=>{
          alert(err)
      })


      console.log(newPost); //printing the sent form data on console.log f12
      
   }

////////////////get all communitys from the database via backend//////////////////////////////
const [communitys,setCommunitys] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getCommunitys () {
           axios.get("http://localhost:8070/community/")
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data)
            
            
            setCommunitys(res.data); //using setCommunitys function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getCommunitys();
    },[communitys]) //[communitys] to update the array instantly when changed rather than refresh page.



    const filldata = (e) => { 
      e.preventDefault();
      document.getElementById("inputName").value = "Anne M";
      setName( "Anne M");
      document.getElementById("inputPostDescription").value = "I was in Sri Lanka for a week in end of Feb, 2009. This is my third trip there. The last time was there was in 2002, which I enjoyed very much. The place has changed considerably. I've been to many places but this was the worst trip I ever took. It took almost 2 hours to get to the hotel from the airport, whereas it used to take only 20mins in my previous trips. There were army checkpoints every 500m. The taxi driver had to stop the car and provide ID and answer questions at every single check points. It was very annoying and made me feel unsafe. The weather did not help either. It was raining pretty much everyday that I was there. I found the locals and the staff to be very unfriendly. The people seem very tense. I understand that there is a war going on the north but atleast the paid staff should treat the guests properly. I would not recommend anyone to travel to Sri Lanka now.";
      setDescription("I was in Sri Lanka for a week in end of Feb, 2009. This is my third trip there. The last time was there was in 2002, which I enjoyed very much. The place has changed considerably. I've been to many places but this was the worst trip I ever took. It took almost 2 hours to get to the hotel from the airport, whereas it used to take only 20mins in my previous trips. There were army checkpoints every 500m. The taxi driver had to stop the car and provide ID and answer questions at every single check points. It was very annoying and made me feel unsafe. The weather did not help either. It was raining pretty much everyday that I was there. I found the locals and the staff to be very unfriendly. The people seem very tense. I understand that there is a war going on the north but atleast the paid staff should treat the guests properly. I would not recommend anyone to travel to Sri Lanka now.");
      
      
    }

//




    return (
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
      <li class="nav-item active">
        <a class="nav-link" href="/viewpost">Community</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="/eventspage">Events <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Cntus">Contact Us</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="Cmpform">Make a Complain</a>
      </li>
      
    </ul>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

    <ul class="navbar-nav ms-auto">
    <button type="button ms-suto" class="btn btn-warning ms-suto">Plan Your Trip</button>


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
    

            
            <img src="../img/Hiriketiya.jpeg" class="rounded float-right" width="1500" height="400"  alt="Responsive image"></img>
            

        
    <div className='container'>

      <br></br> <br></br>
      <h3>Add Community Posts</h3>
    <form onSubmit={sendData}>

{/* getting name */}
<div className="form-row" >
<div className="form-group col-md-6">
  <label for="inputName">Name</label>
  <input type="Text" className="form-control" id="inputName" placeholder="write your Name" 
  onChange={(e)=>{ //onchange refers to saving automatically when typing

      setName(e.target.value); //save the target values in name variable
  }} />
</div>
</div>
{/* getting description              */}
<div className="form-row" >
<div className="form-group col-md-6">
  <label for="inputPostDescription">Description</label>
  <input type="Text" className="form-control" id="inputPostDescription" placeholder="write your experience.." 
  onChange={(e)=>{ //onchange refers to saving automatically when typing

      setDescription(e.target.value); //save the target values in name variable
  }} />
</div>
</div>



<button type="submit" className="btn btn-primary">Add a post</button>
<button onClick={filldata} className="btn btn-secondary" style={{ marginLeft:'20px'}}>DEMO</button>
</form> 


<br></br> <br></br>
        <h3>Community Posts</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                
                  <th>Sri Lanka, General Reviews</th>
                  
                  
                </tr>
                </thead>
                  <tbody>
                  {
                    communitys.map((community)=>(
                      <tr>
                        <tr>
                        <img src="../img/profile.png" class="rounded float-left" width="80" height="80"  alt="Responsive image"></img>
                        </tr>
                        <tr>
                        <td>{community.name}</td>
                        </tr>
                        <tr>
                        <td>{community.description}</td>
                        </tr>
                      </tr>

                    ))
                  }
                  </tbody>
                  

          
              
             
              </table>
              </div>
              </div>
    );
                }
                
export default ViewPost;