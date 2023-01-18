import React,{useState,useEffect} from "react";

import axios from "axios";


function Discount() {

const [dname,setDname] = useState("");
const [did,setDid] = useState("");
const [dtype,setDtype] = useState("");
const [dpercentage,setDpercentage] = useState(0);
const [message,setMessage] = useState("");

function sendData(e){
  e.preventDefault();

  const newDiscount={

    dname,
    did,
    dtype,
    dpercentage,
    message
  }

 axios.post("http://localhost:8070/discount/add",newDiscount).then(()=>{
  alert("Discount Added")
 }).catch((err)=>{
  alert(err)
 })
 console.log(newDiscount); //printing the sent form data on console.log f12
}

 //view all salarys function//
 const [discounts,setDiscounts] = useState([]); //taking all the datas from mongoDB input into this array

 useEffect(()=>{

       function getDiscounts () {
          axios.get("http://localhost:8070/salary/")
          .then((res)=>{

           
           console.log("your data has been received")
           console.log(res.data)
           
           
           setDiscounts(res.data); //using setSalarys function to retrieve data and display on website
           
       
       }).catch((err)=>{
               alert(err.message);
          })
       }
       getDiscounts();
   },[discounts]) //[salarys] to update the array instantly when changed rather than refresh page.


  return (
    
      
      <div>
        <h1> Add Discounts </h1>

        <form  onSubmit={sendData} id="contact-form" method="POST">
          <label htmlFor="dname">Discount name</label>
          <input type="text" name="dname" placeholder="" onChange={(e)=>{
            setDname(e.target.value);
          }}  />

          <label htmlFor="did">Discount id</label>
          <input type="text" name="did" placeholder="" onChange={(e)=>{
            setDid(e.target.value);
          }} />

          <label htmlFor="dtype">Discount type</label>
          <select id = "dtype">
            <option value="dtype">New Customer</option>
            <option value="dtype">Regular Customer</option>
            <option value="dtype">Seasonal Offer</option>
            <option value="dtype">LargeAmountOffer</option>
            onChange={(e)=>{
            setDtype(e.target.value);
          }}
          </select>
          

          <label htmlFor="dpercentage">Discount percentage</label>
          <input type="number"name="dpercentage" placeholder="" onChange={(e)=>{
            setDpercentage(e.target.value);
          }} />

          <label htmlFor="message">Discount Description</label>
          <textarea
            rows="6"
            name="description"
            placeholder="Enter description..." onChange={(e)=>{
              setMessage(e.target.value);
            }}
            // required
            
          ></textarea>
          <button type="submit" className="btn btn-primary"> Add Discount</button>
       




        </form>
        <br></br><br></br><br></br>
{/* ////////////////////////// View salarys on a table//////////////////// */}

<h3> Discount List </h3>
<table className="table table-striped" style={{ marginTop: 20 }}>
  <thead>
    <tr>
    
      
      <th>DiscountID</th>
      <th>DiscountType</th>
      <th>DiscountPercentage</th>
      
      {/* <th>Edit</th>
      <th>Delete</th> */}
      
    </tr>
    </thead>
      <tbody>
      {
        discounts.map((discount)=>(
          <tr>
           
            <td>{discount.discountid}</td>
            <td>{discount.discounttype}</td>
            <td>{discount.discountpercentage}</td>
            

            {/* <td>not available</td> */}
            <td> <a href={`/editevent`}><button type="/editevent" className="btn btn-primary">UPDATE</button> </a> </td>
            <td> <a href={`/deleteevent`}> <button type="deleteevent" className="btn btn-primary">  DELETE  </button> </a> </td>
            
          </tr>

        ))
      }
      </tbody>
      


  
 
  </table>


  </div>




      

   
     

 ) };


export default Discount;
