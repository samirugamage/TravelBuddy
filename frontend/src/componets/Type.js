import React from "react";

export default function types(){
    return(

        

<div>
    <div>
    <br/><br/>
        <center> <h2> <b>REGISTER PERSONNEL</b> </h2></center>
        <br/>
        <center>
               
    <div style={{backgroundColor:"white"}}>
        <div id="band" className="container text-center" style={{backgroundColor:"white"}}>
        <br/>
        <div className="row">

        
&nbsp;
        <div className="col-sm-3" style={{border: '1px solid grey',borderRadius:'10px',marginLeft:'10%'}}>
            <p className="text-center"><strong><h3>Travel Guide</h3></strong></p>
            <a href="/gui" ><br/>
                <img src="./images/G.jpeg" className="img-circle person" alt="" width="250" height="250"/>
            </a>
        </div>
        &nbsp;
        <div className="col-sm-3" style={{border: '1px solid grey',borderRadius:'10px'}}>
            <p className="text-center"><strong><h3>Transport Agent</h3></strong></p>
            <a href="/dri" >
                <img src="./images/D.jpeg" className="img-circle person" alt="" width="250" height="300"/>
            </a>
        </div>
        &nbsp;
        <div className="col-sm-3" style={{border: '1px solid grey',borderRadius:'10px'}}>
            <p className="text-center"><strong><h3>Hotel Agent</h3></strong></p>
            <a href="/htl" ><br/>
                <img src="./images/Hc.jpg" className="img-circle person" alt="" width="250" height="230" />
            </a>

        </div>
        </div>
        </div>
    </div>  
        </center>
         <a  href="/AdminPanel"><button type="button" style={{ marginLeft:'45%',marginTop:'2%',marginBottom:'2%'}} className="btn btn-primary">HOME</button></a>

    </div>
</div>
    )
}