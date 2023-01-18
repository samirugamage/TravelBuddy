import React from "react";
function Locationpage () {

    return(

      <div>

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
        <a class="nav-link" href="/viewpost">Community<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/eventspage">Events</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/locationp">Locations</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      
    </ul>
    <a href="/travelerForm"><button type="button"  class="btn btn-warning">Plan Your Trip</button></a>

    <div>

    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link" href="#">LogIn </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">|</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Register </a>
      </li>
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
    

        <div>
      <br />
     <nav className= "navbar">
  <a className="navbar-brand"><h1 style={{color: "#193B4D"}}>Top destinations around the Sri Lanka</h1></a>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-dark" type="submit">Search</button>
  </form>
</nav>

<br/><br/><br/><br/>

    <center>
    <table id="Tb" width="90%" cellspacing="40">
    <tr>
    <td className="Box">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a href="/locationd1"> <img src="images/1.jpg" className="lg" alt=""/></a>
    <div>~P E A C E  &nbsp;&nbsp;&nbsp;   P A G O D A ~</div></td> <br/>

    <td className="Box"><a href="#"><img src="images/2.jpg" className="lg" alt=""/></a>
    <div>~ D A M B U L L A &nbsp;&nbsp;  C A V E  &nbsp;&nbsp;  T E M P L E ~</div></td></tr> <br/>

    <br /><br /><br /><br />
    <tr><td className="Box">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a href="#"><img src="images/3.jpg" className="lg" alt=""/></a>
    <div>~T U R T L E  &nbsp;&nbsp;&nbsp;   F A R M ~</div></td> <br/>
    
    <br /><br /><br /><br />
    <td className="Box"><a href="#"><img src="images/4.jpg" className="lg" alt=""/></a>
    <div>~K A N D E   &nbsp;&nbsp;&nbsp;   V I H A R A Y A~</div></td></tr> <br/>

    <br /><br /><br /><br />
    <tr><td className="Box">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a href="#"><img src="images/7.jpg" className="lg" alt=""/></a>
    <div>~S E E M A  &nbsp;&nbsp;  M A L A K A  &nbsp;&nbsp; T E M P L E  &nbsp;&nbsp; C O L O M B O~</div></td> <br/>

    <br /><br /><br /><br />
    <td className="Box"><a href="#"><img src="images/8.jpg" className="lg" alt=""/></a>
    <div>~U D A W A L A W E  &nbsp;&nbsp; N A T I O N A L  &nbsp;&nbsp; P A R K~</div></td></tr> <br/>

    <br /><br /><br /><br />
    <tr><td className="Box">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a href="#"><img src="images/9.jpg" className="lg" alt=""/></a>
    <div>~ N I N E  &nbsp;&nbsp;  A R C H &nbsp;&nbsp;   B R I D G E ~</div></td> <br/>

    <br /><br /><br /><br />
    <td className="Box"><a href="#"><img src="images/10.jpg" className="lg" alt=""/></a>
    <div>~~ S I G I R I Y A ~~</div></td></tr> <br/>

    <br /><br /><br /><br />
    <tr><td className="Box">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a href="#"><img src="images/11.jpg" className="lg" alt=""/></a>
    <div>~~ H I K K A D U W A &nbsp;&nbsp;&nbsp;  B E A C H ~~</div></td> <br/>

    <br /><br /><br /><br />
    <td className="Box"><a href="#"><img src="images/12.jpg" className="lg" alt=""/></a>
    <div>~Y A L A  &nbsp;&nbsp; N A T I O N A L  &nbsp;&nbsp; P A R K~</div></td></tr> <br/>

    <br /><br /><br /><br />
    <tr><td className="Box">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<a href="#"><img src="images/13.jpg" className="lg" alt=""/></a>
    <div>~~ A D A M'S  &nbsp;&nbsp;&nbsp;    P E A K ~~</div></td> <br/>

    <br /><br /><br /><br />
    <td className="Box"><a href="#"><img src="images/14.jpg" className="lg" alt=""/></a>
    <div>~~ B E N T O T A ~~</div></td></tr> <br/>



    
    </table>
    </center>
    </div>
</div>

    )
}

export default Locationpage;