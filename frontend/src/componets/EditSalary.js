
import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";
import { useLocation } from "react-router-dom";



const {multiply} = require('mathjs');


function EditSalary (){


  const [form , setForm] = useState({
    status:"",
    emp_ID:"",
    basicSalary:"",
    otTime:"",
    bonusSalary:"",
    bonusSalary:"",
    
})


    const [emp_ID,setemp_ID] = useState("");
    const [basicSalary,setBasicSalary] = useState(0);
    const [otRate,setotRate] = useState(0);
    const [otTime,setotTime] = useState(0);
    const [bonusSalary,setbonusSalary] = useState(0);


    const location = useLocation();
    console.log(location); //testing for function in console getting ID
    const id= location.pathname.split("/")[2];
    console.log(id);  //testing for function in console and splitting ID

    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        const otSalary = multiply(otTime , otRate)
     const totalSalary = (( basicSalary - 0) + (otSalary - 0) + (bonusSalary - 0));

        
        const updateSalary = {
            emp_ID,
            basicSalary,
            otRate,
            otTime,

            bonusSalary,
            totalSalary

        }
       console.log(updateSalary);
        //input any authentications are needed
        //(path,function needed to execute)
        axios.put( `http://localhost:8070/salary/update/${id}`,updateSalary).then(()=>{
            alert("Salary Edited")
            

        }).catch((err)=>{
            alert(err)
        })


        console.log(updateSalary); //printing the sent form data on console.log f12
        
    }


    const [salaries,setSalaries] = useState([]); //taking all the datas from mongoDB input into this array
    // const params = useParams();
    useEffect(()=>{

            function getSalaries () {
              axios.get(`http://localhost:8070/salary/get/${id}`)
              .then((res)=>{

                
                console.log("your data has been received")
                console.log(res.data.salary)

                //alert(res.data)
                
                
                //setEvents(res.data); //using setEvents function to retrieve data and display on website
                setForm(res.data.salary);

                setemp_ID(res.data.salary.emp_ID);
                setBasicSalary(res.data.salary.basicSalary);
                setotRate(res.data.salary.otRate);
                setotTime(res.data.salary.otTime);
                setbonusSalary(res.data.salary.bonusSalary);
                setSalaries(res.data.salary.totalSalary);

            }).catch((err)=>{
                    alert(err.message);
              })
            }
            getSalaries();
        },[salaries]) //[events] to update the array instantly when changed rather than refresh page.




    



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
              <a class="nav-link" href="/aloca">Add Salary<span class="sr-only">(current)</span></a>
            </li>
            {/* <li class="nav-item ">
              <a class="nav-link" href="/locationview">View Locations</a>
            </li> */}
            
           
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
            

            <form onSubmit={sendData}>

    <div className="form-row" >
       <div className="form-group col-md-6">
               <label for="inputempid">employees ID</label>
                <input type="Text" className="form-control" id="inputempID" placeholder="EMP ID.." 
                    onChange={(e)=>{ //onchange refers to saving automatically when typing

                  setemp_ID(e.target.value); //save the target values in name variable

              }} defaultValue={form.emp_ID}/>

       </div>
    </div>

            <div className="form-row" >
               <div className="form-group col-md-6">
                        <label for="inputbasicsalary">Basic Salary</label>
                              <input type="Number" className="form-control" id="inputbasicsalary" placeholder="basicsalary" 
                                         onChange={(e)=>{ //onchange refers to saving automatically when typing

                        setBasicSalary(e.target.value); //save the target values in name variable

                          }} defaultValue={form.basicSalary} />

               </div>
            </div>

            <div className="form-row" >
                 <div className="form-group col-md-6">
                     <label for="inputOThoursy">OThours</label>
                     <input type="Number" className="form-control" id="inputOThours" placeholder="OThours" 
                              onChange={(e)=>{ //onchange refers to saving automatically when typing

                  setotTime(e.target.value); //save the target values in name variable
                 }}  defaultValue={form.otTime}/>

                 </div>
                       </div>
                        <div className="form-row" >
                               <div className="form-group col-md-6">
                                    <label for="inputOTrate">OT-rate</label>
                        <input type="Number" className="form-control" id="inputOTrate" placeholder="OTrate" 
                                     onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setotRate(e.target.value); //save the target values in name variable

               }} defaultValue={form.otRate} />

               </div>
                     </div>

                       <div className="form-row" >
                              <div className="form-group col-md-6">
                                     <label for="inputbonusSalary">Bonus salary</label>
                                   <input type="Number" className="form-control" id="inputbonusSalaryy" placeholder="bonusSalary" 
                                        onChange={(e)=>{ //onchange refers to saving automatically when typing

                          setbonusSalary(e.target.value); //save the target values in name variable

                     }}  defaultValue={form.bonusSalary}/>

                     </div>
                     </div>










        <button type="submit" className="btn btn-primary">Update Salary</button>

        <a href="/addsalary"><button type="button" className="btn btn-primary">Back</button></a>

               </form> 
        
                 </div>
            

</div>

    )
}
export default EditSalary;