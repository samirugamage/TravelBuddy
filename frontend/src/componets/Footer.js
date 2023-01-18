import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


function Footer(){
    return (
      

      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' fixed-bottom>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        

        
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Travel Buddy
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Travel Guide
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Accomadation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Transportation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Payments 
                </a>
              </p>
            </MDBCol> */}

            {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Sri Lanka
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@travelbuddy.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 011 212 3456
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 011 212 3456
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2022 - All rights reserved - WD_B03_ITP_03  
        <a className='text-reset fw-bold' href=''>
          - Travel Buddy
        </a>
      </div>
    </MDBFooter>
  );







  // <div class="card-footer text-muted bg-dark" >
  //   <footer class="page-footer" id="pageFooter">
  //     <div class="footer-content">
  //     <div class="row ">
  //     <div class="col-2">
  //     <div class="footer-title">
      
  //       <a class="navbar-brand" href="#">Travel Buddy</a>
     
  //     </div>
      
  //     </div>

  //     <div class="browse col-2">
  //       <div class="footer-title">Browse</div>
  //         <ul class="menu-items">
  //         <li>
  //         <a href="ar/recent-plans.html">Home</a>
  //         </li>
  //         <li>
  //         <a href="ar/destinations.html">Destinations</a>
  //         </li>
        
  //         </ul>
  //     </div>

  //     <div class="help col-2">

  //     <div class="footer-title">Help</div>

  //       <ul class="menu-items">
  //       <li class="faq">
  //       <a href="ar/faq.html">FAQ</a>
  //       </li>
  //       <li>
  //       <a href="javascript:void(0)" id="feedback-footer">Contact us</a>
  //       </li>
  //       <li>
  //       <a href="ar/privacy-policy.html">About Us</a>
  //       </li>
  //       <li>
  //       <a href="ar/terms-of-use.html">Terms of use</a>
  //       </li>
  //       </ul>
  //     </div>

    

  //     <div class="col-3 social-media">
      
  //     <ul>
  //     <li>
  //     <i class="bi bi-facebook"></i>
  //     </li>

  //     <li>
  //     <a rel="nofollow noopener noreferrer" href="https://twitter.com/InspirockTravel" target="_blank" title="Inspirock on Twitter">
      
  //     </a>
  //     </li>
  //     <li>
  //     <a rel="nofollow noopener noreferrer" href="https://www.instagram.com/inspirock/" target="_blank" title="Inspirock on Instagram">
      
  //     </a>
  //     </li>
  //     <li>
  //     <a rel="nofollow noopener noreferrer" href="https://www.youtube.com/inspirock/" target="_blank" title="Inspirock on YouTube">
      
  //     </a>
  //     </li>
  //     </ul>
      
  //     </div>
  //     </div>
  //     </div>

  //     <div class="row">
  //     <div class="col-4"> </div>
  //     <div class="col-12">
  //     <div class="divider py-1 sm-success"></div>
  //     </div>
  //     <ul class="footer-copyright clearfix">
  //     <li>
  //     © 2022 <a href="">Travel Buddy<span class="tm"> ®</span></a> - All rights reserved</li>
  //     <li>
  //     <span class="geo-attrib clearfix">
  //     Group : WD_B03_ITP_03</span>
  //     </li>
  //     <li>
      
  //     </li>
  //     </ul>
  //     </div>
     
  //     </footer>
 
  // </div>
 
   

}
export default Footer;