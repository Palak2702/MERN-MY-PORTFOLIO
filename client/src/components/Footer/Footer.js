import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey , My name is Palak khandelwal. I am a MERN Developer and
          Programmer.
        </Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Palak2702" target="black">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/palak-khandelwal-036205203"
          target="black"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
