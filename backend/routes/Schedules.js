const router = require("express").Router();
let Schedule = require("../models/Schedule");


router.route("/addSchedule").post(async(req,res)=>{//http://localhost:8070/schedule/addSchedule

    const scheduleID = req.body.scheduleID;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const customerName = req.body.customerName;
    const driverName = req.body.driverName;
    const publicTransport = req.body.publicTransport;

    const newSchedule = new Schedule({

        scheduleID,
        startDate,
        endDate,
        customerName,
        driverName,
        publicTransport

    })
    const schedule = await Schedule.findOne({ scheduleID });
    if (schedule)
        return res.status(400).json({ msg: "This schedule already exists." });

    newSchedule.save().then(()=>{
        res.json("New Schedule Added !")
    }).catch((err)=>{
        console.log(err);
    })


})

//get all data

router.route("/").get((req,res)=>{ //loads http://localhost:8070/schedule
    Schedule.find().then((schedules)=>{
        res.json(schedules)

    }).catch((err)=>{
        console.log(err)
    })
})



//////////////////////////////////////////////////////////////////Update an Schedule/////////////////////////////////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will update only the relevant id data only
    
    // http://localhost:8070/schedule/updateschedule 

    let scheduleId = req.params.id;
    const { scheduleID, startDate, endDate, customerName, driverName, publicTransport}  = req.body; //dStructure - single line method

    const updateSchedule = {
        scheduleID,
        startDate,
        endDate,
        customerName,
        driverName,
        publicTransport
        
    }
    const update = await Schedule.findByIdAndUpdate(scheduleId,updateSchedule).then(() => {
        //await is waiting for the function to complete
        res.status(200).send({status: "Schedule updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete an Schedule///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let scheduleId = req.params.id;  
    await Schedule.findByIdAndDelete(scheduleId).then(() => {
        res.status(200).send({status : "Record deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting Schedule" , error: err.message});
    })
})


////////////////////////////////View only one schedule///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let scheduleId = req.params.id;  
    const schedule = await Schedule.findById(scheduleId).then((schedule) => {
        res.status(200).send({status : "Schedule Fetched", schedule : schedule});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Schedule" , error: err.message});
    })
})


module.exports = router;