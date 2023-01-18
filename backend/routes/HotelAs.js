const router = require("express").Router();
let HotelA = require ("../models/HotelA");


////////////////////////////////////////create an HotelA//////////////////////////////////////

router.route("/add").post(async(req,res)=>{ //loads http://localhost:8070/HotelA/add
    //using postman to test
    //getting the below variables via requesting from backEnd to frontEnd

const Full_name = req.body.Full_name;
const Address = req.body.Address;
const Email = req.body.Email;
const Contact_Number = req.body.Contact_Number;
const NIC_Number = req.body.NIC_Number;
const Password = req.body.Password;


const newHotelA = new HotelA({
    Full_name,
    Address,
    Email,
    Contact_Number,
    NIC_Number,
    Password,
})

    const user = await HotelA.findOne({ Email });

    if (user)

    return res.status(400).json({ msg: "This email already exists." });
    newHotelA.save().then(()=>{  //passing values through via document
        res.json("Hotel Agent Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})


////////////////////////////////view ALL HotelAs///////////////////////////////////////

router.route("/").get((req,res)=>{ //loads http://localhost:8070/HotelAs

    HotelA.find().then((HotelAs)=>{
        res.json(HotelAs)

    }).catch((err)=>{
        console.log(err)
    })
})


////////////////////////////////Update an HotelA///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take HotelAID and update only the relevant HotelA only
    //loads http://localhost:8070/HotelAs/update 
    let HotelAId = req.params.id;
    const {Full_name, Address, Email, Contact_Number, NIC_Number, Password}  = req.body; //dStructure

    const updateHotelA = {
        Full_name,
        Address,
        Email,
        Contact_Number,
        NIC_Number,
        Password,

    }
    const update = await HotelA.findByIdAndUpdate(HotelAId,updateHotelA)
    .then(() => {  //await is waiting for the function to complete
        res.status(200).send({status: "HotelA updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete a HotelA///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let HotelAId = req.params.id;  
    await HotelA.findByIdAndDelete(HotelAId).then(() => {
        res.status(200).send({status : "HotelA deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting HotelA" , error: err.message});
    })
})

////////////////////////////////View only one HotelA///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let HotelAId = req.params.id;  
    const HotelA = await HotelA.findById(HotelAId).then((HotelA) => {
        res.status(200).send({status : "HotelA Fetched", HotelA : HotelA});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get HotelA" , error: err.message});
    })
})

module.exports = router; 

