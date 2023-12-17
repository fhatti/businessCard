import React from "react";
import ReactDOM from "react-dom";
export default function Header()
{
    return(
        <div className="container container-header">
        <img className="profile-pict" src="../assets/profile-pic.png" alt="a lady smiling" />
        <h1 className="txt-name ">Laura Smith</h1>
        <h4 className="txt-job">Frontend Developer</h4>
        <a className="txt-website" href="#">laurasmith.website</a>
        <div className="btn-container">
        <a href="mailto:default@gmail.com" className="btn btn-email"><i className="fa-solid fa-envelope icon"></i>Email</a>
         <a href="#" className="btn btn-linkedin"><i className="fa-brands fa-linkedin icon"></i>LinkedIn</a>
        </div>
        </div>
    )
}