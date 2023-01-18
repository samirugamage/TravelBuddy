import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";

function ViewTraveler (){

    //view all Traveler function//
    const [Traveler,setTravelers] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getTraveler () {
           axios.get("http://localhost:8070/traveler/")
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data)
            
            
            setTravelers(res.data); //using setTravelers function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getTraveler();
    },[Traveler]) //[Traveler] to update the array instantly when changed rather than refresh page.

    return (
    <div className="container" >

        {/* ////////////////////////// View Traveler on a table//////////////////// */}
<br/><br/><br/>
<h3> Travelers List </h3>
<table className="table table-striped" style={{ marginTop: 20 }}>
  <thead>
    <tr>
    
      <th>Full Name</th>
      <th>Address</th>
      <th>Email</th>
      <th>Contact Number</th>
      <th>NIC/Passport Number</th>
      <th>Password</th>

    </tr>
    </thead>
      <tbody>
      {
        Traveler.map((traveler)=>(
          <tr>
            <td>{traveler.Full_name}</td>
            <td>{traveler.Address}</td>
            <td>{traveler.Email}</td>
            <td>{traveler.Contact_Number}</td>
            <td>{traveler.NIC_or_Passport_Number}</td>
            <td>{traveler.Password}</td>

          </tr>

        ))
      }
      </tbody>
      


  
 
  </table>
    </div>

)

}
export default ViewTraveler;
