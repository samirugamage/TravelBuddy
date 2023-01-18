const router = require("express").Router();
let Community = require ("../models/Community");
let cloudinary = require("cloudinary")
let dotenv = require("dotenv")
let fs = require("fs")



dotenv.config();






//upload image on cloudinary



cloudinary.config({



  cloud_name: process.env.CLOUD_NAME,



  api_key: process.env.CLOUD_API_KEY,



  api_secret: process.env.CLOUD_API_SECRET,

})




////////////////////////////////////////create an community//////////////////////////////////////

router.route("/add").post((req,res)=>{ //loads http://localhost:8070/community/add
    //using postman software to test
    //getting the below variables via requesting from backEnd to frontEnd


const description = req.body.description;
const name = req.body.name;


const newCommunity = new Community({
    
    description,
    name
    


})

    newCommunity.save().then(()=>{  //passing values through via document
        res.json("Community Added") //if successfully added
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})



////////////////////////////////view ALL Events///////////////////////////////////////
router.route("/").get((req,res)=>{ //loads http://localhost:8070/communitys

    Community.find().then((communitys)=>{
        res.json(communitys)

    }).catch((err)=>{
        console.log(err)
    })
})









////////////////////////////////Update an community///////////////////////////////////////

//async function will wait if many requests are sent to backend processing one by one
router.route("/update/:id").put(async (req,res) => { // :id will take EventID and update only the relevant Community only
    //loads http://localhost:8070/Students/update 
    let communityId = req.params.id;
    const {description}  = req.body; //dStructure
    const {name}  = req.body; //dStructure

    const updateCommunity = {
        
        description,
        name
        
    }
    const update = await Community.findByIdAndUpdate(communityId,updateCommunity).then(() => {
        //await is waiting for the function to complete
        res.status(200).send({status: "Community updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Updating data" , error: err.message});
    })
    

}) 


////////////////////////////////Delete an community///////////////////////////////////////

router.route("/delete/:id").delete(async(req,res) => {

    let communityId = req.params.id;  
    await Community.findByIdAndDelete(communityId).then(() => {
        res.status(200).send({status : "Community deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting post" , error: err.message});
    })
})

////////////////////////////////View only one community///////////////////////////////////////


router.route("/get/:id").get(async(req,res) => {

    let communityId = req.params.id;  
    const community = await Community.findById(communityId).then((community) => {
        res.status(200).send({status : "post Fetched", community : community});

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get post" , error: err.message});
    })
})

router.route("/upload").post(

(req, res) => {

    console.log("REQ",req.files)

    try {
      if (!req.files || Object.keys(req.files).length === 0)
        return res.status(400).json({ msg: "No files were uploaded." });

      const file = req.files.file;
      if (file.size > 5 * 1024 * 1024) {
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
          { folder: "Classy" },
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