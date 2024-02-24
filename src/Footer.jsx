import React from "react";
import "./Footer.css";
function Footer() {
  const year = new Date();
  return (
    <div className="footer">
      &copy; All Rights Reserved {year.getFullYear()}
    </div>
  );
}

export default Footer;
