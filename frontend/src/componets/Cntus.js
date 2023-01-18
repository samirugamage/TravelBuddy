import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";

// import "./Bg.css"

export default function Contacts() {
	
	

	
    //Contacts function//
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    
     function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const newRecord = {
            name,
            email,
            message,
           
            
        }
    //input any authentications are needed
        //(path,function needed to execute)
        axios.post ( "http://localhost:8070/record/add",newRecord).then(()=>{
            alert("Record Added")
            

        }).catch((err)=>{
            alert(err)
        })
        
    }
    
     
    //view all locations function//
    const [records,setRecords] = useState([]); //taking all the datas from mongoDB input into this array

  useEffect(()=>{

        function getRecords () {
           axios.get("http://localhost:8070/record/")
           .then((res)=>{

            
            console.log("your data has been received")
            console.log(res.data)
            
            
            setRecords(res.data); //using setLocations function to retrieve data and display on website
            
        
        }).catch((err)=>{
                alert(err.message);
           })
        }
        getRecords();
    },[records]) // to update the array instantly when changed rather than refresh page.
	
	
    // This following section will display the form that takes the input from the user.
    const filldata = (e) => { 
      e.preventDefault();
      document.getElementById("name").value = "prabodha";
      setName( "prabodha");
      document.getElementById("email").value = "prabodha@gmail.com";
      setEmail("prabodha@gmail.com");
      document.getElementById("message").value = "i need to know the open hours";
      setMessage("i need to know the open hours")
      
      
    }





    return (
    

        <>
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
      <li class="nav-item ">
        <a class="nav-link" href="/viewpost">Community</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="/eventspage">Events <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="About">About Us</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="Cntus">Contact Us</a>
      </li>
      <li class="nav-item">
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
<br></br>
<br></br>
<br></br>
<br></br>

        <div class="content">



                <div class="container">


                    <div class="row">
                        <div class="col-md-5 mr-auto">
                            <h2>Contact Us</h2>
                            <p class="mb-5">"Ceylon Travels" is a well-established company based in Sri Lanka that provides any travel-related services</p>
                            <ul class="list-unstyled pl-md-5 mb-5">
                                <li class="d-flex text-black mb-2">
                                    <span class="mr-3"><span class="icon-map"></span></span> Colombo, Kandy Road, <br></br> Sri lanka
                                </li>
                                <li class="d-flex text-black mb-2"><span class="mr-3"><span class="icon-phone"></span></span> +94 (77) 345 6789</li>
                                <li class="d-flex text-black"><span class="mr-3"><span class="icon-envelope-o"></span></span> ceylontravels @gmail.com </li>
                            </ul>
                        </div>
                        <div class="form-row justify-content-center align-items-center">
                            <form class="mb-5" method="post"  onSubmit={sendData}>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="name" class="col-form-label">Name</label>
                                        <input type="text" class="form-control" name="name" id="name" maxlength="20" 
                                            onChange={(e) =>{ setName(e.target.value); }}   required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="email" class="col-form-label">Email</label>
                                        <input type="email" class="form-control" name="email" id="email" 
                                            onChange={(e) =>{ setEmail(e.target.value); }}  required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="message" class="col-form-label">Message</label>
                                        <textarea class="form-control" name="message" id="message" cols="30" rows="7" maxlength="150" 
                                            onChange={(e) =>{ setMessage(e.target.value); }}   required />
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-md-12">
                                        <input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4" />
                                        
                                        <span class="submitting"></span>
                                    </div>

                                </div>
                            </form>
                            <button onClick={filldata} className="btn btn-secondary" style={{ marginLeft:'20px'}}>DEMO</button>

                        </div>
                    </div>

                </div>
                <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="js/jquery-3.3.1.min.js"></script>
                <script src="js/popper.min.js+bootstrap.min.js.pagespeed.jc.IHkW1QTIuN.js"></script><script>eval(mod_pagespeed_J2E44BeRjI);</script>
                <script>eval(mod_pagespeed_7GdsfrSu7q);</script>
                <script src="js/jquery.validate.min.js+main.js.pagespeed.jc.ymlEcKnLFv.js"></script><script>eval(mod_pagespeed_BAOLwhxHbP);</script>
                <script>eval(mod_pagespeed_JPTuk9T3aQ);</script>
                <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v652eace1692a40cfa3763df669d7439c1639079717194" integrity="sha512-Gi7xpJR8tSkrpF7aordPZQlW2DLtzUlZcumS8dMQjwDHEnw9I7ZLyiOj/6tZStRBGtGgN6ceN6cMH8z7etPGlw==" data-cf-beacon='{"rayId":"744d8ce60eaa8988","token":"cd0b4b3a733644fc843ef0b185f98241","version":"2022.8.1","si":100}' crossorigin="anonymous"></script>

            </div></>);
}
