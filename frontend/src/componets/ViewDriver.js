import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";

function ViewDriver (){

  //ondelete function///
    // Delete Function
    const onDelete = (id) =>{

      axios.delete(`http://localhost:8070/driver/delete/${id}`).then((res) =>{
        alert("driver Deleted successfully!");
        this.retrievePosts();
      })
    }

    //view all Driver function//
    const [Driver,setDrivers] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getDriver () {
           axios.get("http://localhost:8070/driver/")
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data)
            
            
            setDrivers(res.data); //using setDrivers function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getDriver();
    },[Driver]) //[Driver] to update the array instantly when changed rather than refresh page.

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
            
            <li class="nav-item">
              <a class="nav-link" href="/gui">Travel Guide</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/dri">Transport Agent</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/htl">Hotel Agent</a>
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
              
                <a  href="/dri"><button style={{ marginLeft:'80%',marginRight:'15px'}} type="button" class="btn btn-secondary">Add New Driver</button></a>

        </div>

    <div className="container" >

        {/* ////////////////////////// View Driver on a table//////////////////// */}
<br/><br/><br/>
<h3> Drivers List </h3>
<table className="table table-striped" style={{ marginTop: 20 }}>
  <thead>
    <tr>
    
      <th>Full Name</th>
      <th>Address</th>
      <th>Email</th>
      <th>Contact Number</th>
      <th>NIC Number</th>
      <th>Vehicle Number</th>
      <th>vehicle type</th>
      <th>Password</th>

    </tr>
    </thead>
      <tbody>
      {
        Driver.map((driver)=>(
          <tr>
            <td>{driver.Full_name}</td>
            <td>{driver.Address}</td>
            <td>{driver.Email}</td>
            <td>{driver.Contact_Number}</td>
            <td>{driver.NIC_Number}</td>
            <td>{driver.VehicleNum}</td>
            <td>{driver.VehicleType}</td>
            <td>{driver.Password}</td>
            <td> <a href={`/updateDriver/${driver._id}`}><button type="/updateDriver" className="btn btn-primary">UPDATE</button> </a> </td>
            <td><a className="btn btn-danger" href="#" onClick={() =>onDelete(driver._id)}> <i className="far fa-trash-alt"></i>Delete</a></td>
          </tr>

        ))
      }
      </tbody>
      


  
 
  </table>
    </div>
    </div>

)

}
export default ViewDriver;
