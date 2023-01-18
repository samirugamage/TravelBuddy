import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

// const onDelete = (id) =>{

  // confirmAlert({
  //     title: 'Confirm to Delete',
  //     message: 'Are you sure you want to delete User...',
  //     buttons: [

  //       {
  //         label: 'Yes',
  //         onClick: () => axios.delete(`http://localhost:8070/guide/delete/${id}`).then((res) =>{

  //             //alert("Deleted successfully!");
  //             //this.retrievePosts();
  //           })
  //       },

  //       {
  //         label: 'No',
  //       }
  //     ]
  //   });}


function ViewGuide (){

  //ondelete function///
    // Delete Function
    

    //view all Guide function//
    const [Guide,setGuides] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getGuide () {
           axios.get("http://localhost:8070/guide/")
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data)
            
            
            setGuides(res.data); //using setGuides function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getGuide();
    },[Guide]) //[Guide] to update the array instantly when changed rather than refresh page.


    const onDelete = (id) =>{

      confirmAlert({
          title: 'Confirm to Delete',
          message: 'Are you sure you want to delete User...',
          buttons: [
    
            {
              label: 'Yes',
              onClick: () => axios.delete(`http://localhost:8070/guide/delete/${id}`).then((res) =>{
    
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
            
            <li class="nav-item active">
              <a class="nav-link" href="/gui">Travel Guide</a>
            </li>
            <li class="nav-item ">
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
              
                <a  href="/gui"><button style={{ marginLeft:'80%',marginRight:'15px'}} type="button" class="btn btn-secondary">Add New Guide</button></a>

        </div>

    <div className="container" >

        {/* ////////////////////////// View Guide on a table//////////////////// */}
<br/><br/><br/>
<h3> Guides List </h3>
<table className="table table-striped" style={{ marginTop: 20 }}>
  <thead>
    <tr>
    
      <th>Full Name</th>
      <th>Address</th>
      <th>Email</th>
      <th>Contact Number</th>
      <th>NIC Number</th>
      <th>GuideL</th>

      <th>Password</th>

    </tr>
    </thead>
      <tbody>
      {
        Guide.map((guide)=>(
          <tr>
            <td>{guide.Full_name}</td>
            <td>{guide.Address}</td>
            <td>{guide.Email}</td>
            <td>{guide.Contact_Number}</td>
            <td>{guide.NIC_Number}</td>
            <td>{guide.GuideL}</td>
            <td>{guide.Password}</td>
            <td> <a href={`/updateGuide/${guide._id}`}><button type="/updateGuide" className="btn btn-primary">UPDATE</button> </a> </td>
            <td><a className="btn btn-danger" href="#" onClick={() =>onDelete(guide._id)}> <i className="far fa-trash-alt"></i>Delete</a></td>

          </tr>

        ))
      }
      </tbody>
      


  
 
  </table>
    </div></div>

 )

}

export default ViewGuide;