import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function EditRecord (){

  //getting information from db and load .
  const [form , setForm] = useState({
    status:"",
    name:"",
    email:"",
    message:"",
    cmptype:"",
    language:"",
    cid:"",
})

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
	  const [cmptype, setCmptype] = useState("");
    const [language, setLanguage] = useState("");
    const [cid, setCid] = useState("");
 
    // const id= Record.pathname.split("/")[2];
    const location = useLocation();
    console.log(location); //testing for function in console getting ID
    const id= location.pathname.split("/")[2];
    console.log(id); 

    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const updateRecord		= {
            name,
            email,
            message,
			      cmptype,
			      language,
			      cid
			
        }
            console.log(updateRecord);
        //input any authentications are needed
        //(path,function needed to execute)
        axios.put(`http://localhost:8070/Record/update/${id}`,updateRecord).then(()=>{
            alert("Record Edited")
            

        }).catch((err)=>{
            alert(err)
        })


        console.log(updateRecord); //printing the sent form data on console.log f12
        
    }
    
 
 // This following section will display the form that takes input from the user to update the data.
 

 const [records,setRecords] = useState([]); //taking all the datas from mongoDB input into this array
    // const params = useParams();
    useEffect(()=>{

            function getRecords () {
              axios.get(`http://localhost:8070/record/get/${id}`)
              .then((res)=>{

                
                console.log("your data has been received")
                console.log(res.data.record)

                //alert(res.data)
                
                
                //setEvents(res.data); //using setEvents function to retrieve data and display on website
                setForm(res.data.record);

            
               
                setName(res.data.record.name);
                setEmail(res.data.record.email);
                setMessage(res.data.record.message);
                setCmptype(res.data.record.cmptype);
                setLanguage(res.data.record.language);
                setCid(res.data.record.cid);

            }).catch((err)=>{
                    alert(err.message);
              })
            }
            getRecords();
        },[records]) //[records] to update the array instantly when changed rather than refresh page.


 
 return (

  <><nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="AdminPanel">Travel Buddy</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
      <a class="nav-link" href="/AdminPanel">Home</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="Adpanel">Service management</a>
      </li>
      
      

    </ul>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

      



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
      <div>
       <center><h3>Update Record</h3></center>
       <form class="col-lg-6 offset-lg-3 " onSubmit={sendData}>
       

         <div className="form-group" >
           <label htmlFor="name">Name: </label>
           <input
             type="text"
             className="form-control"
             id="name"
           

             onChange={(e)=>{
              setName(e.target.value);
             } } 
             defaultValue={form.name}/>
       </div>


       
         <div className="form-group">
           <label htmlFor="email">email: </label>
           <input
             type="text"
             className="form-control"
             id="email"
              
             onChange={(e)=>{setEmail(e.target.value);} }
             defaultValue={form.email}
             />
         </div>

         <div className="form-group">
           <label htmlFor="message">message: </label>
           <input
             type="text"
             className="form-control"
             id="message"
       
             onChange={(e)=>{setMessage(e.target.value);}}
             defaultValue={form.message} />
         </div>

         <div className="form-group">
           <label htmlFor="cmptype">Complaint type: </label>
           <input
             type="text"
             className="form-control"
             id="cmptype"
          
             onChange={(e)=>{setCmptype(e.target.value);}}
             defaultValue={form.cmptype}/>
         </div>


         <div class="row">
           <div class="col">
             <label htmlFor="language">Language: </label>
             <input
               type="text"
               className="form-control"
               id="language"
              
               onChange={(e)=>{setLanguage(e.target.value);}} 
               defaultValue={form.language}/>
           </div>

           <div class="col">
             <label htmlFor="cid">CID: </label>
             <input
               type="text"
               className="form-control"
               id="cid"
              
               onChange={(e)=>{setCid(e.target.value);}} 
               defaultValue={form.cid}/>
           </div>
         </div>
         <br />
         <br></br>
         <div className="form-group">
           <input
             type="submit"
             value="Update Record"
             className="btn btn-primary"
             action="Adpanel" />

           <br></br>
           <br></br>
           <br></br>
           <br></br>


         </div>

       </form>
     </div></>
 );
}