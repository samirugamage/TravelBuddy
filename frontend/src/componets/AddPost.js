import React ,{useState,useEffect} from "react"; //useState is needed for functional components
import axios from "axios";



function AddPost (){

  // Delete Function
  const onDelete = (id) =>{

    axios.delete(`http://localhost:8070/community/delete/${id}`).then((res) =>{
      alert("Deleted successfully!");
      // this.retrievePosts();
    })
  }  

    const [description,setDescription] = useState("");
    const [name,setName] = useState("");

    

    function sendData(e){
        e.preventDefault(); // to execute only the function "sendData" without submitting data.
        
        const newPost = {
            
           
            description,name
           
        }

        //input any authentications are needed
        //(path,function needed to execute)
        axios.post ( "http://localhost:8070/community/add",newPost).then(()=>{
            alert("Post Added")
            

        }).catch((err)=>{
            alert(err)
        })


        console.log(newPost); //printing the sent form data on console.log f12
        
     }


//added new...............
     //view all Community function//
    const [Community,setPost] = useState([]); //taking all the datas from mongoDB input into this array

    useEffect(()=>{
  
          function getPost () {
             axios.get("http://localhost:8070/Community/")
             .then((res)=>{
  
              
              console.log("your data has been received")
              console.log(res.data)
              
              
              setPost(res.data); //using setPost function to retrieve data and display on website
              
          
          }).catch((err)=>{
                  alert(err.message);
             })
          }
          getPost();
      },[Community]) //[Community] to update the array instantly when changed rather than refresh page.

//............................



    return (
        <div>

           {/* // -------------------------------------------------------------------------------Top Navigation Start----------------------------------------------------------------------------------------------- */}
 <div>
  
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Travel Buddy</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="/viewpost">Community</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="/eventspage">Events <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Cntus">Contact Us</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="Cmpform">Make a Complain</a>
      </li>
      
    </ul>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

    <ul class="navbar-nav ms-auto">
    <button type="button ms-suto" class="btn btn-warning ms-suto">Plan Your Trip</button>





  <li class="nav-item ">
    <a class="nav-link" href="#">LogIn </a>
  </li>
  <li class="nav-item ">
    <a class="nav-link" href="#">|</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link" href="#">Register </a>
  </li>
</ul>
  
      
      
      {/* <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Name
              </a>
            
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">My Account</a>
              <a class="dropdown-item" href="#">Log Out</a>
              </div>
          </li>
      </ul> */}
    </div>
  </div>
</nav>
      </div>
{/* //----------------------------------------------------------------------------------------------Top Navigation End-------------------------------------------------- */}
        


<div className="container" >

         


        
        {/* ////////////////////////// View Community on a table//////////////////// */}

<h3> Posts </h3>
<table className="table table-striped" style={{ marginTop: 20 }}>
  <thead>
    <tr>
      <th>Name</th>    
      <th>Reviews</th>
      
      {/* <th>post Image</th> */}
      <th>update</th>
      <th>Delete</th>
      
    </tr>
    </thead>
      <tbody>
      {
        Community.map((Post)=>(
          <tr>
            <td>{Post.name}</td>
            <td>{Post.description}</td>

            <td> <a href={`/editpost/${Post._id}`}><button type="/editpost" className="btn btn-primary">UPDATE</button> </a> </td>
            <td> <a className="btn btn-danger" href="#" onClick={() =>onDelete(Post._id)}>
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a> </td>
            
          </tr>

        ))
      }
      </tbody> </table>

      


        {/* <label for="formFileMultiple" class=""></label>
        <input class="btn btn-outline-primary" type="file" id="formFileMultiple" multiple /> */}



</div>
        </div>
    )
}
export default AddPost;