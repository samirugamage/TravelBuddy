import react from "react"

export default function GuideProfile(){
    return(

        <div>
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
            <li class="nav-item">
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

      <div className="container">

      <div style={{
        display:"flex",
        justifyContent:"left",
        margin:"25px"
      }}>

        <div>
        <img style={{width:"300px",height:"300px",borderRadius:"80px"}} src="./images/user.png"/>
        </div>
        
        <div><br/><br/>

            <h5>Full Name</h5>
            <h2>John Livera</h2>
            <br/><br/>

            <h5>Contact Number</h5>
            <h5>0789966789</h5>
            <br/><br/> 

            <div style={{
                display:"flex",
                //justifyContent:"right",
                alignItems:"right"          
            }}>


            </div>

            <div>
            
                <h5>Email</h5>
                <h5>john123@gmail.com</h5>
                <br/><br/> 

            </div>

            <div className="col-md-6"><br/>
                <a  href="/ViewGuide"><button type="button" class="btn btn-secondary">Edit Profile</button></a>                   
            </div>


        </div>
      </div>

      </div>
      </div>
    )
}