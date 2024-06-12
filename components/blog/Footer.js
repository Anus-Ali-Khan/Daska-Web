import React from "react";
import { FaFacebookF, FaSnapchatGhost } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-2">Discover</h3>
            <ul>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Our team</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-2">Learn</h3>
            <ul>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Get in Touch</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Latest news</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-2">Products</h3>
            <ul>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Landing</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Reviews</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div>
            <p>© 2023 Qode Interactive, All Rights Reserved</p>
          </div>
          <div className="flex space-x-4 text-[17px] gap-2">
            <TiSocialTwitter />
            <FaFacebookF />
            <IoLogoYoutube />
            <AiFillInstagram />
            <FaSnapchatGhost />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
