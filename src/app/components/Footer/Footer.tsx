import React from "react";
import "./Footer.css";
import { Toolbar } from "primereact/toolbar";

const Footer: React.FC = () => {
  const centerContent = (
    <div>
      <div className='w-full'>
        <center>© 2024 Fareed Shaik. All Rights Reserved. </center>
      </div>
    </div>
  );
  return <Toolbar center={centerContent} className='footer w-full' />;
};

export default Footer;
