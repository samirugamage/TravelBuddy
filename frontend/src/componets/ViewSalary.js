
import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert'; // Import
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; //report generation

import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import './salary.css';


function ViewSalary (){


    const onDelete = (id) =>{
    
        confirmAlert({
    
            title: 'Confirm to Pay',
    
            message: 'Are you sure you want to Pay .',
    
            buttons: [
    
              {
    
                label: 'Yes',
    
                onClick: () => axios.delete(`http://localhost:8070/salary/paid/${id}`).then((res) =>{
    
                    //alert("Deleted successfully!");
    
                    //this.retrievePosts();
    
                  })
    
              },
    
              {
    
                label: 'No',
    
               
    
              }
    
            ]
    
          });}
     







    const [salarys,setSalarys] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getSalarys () {
           axios.get("http://localhost:8070/salary/")
           .then((res)=>{
            setSalarys(res.data); //using setSalarys function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getSalarys();
    },[salarys]) //[salarys] to update the array instantly when changed rather than refresh page.






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
              <a class="nav-link" href="/addsalary">Add Salary<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/viewSalary">View Salary</a>
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

       
   


{/* ////////////////////////// View salarys on a table//////////////////// */}

<h3> salary List </h3>
<table id="salarytable" className="table table-striped" style={{ marginTop: 20 }}>

  <thead>
    <tr>
    
      <th>emp ID</th>
      <th>Month</th>
      <th>Basic Salary</th>
      <th>OT Salary</th>
      <th>Bonus Salary</th>
      <th>Total Salary</th>
      <th>Edit</th>
      <th>Paid</th>
      
    </tr>
    </thead>
      <tbody>
      {
        salarys.map((salary)=>(
          <tr>
            <td>{salary.emp_ID}</td>
            <td>{salary.month}</td>
            <td>{salary.basicSalary}</td>
            <td>{salary.otSalary}</td>
            <td>{salary.bonusSalary}</td>
            <td>{salary.totalSalary}</td>
            <td> <a href={`/editsalary/${salary._id}`}><button type="/editsalary" className="btn btn-primary">UPDATE</button> </a> </td>
            {/* <td> <a href={`/paidsalary`}> <button type="/paidsalary" className="btn btn-primary">  DELETE  </button> </a> </td> */}
           <button> <a className="btn btn-danger"  onClick={() =>onDelete(salary._id)}> <i className="far fa-trash-alt"></i>paid</a></button>
            
          </tr>

        ))
      }
      </tbody>
      


  
 
  </table>


  <button  type="button" className="btn btn-info" style={{marginLeft:'30px', marginRight:'0px' }}>
        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-info"
                    table="salarytable"
                    filename="Salary_Details"
                    sheet="routes_details_xls"
                    buttonText="Download Schedule Details"
                     style={{marginLeft:'0px', marginRight:'0px',padding:'1px 1px'}}/>
                    
                    </button>


  </div>
  
  </div>


)

}
export default ViewSalary;

