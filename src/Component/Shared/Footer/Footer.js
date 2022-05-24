import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
// import Lottie from "react-lottie"
import logo from '../../../images/logo/brake.png'

const Footer = () => {
    const phoneFont=<FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const inboxFont=<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const mapFont=<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    const clockFont=<FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
    const facebookFont=<FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
    const twitterFont=<FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
    const instaFont=<FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
    const linkedinFont=<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
    return (
        <div className=" bg-img">
           <div className="text-white p-4">
           <div className="p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:grid-cols-1 text-left gap-4">
                <div className="">
                    <h3 className="text-white bg-opacity-95 flex items-center gap-2 text-4xl mb-2">
                        <img src={logo} alt="" />
                       
                        Chunk Manufacturer</h3>
                    <p className="text-gray-300 text-sm">
                        Chunk Manufacturer is an parts manufacturer based website. Here only sell world best parts for car. Check out our Parts page and choose your desired parts for your favorite car.
                      
                    </p>
<p className="text-4xl my-3 text-yellow-400">Follow Us</p>
                    <p className="flex gap-3">
                        <a href="https://www.facebook.com/rashedsabbir16" className="text-4xl text-blue-800 hover:text-gray-100"><span>{facebookFont}</span></a>
                       <a href="https://www.twitter.com/rashedsabbir16" className="text-4xl text-sky-500 hover:text-gray-100"> <span>{twitterFont}</span></a>
                        <a href="https://www.instagram.com/rashed_sabbir" className=" text-4xl text-pink-800 hover:text-gray-100"><span>{instaFont}</span></a>
                        <a href="https://www.linkedin.com/in/rashedul-hassan-sabbir" className=" text-4xl text-blue-300 hover:text-gray-100"><span>{linkedinFont}</span></a>
                    </p>
                    </div>
                <div className="">
                   <h5  className="text-indigo-400  text-2xl mb-4"> Quick Link</h5>
                   <ul className="space-y-2">
                   <li><Link className="hover:border-red-500 border-b-2" to="/">
                           Home
                       </Link></li>
                       <li><Link className="hover:border-red-500 border-b-2" to="/cars">
                           Parts
                       </Link></li>
                       <li><Link className="hover:border-red-500 border-b-2"  to="/gallery">
                           Gallery
                       </Link></li>
                       <li> <Link className="hover:border-red-500 border-b-2" to="/my-portfolio">
                           My Portfolio
                       </Link></li>
                       <li> <Link className="hover:border-red-500 border-b-2" to="/blog">
                          Blog
                       </Link></li>
                   </ul>
                    </div>
                <div className="">
                   <h5 className="text-indigo-400 text-2xl mb-4">Car Parts</h5>
                   <ul className="space-y-2">
                       <li>Radiator</li>
                       <li>Front Axle</li>
                       <li>Alternator</li>
                       <li>Transmission</li>
                       <li>Battery</li>
                   </ul>
                  
                    </div>
                <div className="">
                    <h5 className="text-indigo-500 text-2xl mb-4">Information</h5>
                    <ul className="space-y-2">
                    <li><span className="mr-2 text-yellow-400">{phoneFont}</span> <small className="text-sm"> +88 017 4856 8861</small></li>
                    <li><span className="mr-2 text-yellow-400">{inboxFont}</span> <small className="text-sm">contact@chunkmanufacturer.com</small></li>
                    <li><span className="mr-2 text-yellow-400 ">{mapFont}</span> <small className="text-sm">1212 Gulshan 01,Dhaka,Bangladesh</small></li>
                    <li><span className="mr-2 text-yellow-400 ">{clockFont}</span> <small className="text-sm">Mon - Fri : 09:00am to 09:00pm</small></li>
                    </ul>
                    </div>


            </div>
            <div className=" border-t-2 border-wheat-600 text-center pt-3">
<small>&copy; Copyright 2022 | All Right Reserved</small>
            </div>
           </div>
        </div>
    );
};

export default Footer;