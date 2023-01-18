import React from "react";


function PublicTransDashboard(){
    return (
<div className="container" >

    <div className="form-row">

        <div className="col" style={{ marginLeft:'12%',marginRight:'15px',marginBottom:'10%',marginTop:'10%'}} >

        <label style={{ marginLeft:'25px',marginRight:'15px', fontSize:'25px', fontWeight:'bold',marginTop:'40px'}}>TRAIN TIMETABLE</label>
        <a  href="/timeTableTrain"><button style={{ marginLeft:'25px',marginRight:'15px'}} type="button" class="btn btn-success">Add New Train</button></a>
        <a  href="/updateTimeTableTrain"><button style={{ marginLeft:'25px',marginRight:'15px'}} type="button" class="btn btn-warning">Update Train Time</button></a>
        <a  href="ViewTimeTbTrain"><button style={{ marginLeft:'25px',marginRight:'15px'}} type="button" class="btn btn-secondary">View Time Table</button></a>

        </div>

    </div>

</div>
 
    )

}
export default PublicTransDashboard;