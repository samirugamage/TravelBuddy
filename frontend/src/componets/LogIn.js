import React from "react";

export default function (props) {


  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

   
  function  handleSubmit(e) {
    e.preventDefault();
    //const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:8070/Traveler/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./viewpost";

          
        }
      });
  }






  return (
<div>

{/* // -------------------------------------------------------------------------------Top Navigation Start----------------------------------------------------------------------------------------------- */}
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Travel Buddy</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      
      
    </ul>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

    <ul class="navbar-nav ms-auto">
   



</ul>
  
      
      
    </div>
  </div>
</nav>
</div>
{/* //----------------------------------------------------------------------------------------------Top Navigation End-------------------------------------------------- */}

<br></br><br></br><br></br>

    <div className="container">
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              autocomplete="off"/>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              autocomplete="off"/>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              LogIn
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a><br></br>
            Don't have an Account? <a href="/trv">SignUp</a>
          </p>
        </div>
      </form>
    </div>
    </div>

    <br></br><br></br><br></br>
    </div>


  )
}