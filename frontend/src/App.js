import React from 'react';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



// prathila
import Footer from './componets/Footer';
import TravelerForm from './componets/TravelerForm';
import TimeTableTrain from './componets/TimeTableTrain';
import UpdateTimeTableTrain from './componets/UpdateTimeTableTrain';
import PublicTransDashboard from './componets/PublicTransDashboard';
import ViewTimeTbTrain from './componets/ViewTimeTbTrain';
import ScheduleForm from './componets/ScheduleForm';
import ViewSchedule from './componets/ViewSchedule';
import UpdateSchedule from './componets/UpdateSchedule';
import Sidenavbar from './componets/Sidenavbar';
import AdminNavigation from './componets/AdminNavigation';

// Miyuru
import AddTrip from './componets/AddTrip';
import AdminPanel from './componets/AdminPanel';
import ViewRouter from './componets/ViewRouter';
import UpdateTrip from './componets/UpdateTrip';
import ViewTravelForm from './componets/ViewTravelForm';

//samiru
import EventsPage from './componets/EventsPage';
import AddEvent from './componets/AddEvent';
import EditEvent from './componets/EditEvent';
import DeleteEvent from './componets/DeleteEvent';
import ViewEvent from './componets/ViewEvent';

// Osanda
import AddPost from './componets/AddPost';
import ViewPost from './componets/ViewPost';
import EditPost from './componets/EditPost';


//tharu
import LocationDi1 from './componets/LocationDi1';
import Locationpage from "./componets/Locationpage";
import AddLocation from './componets/AddLocation';
import Hotel from './componets/Hotel';
import EditLocation from './componets/EditLocation';
import './componets/Location.css';
import LocationView from './componets/LocationView';
import HotelView from './componets/HotelView';
import EditHotel from './componets/EditHotel';




// Ravindi
import LogIn from "./componets/LogIn";
import Type from "./componets/Type";
import TravelerReg from "./componets/TravelerReg";
import DriverReg from "./componets/DriverReg";
import HotelReg from "./componets/HotelReg";
import GuideReg from "./componets/GuideReg";
import ViewTraveller from "./componets/TravelerProfile";
import ViewGuide from "./componets/ViewGuide";
import ViewDriver from "./componets/ViewDriver";
import ViewhotelA from "./componets/ViewHotelAgents";
import UpdateGuide from "./componets/UpdateGuide";
import ViewTravelerprofile from "./componets/TravelerProfile";




// Vijini
// import Salary from "./componets/Salary";
import AddSalary from "./componets/AddSalary";
import EditSalary from "./componets/EditSalary";
import PaidSalary from "./componets/PaidSalary";
import ViewSalary from "./componets/ViewSalary";

// Probodha

import Cmpform from "./componets/Cmpform";
import Cntus from "./componets/Cntus";
import Adpanel from "./componets/Adpanel";
import About from "./componets/About";
import Edit from "./componets/Edit";




import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>

          {/* prathila */}
          <Route  exact path="/" element={<AdminPanel/>}/>
          <Route  exact path="/travelerForm" element={<TravelerForm/>}/>
          <Route  exact path="/PublicTransDashboard" element={<PublicTransDashboard/>}/>
          <Route  exact path="/timeTableTrain" element={<TimeTableTrain/>}/>
          <Route  exact path="/updateTimeTableTrain/:id" element={<UpdateTimeTableTrain/>}/>
          <Route  exact path="/ViewTimeTbTrain" element={<ViewTimeTbTrain/>}/>
          <Route  exact path="/ScheduleForm" element={<ScheduleForm/>}/>
          <Route  exact path="/UpdateSchedule/:id" element={<UpdateSchedule/>}/>
          <Route  exact path="/ViewSchedule" element={<ViewSchedule/>}/>
          <Route  exact path="/AdminNavigation" element={<AdminNavigation/>}/>
          <Route  exact path="/Sidenavbar" element={<Sidenavbar/>}/>

          {/* miyuru */}
          <Route  exact path="/AdminPanel" element={<AdminPanel/>}/>
          <Route  exact path="/AddTrip" element={<AddTrip/>}/>
          <Route  exact path="/ViewRoute" element={<ViewRouter/>}/>
          <Route  exact path="/UpdateTrip/:id" element={<UpdateTrip/>}/>
          <Route  exact path="/ViewTravelForm" element={<ViewTravelForm/>}/>


          {/* samiru */}
          <Route  exact path="/eventspage" element={<EventsPage/>}/>
          <Route exact path="/addevent" element={<AddEvent/>}/>
          <Route exact path="/editevent/:id" element={<EditEvent/>}/>
          <Route exact path="/deleteevent/:id" element={<DeleteEvent/>}/>
          <Route exact path="/ViewEvent" element={<ViewEvent/>}/>


          {/* osanda */}
          <Route  exact path="/viewpost" element={<ViewPost/> }/> {/* http://localhost:3000/viewpost */}
          <Route exact path="/addpost" element={<AddPost/>}/>{/* http://localhost:3000/addpost */}
          <Route exact path="/editpost/:id" element={<EditPost/>}/>


          {/* Tharu */}
          <Route exact path="/locationp" element={<Locationpage/>} />
          <Route exact path="/locationd1" element={<LocationDi1/>} />
          <Route exact path='/aloca' element={<AddLocation/>}/>
          <Route exact path='/editlo/:id' element={<EditLocation/>}/>
          <Route exact path='/locationview' element={<LocationView/>}/>
          <Route exact path='/hotelview' element={<HotelView/>}/>
          <Route exact path='/edithotel/:id' element={<EditHotel/>}/>

          <Route exact path='/hotel' element={<Hotel/>}/>
            

          {/* Ravindi */}
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/typ" element={<Type/>}/>
          <Route exact path="/trv" element={<TravelerReg/>}/>
          <Route exact path="/dri" element={<DriverReg/>}/>
          <Route exact path="/htl" element={<HotelReg/>}/>
          <Route exact path="/gui" element={<GuideReg/>}/>
          <Route exact path="/ViewTravelerprofile" element={<ViewTraveller/>}/>
          <Route exact path="/viewguide" element={<ViewGuide/>}/>
          <Route exact path="/viewdriver" element={<ViewDriver/>}/>
          <Route exact path="/viewhtl" element={<ViewhotelA/>}/>
          <Route exact path="/ViewTravelerprofile" element={<ViewTravelerprofile/>}/>
          <Route exact path="/UpdateGuide/:id" element={<UpdateGuide/>}/>




          {/* Vijini */}
          {/* <Route exact path="/insert" element={<Salary/>}/> */}
          <Route exact path="/addsalary" element={<AddSalary/> }/>
          <Route exact path="/editsalary/:id" element={<EditSalary/> }/>
          <Route exact path="/paidsalary/:id" element={<PaidSalary /> }/>
          <Route exact path="/viewSalary" element={<ViewSalary /> }/>

          {/* Probodha */}
          <Route exact path="/Adpanel" element={<Adpanel/>} />
        <Route path="/Cntus" element={<Cntus/>} />
        <Route path="/Cmpform" element={<Cmpform/>} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/About" element={<About />} />
        







       </Route>
     </Routes>
     
    
    <Footer/>
    <ToastContainer position="top-center" autoClose={4000}></ToastContainer>
    </BrowserRouter>
    
  );
}

export default App;
