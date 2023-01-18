import React from "react";



function AdminNavigation(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Travel Buddy</a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">User Management <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shedule Management</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Route Management</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Event Management</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Location Management</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Finance Management</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Service Management</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Community Management</a>
            </li>
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
          )
}


export default AdminNavigation;

