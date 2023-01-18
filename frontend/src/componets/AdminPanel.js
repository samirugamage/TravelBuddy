

import React, { Component } from 'react'


export default class AdminPanel extends Component {
    render() {
        return (
        <div>
            <div>
        <br/>
                <center> <h1> <b>WELCOME TO TRAVEL BUDDY</b> </h1></center>
                <center> <h4>ADMIN PANEL </h4></center>

                <a  href="/viewpost"><button style={{ marginLeft:'45%',marginRight:'15px',marginBottom:"2%"}} type="button" class="btn btn-secondary">Customer View</button></a>


            <br/><br/><br/><br/>
            </div>
                <center>
                
            <div style={{backgroundColor:"white"}}>
                <div id="band" className="container text-center" style={{backgroundColor:"white"}}>
                
                    <br/>
                    <div className="row">
                    <div className="col-sm-4">
                        <p className="text-center"><strong><h3><i>User Management</i></h3></strong></p>
                        <a  href="/typ">
                            <img src="../img/user.jpeg" className="img-circle person" alt="" width="150" height="150"/>
                        </a>
                    <br/><br/><br/>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-center"><strong><h3><i>Shedule Management</i></h3></strong></p>
                        <a  href="/ScheduleForm">
                            <img src="../img/shedule.jpeg" className="img-circle person" alt="" width="250" height="150"/>
                        </a>
                    <br/><br/><br/>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-center"><strong><h3><i>Route Management</i></h3></strong></p><br/>
                        <a  href="/AddTrip">
                            <img src="../img/route.jpg" className="img-circle person" alt="" width="180" height="150"/>
                        </a>
                    <br/><br/>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-center"><strong><h3><i>Event Management</i></h3></strong></p><br/>
                        <a  href="/addevent">
                            <img src="../img/event.jpeg" className="img-circle person" alt="" width="250" height="200"/>
                        </a>
                    <br/><br/>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-center"><strong><h3><i>Location Management</i></h3></strong></p><br/>
                        <a  href="/aloca">
                            <img src="../img/location.jpeg" className="img-circle person" alt="" width="150" height="150"/>
                        </a>
                    <br/><br/>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-center"><strong><h3><i>Finance Management</i></h3></strong></p><br/>
                        <a  href="/addsalary">
                            <img src="../img/finance.jpeg" className="img-circle person" alt="" width="250" height="200"/>
                        </a>
                    <br/><br/>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-center"><strong><h3><i>Service Management</i></h3></strong></p><br/>
                        <a  href="/Adpanel">
                            <img src="../img/service.jpeg" className="img-circle person" alt="" width="250" height="180"/>
                        </a>
                    <br/><br/>
                    </div>
                    <div className="col-sm-5">
                        <p className="text-center"><strong><h3><i>Community Management</i></h3></strong></p><br/>
                        <a  href="/addpost">
                            <img src="../img/community.jpeg" className="img-circle person" alt="" width="220" height="180"/>
                        </a>
                    <br/><br/>
                    </div>

                    </div>  
                </div> 
            </div>
            </center>
            
        </div> 
             
  

  
            )
}
}