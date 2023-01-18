const router = require("express").Router();
let Driver = require ("../models/Driver");


////////////////////////////////////////create an Driver//////////////////////////////////////

router.route("/add").post(async(req,res)=>{ //loads http://localhost:8070/Driver/add
    //using postman to test
    //getting the below variables via requesting from backEnd to frontEnd

const Full_name = req.body.Full_name;
const Address = req.body.Address;
const Email = req.body.Email;
const Contact_Number = req.body.Contact_Number;
const NIC_Number = req.body.NIC_Number;
const VehicleNum = req.body.VehicleNum;
const VehicleType = req.body.VehicleType;
const Password = req.body.Password;


const newDriver = new Driver({
    Full_name,
    Address,
    Email,
    Contact_Number,
    NIC_Number,
    VehicleNum,
    VehicleType,
    Password,
})

    const user = await Driver.findOne({Email});

    if (user)

    return res.status(400).json({ msg: "This email already exists." });
    newDriver.save().then(()=>{  //passing values through via document
        res.json("Driver Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})



////////////////////////////////view ALL Drivers///////////////////////////////////////

router.route("/").get((req,res)=>{ //loads http://localhost:8070/Drivers

    Driver.find().then((Drivers)=>{
        res.json(Drivers)

    }).catch((err)=>{
        console.log(err)
    })
})


////////////////////////////////Update a Driver///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take DriverID and update only the relevant Driver only
    //loads http://localhost:8070/Drivers/update 
    let DriverId = req.params.id;
    const {Full_name, Address, Email, Contact_Number, NIC_Number, VehicleNum, VehicleType , Password}  = req.body; //dStructure

    const updateDriver = {
        Full_name,
        Address,
        Email,
        Contact_Number,
        NIC_Number,
        VehicleNum,
        VehicleType,
        Password,

    }
    const update = await Driver.findByIdAndUpdate(DriverId,updateDriver)
    .then(() => {  //await is waiting for the function to complete
        res.status(200).send({status: "Driver updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete a Driver///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let DriverId = req.params.id;  
    await Driver.findByIdAndDelete(DriverId).then(() => {
        res.status(200).send({status : "Driver deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting Driver" , error: err.message});
    })
})

////////////////////////////////View only one Driver///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let DriverId = req.params.id;  
    const Driver = await Driver.findById(DriverId).then((Driver) => {
        res.status(200).send({status : "Driver Fetched", Driver : Driver});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Driver" , error: err.message});
    })
})



module.exports = router; 

