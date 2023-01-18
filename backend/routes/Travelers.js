const router = require("express").Router();
let Traveler = require ("../models/Traveler");

const jwt = require("jsonwebtoken");

const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
//router.route("/login-user").post(async(req,res)

///////////////////////////////Login//////////////////////////////// http://localhost:8070/Traveler/login-user
router.route("/login-user").post(async(req,res) => {
    //const { email, password } = req.body;
    const password = req.body.password;
    const Email = req.body.email;
  
    const user = await Traveler.findOne({Email});
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (password == user.Password) {
      const token = jwt.sign({ email: user.Email }, JWT_SECRET);
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });

////////////////////////////////////////create a Traveler//////////////////////////////////////

router.route("/add").post(async(req,res)=>{ //loads http://localhost:8070/Traveler/add
    //using postman to test
    //getting the below variables via requesting from backEnd to frontEnd

const Full_name = req.body.Full_name;
const Address = req.body.Address;
const Email = req.body.Email;
const Contact_Number = req.body.Contact_Number;
const NIC_or_Passport_Number = req.body.NIC_or_Passport_Number;
const Password = req.body.Password;


const newTraveler = new Traveler({
    Full_name,
    Address,
    Email,
    Contact_Number,
    NIC_or_Passport_Number,
    Password,
})

    const user = await Traveler.findOne({ Email });

    if (user)

    return res.status(400).json({ msg: "This email already exists." });
    newTraveler.save().then(()=>{  //passing values through via document
        res.json("Traveler Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})


////////////////////////////////view ALL Travelers///////////////////////////////////////

router.route("/").get((req,res)=>{ //loads http://localhost:8070/Travelers

    Traveler.find().then((Travelers)=>{
        res.json(Travelers)

    }).catch((err)=>{
        console.log(err)
    })
})


////////////////////////////////Update a Traveler///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take TravelerID and update only the relevant Traveler only
    //loads http://localhost:8070/Travelers/update 
    let TravelerId = req.params.id;
    const {Full_name, Address, Email, Contact_Number, NIC_or_Passport_Number, Password}  = req.body; //dStructure

    const updateTraveler = {
        Full_name,
        Address,
        Email,
        Contact_Number,
        NIC_or_Passport_Number,
        Password,

    }
    const update = await Traveler.findByIdAndUpdate(TravelerId,updateTraveler)
    .then(() => {  //await is waiting for the function to complete
        res.status(200).send({status: "Traveler updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete a Traveler///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let TravelerId = req.params.id;  
    await Traveler.findByIdAndDelete(TravelerId).then(() => {
        res.status(200).send({status : "Traveler deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting Traveler" , error: err.message});
    })
})

////////////////////////////////View only one Traveler///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let TravelerId = req.params.id;  
    const Traveler = await Traveler.findById(TravelerId).then((Traveler) => {
        res.status(200).send({status : "Traveler Fetched", Traveler : Traveler});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get Traveler" , error: err.message});
    })
})

router.route("/upload").post(

    (req, res) => {

        console.log("REQ ",req)
        try {
          if (!req.files || Object.keys(req.files).length === 0)
            return res.status(400).json({ msg: "No files were uploaded." });
    
          const file = req.files.file;
          if (file.size > 10 * 1024 * 1024) {
            removeTmp(file.tempFilePath);
            return res.status(400).json({ msg: "Size too large" });
          }
    
          if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
            removeTmp(file.tempFilePath);
            return res.status(400).json({ msg: "File format is incorrect." });
          }
    
          cloudinary.v2.uploader
            .upload(
              file.tempFilePath,
              { folder: "Travelers" },
              async (err, result) => {
                if (err) {
                  throw err;
                }
    
                removeTmp(file.tempFilePath);
    
                res.json({ public_id: result.public_id, url: result.secure_url });
              }
            )
            .catch((err) => {
              console.log(err);
            });
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      }
)

module.exports = router; 

