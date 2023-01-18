const router = require("express").Router();
let Guide = require ("../models/Guide");


////////////////////////////////////////create a Guide//////////////////////////////////////

router.route("/add").post(async(req,res)=>{ //loads http://localhost:8070/Guide/add
    //using postman to test
    //getting the below variables via requesting from backEnd to frontEnd

    const Full_name = req.body.Full_name;
    const Address = req.body.Address;
    const Email = req.body.Email;
    const Contact_Number = req.body.Contact_Number;
    const NIC_Number = req.body.NIC_Number;
    const GuideL = req.body.GuideL;
    const Password = req.body.Password;
    


const newGuide = new Guide({
    Full_name,
    Address,
    Email,
    Contact_Number,
    NIC_Number,
    GuideL,
    Password,
})

    const user = await Guide.findOne({ Email });

    if (user)

    return res.status(400).json({ msg: "This email already exists." });
    newGuide.save().then(()=>{  //passing values through via document
        res.json("Guide Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})


////////////////////////////////view ALL Guides///////////////////////////////////////

router.route("/").get((req,res)=>{ //loads http://localhost:8070/Guides

    Guide.find().then((Guides)=>{
        res.json(Guides)

    }).catch((err)=>{
        console.log(err)
    })
})


////////////////////////////////Update a Guide///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take GuideID and update only the relevant Guide only
    //loads http://localhost:8070/Guides/update 
    let GuideId = req.params.id;
    const {Full_name, Address, Email, Contact_Number, NIC_Number, GuideL, Password}  = req.body; //dStructure

    const updateGuide = {
        Full_name,
        Address,
        Email,
        Contact_Number,
        NIC_Number,
        GuideL,
        Password,

    }
    const update = await Guide.findByIdAndUpdate(GuideId,updateGuide)
    .then(() => {  //await is waiting for the function to complete
        res.status(200).send({status: "Guide updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete a Guide///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let GuideId = req.params.id;  
    await Guide.findByIdAndDelete(GuideId).then(() => {
        res.status(200).send({status : "Guide deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting Guide" , error: err.message});
    })
})

////////////////////////////////View only one Guide///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let GuideId = req.params.id;  
    const Guide = await Guide.findById(GuideId).then((Guide) => {
        res.status(200).send({status : "Guide Fetched", Guide : Guide});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Guide" , error: err.message});
    })
})

module.exports = router; 

