import React from "react";
import "./style/Footer.css";

function Footer() {
  return (
    <div className="main-footer" style={{marginTop:"50px"}}>
      <div className="container">
          <p style={{position:"absolute" ,top:"20%",left:"5%"}}> @2022 All rights reserved </p>

          <p style={{position:"absolute" ,top:"20%",right:"25%"}}> Contact Us </p>
          <p style={{position:"absolute" ,top:"20%",right:"15%"}}> Privacy Policy </p>
          <p style={{position:"absolute" ,top:"20%",right:"10%"}}> Help </p>

      </div>
    </div>
  );
}

export default Footer;