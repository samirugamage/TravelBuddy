import React ,{useState} from "react"; //useState is needed for functional components
import axios from "axios";
import { useLocation } from "react-router-dom";




function EditPost (){

    const [description,setDescription] = useState("");
    const [name,setName] = useState("");
    const location = useLocation();
    
    console.log(location); //testing for function in console getting ID
    const id= location.pathname.split("/")[2];
    console.log(id);  //testing for function in console and splitting ID

    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const updatePost = {
            description, name
        }
console.log(updatePost);
        //input any authentications are needed
        //(path,function needed to execute)
        axios.put( `http://localhost:8070/community/update/${id}`,updatePost).then(()=>{
            alert("Post Edited")
            

        }).catch((err)=>{
            alert(err)
        })


        console.log(updatePost); //printing the sent form data on console.log f12
        
    }



    



    return (
        <div className="container" >
            

            <form onSubmit={sendData}>

            <div className="form-row" >
            <div className="form-group col-md-6">
                <label for="inputName">Name</label>
                <input type="Text" className="form-control" id="inputName" placeholder="write your name..." 
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setName(e.target.value); //save the target values in name variable
                }} />
            </div>
            </div>

            <div className="form-row" >
            <div className="form-group col-md-6">
                <label for="inputPostDescription">Description</label>
                <input type="Text" className="form-control" id="inputPostDescription" placeholder="write your experience.." 
                onChange={(e)=>{ //onchange refers to saving automatically when typing

                    setDescription(e.target.value); //save the target values in name variable
                }} />
            </div>
            </div>

            <button type="submit" className="btn btn-primary">Add a post</button>
        </form> 
        
        </div>
            


    )
}
export default EditPost;