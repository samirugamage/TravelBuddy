const router = require("express").Router();
let TimeTrain = require("../models/TimeTableTrain");


router.route("/addtrain").post((req,res)=>{//http://localhost:8070/train/addtrain

    const trnspodtType = req.body.trnspodtType;
    const trainName = req.body.trainName;
    const startStation = req.body.startStation;
    const endStation = req.body.endStation;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    

    const newtrain = new TimeTrain({

        trnspodtType,
        trainName,
        startStation,
        endStation,
        startTime,
        endTime,
        
    })

    newtrain.save().then(()=>{
        res.json("Train Data Added")
    }).catch((err)=>{
        console.log(err);
    })


})

//get all data

router.route("/").get((req,res)=>{ //loads http://localhost:8070/train/
    TimeTrain.find().then((train)=>{
        res.json(train)

    }).catch((err)=>{
        console.log(err)
    })
})



////////////////////////////////Update an event///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will update only the relevant id data only
    
    // http://localhost:8070/train/update 

    let TrainlId = req.params.id;
    const { trnspodtType,trainName,startStation,endStation,startTime,endTime}  = req.body; //dStructure - single line method

    const updateTTrain = {
        trnspodtType,
        trainName,
        startStation,
        endStation,
        startTime,
        endTime,
        
    }
    const update = await TimeTrain.findByIdAndUpdate(TrainlId,updateTTrain).then(() => {

        //await is waiting for the function to complete
        res.status(200).send({status: "Train updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete an event///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let TrainlId = req.params.id;  

    await TimeTrain.findByIdAndDelete(TrainlId).then(() => {

        res.status(200).send({status : "Record deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting event" , error: err.message});
    })
})


////////////////////////////////View only one event///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let TrainlId = req.params.id;  

    const train = await TimeTrain.findById(TrainlId).then((train) => {

        res.status(200).send({status : "Train Fetched", data : train});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Event" , error: err.message});
    })
})


module.exports = router;