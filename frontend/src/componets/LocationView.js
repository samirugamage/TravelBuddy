import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";

function LocationView (){

    // Delete Function

    const onDelete = (id) =>{

   

      let ans = window.confirm("Are you sure want to delete your Location?");
  
      if(ans){  
  
        axios.delete(`http://localhost:8070/Location/delete/${id}`).then((res) =>{
          alert("Deleted successfully!");
  
          }).catch((err)=>{
  
          alert(err.message);
  
         })
  
      }    
  
  
  
  }
    // const onDelete = (id) =>{

    //     axios.delete(`http://localhost:8070/Location/delete/${id}`).then((res) =>{
    //       alert("Deleted successfully!");
    //       this.retrievePosts();
    //     })
    //   }


    const [Location,setLocations] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getLocation () {
           axios.get("http://localhost:8070/Location/")
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data)
            
            
            setLocations(res.data); //using setLocation function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getLocation();
    },[Location]) //[Traveler] to update the array instantly when changed rather than refresh page.

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
              <a class="nav-link" href="/aloca">Add Location<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/locationview">View Locations</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/hotel">Add Hotel</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/hotelview">View Hotels</a>
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
    

    <div className="container" >

        {/* ////////////////////////// View Location on a table//////////////////// */}
<br/><br/><br/>
<center><h3> L O C A T I O N S &nbsp;&nbsp;   L I S T </h3></center>
<br/>
<table className="table table-striped" style={{ marginTop: 20 }}>
  <thead>
    <tr>
    
    <th>location Name</th>
      <th>location description</th>
      <th>District</th>
      {/* <th>Location photo</th> */}
      <th>update</th>
      <th>Delete</th>

    </tr>
    </thead>
      <tbody>
      {
        Location.map((location)=>(
          <tr>
            <td>{location.LocationName}</td>
            <td>{location.description}</td>
            <td>{location.district}</td>
            <td> <a href={`/editlo/${location._id}`}><button type="/editlo" className="btn btn-primary">UPDATE</button> </a> </td>
            <td> <a className="btn btn-danger" href="#" onClick={() =>onDelete(location._id)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
 </td>
          </tr>

        ))
      }
      </tbody>
      


 
  </table>

  <br/><br/><center>
            <div style={{marginLeft:'250px',marginRight:'350px'}}><button type="button" class="btn btn-outline-dark btn-lg btn-block"><a href="/aloca">
                Add Location</a></button>
            </div>
        </center>
        <br/><br/><br/><br/><br/><br/>

    </div></div>

)

}
export default LocationView;