import React from "react";
import "./ContactUs.css"
import Textareademo from "./Textarea";
import Footer from "../../components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar/Navbar";
import MobileNavbar from "../../components/Navbar/mobilenavbar";

const ContactForm = () => {
   const isMobile = useMediaQuery({ maxWidth: "700px" })
   return (
      <>
      {!isMobile && <Navbar />}
      {isMobile && <MobileNavbar />}
         <div className="content">
            <h1>Contact Us</h1>
            <p>Got a question?<br />Fill out the form and we'll get back to you as soon as we can.<br /></p>

            <form>
               <div className="First">
                  <div className="fieldBlock">
                     <label>Name*</label>
                     <input type="text" required placeholder="Your First Name"></input>
                  </div>
                  <div className="fieldBlock">
                     <label>Middle Name</label>
                     <input type="text" placeholder="Your Middle Name"></input>
                  </div>
               </div>

               <div className="First">
                  <div className="fieldBlock">
                     <label>Last Name*</label>
                     <input type="text" required placeholder="Your Last Name"></input>
                  </div>
                  <div className="fieldBlock">
                     <label>Phone No*</label>
                     <input type="text" required placeholder="012 345 9954"></input>
                  </div>
               </div>

               <div className="fieldBlock">
                  <label>Email ID*</label>
                  <input className="company" type="text" required placeholder="example@emai.com" ></input>
               </div>
               <br />
               <label>Message*</label><br /><br />

               <Textareademo /><br />
               <button type="submit" className="btn">Send Message</button>



            </form>
         </div>
         <Footer />
      </>
   )
};
export default ContactForm;
