import React from "react";
import logo from '../logo.svg';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex flex-col lg:flex-row lg:justify-evenly space-y-8 lg:space-y-0 lg:space-x-8">
        
        <div className="flex flex-col items-center space-y-8">
        
            <img src={logo} alt="Logo" className="w-36 h-18" />
          <h1 className="text-xl font-bold">Subscribe With Us</h1>
          <p className="">
            Sign up now and  <br /> 
            be the first to know
          
          </p>
          <input
            type="text"
            placeholder="Enter your email address"
            className="border p-2 rounded w-full max-w-md"
          />
    
      
          <div className="flex space-x-2 my-0 6-1">
            <a href="https://www.linkedin.com" className="text-blue-700">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://www.whatsapp.com" className="text-green-500">
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" className="text-pink-500">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com" className="text-blue-600">
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">Products</h1>
          <h6><a href="#" className="hover:underline">Advances Oxidation Plasma Cell (AOP)</a></h6>
          <h6><a href="#" className="hover:underline">Falcon-S</a></h6>
          <h6><a href="#" className="hover:underline">Falcon-C</a></h6>
          <h6><a href="#" className="hover:underline">Bipoler Ionizer</a></h6>
          <h6><a href="#" className="hover:underline">CBR Filter</a></h6>
          <h6><a href="#" className="hover:underline">ESP Filter</a></h6>
          <h6><a href="#" className="hover:underline">Virushield Air Purifier</a></h6>
          <h6><a href="#" className="hover:underline">odorNOX Unit</a></h6>
          <h6><a href="#" className="hover:underline">Corrosion Control Unit</a></h6>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">Solutions</h1>
          <h6><a href="#" className="hover:underline">Indoor Air Quality</a></h6>
          <h6><a href="#" className="hover:underline">Toxic Gas</a></h6>
          <h6><a href="#" className="hover:underline">Corrosion</a></h6>
          <h6><a href="#" className="hover:underline">Control</a></h6>
          <h6><a href="#" className="hover:underline">AQI Monitoring</a></h6>
          <h6><a href="#" className="hover:underline">Odor Control</a></h6>
        </div>
        
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">Explore</h1>
          <h6><a href="#" className="hover:underline">Latest Insights</a></h6>
          <h6><a href="#" className="hover:underline">Download Centre</a></h6>
          <h6><a href="#" className="hover:underline">Our Test Reports</a></h6>
          <h6><a href="#" className="hover:underline">Media Gallery</a></h6>
          <h6><a href="#" className="hover:underline">Corporate Responsibilities</a></h6>
          <h6><a href="#" className="hover:underline">Careers</a></h6>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;