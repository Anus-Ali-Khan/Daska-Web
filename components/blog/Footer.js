import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 pl-5 text-white bg-purple-900 md:flex md:text-center sm:">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-sm:flex max-sm:flex-col ">
          <div>
            <h2 className="mb-4 text-2xl font-bold">billic</h2>
            <div className="mb-4">
              <p className='lg:ml-3'>Download app for FREE</p>
              <div className="flex mt-2 space-x-2 md:ml-14">
                <button className="px-4 py-2 text-white bg-transparent border rounded">
                  <i className="fab fa-apple"></i> App Store
                </button>
                <button className="px-4 py-2 text-white bg-transparent border rounded">
                  <i className="fab fa-google-play"></i> Google Play
                </button>
              </div>
              <p className="mt-2 ml-0 text-sm lg:ml-5">*Currently available in the U.S. and Canada</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Discover</h3>
            <ul>
              <li className="mb-2"><a href="#">Contact</a></li>
              <li className="mb-2"><a href="#">Portfolio</a></li>
              <li className="mb-2"><a href="#">Blog</a></li>
              <li className="mb-2"><a href="#">Our team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Learn</h3>
            <ul>
              <li className="mb-2"><a href="#">Blog</a></li>
              <li className="mb-2"><a href="#">Get in Touch</a></li>
              <li className="mb-2"><a href="#">FAQ</a></li>
              <li className="mb-2"><a href="#">Latest news</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Products</h3>
            <ul>
              <li className="mb-2"><a href="#">Shop</a></li>
              <li className="mb-2"><a href="#">Pricing</a></li>
              <li className="mb-2"><a href="#">Blog</a></li>
              <li className="mb-2"><a href="#">Landing</a></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul>
              <li className="mb-2"><a href="#">About us</a></li>
              <li className="mb-2"><a href="#">Contact</a></li>
              <li className="mb-2"><a href="#">Reviews</a></li>
              <li className="mb-2"><a href="#">Services</a></li>
            </ul>
          </div> */}
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p className="text-sm">&copy; 2023 Qode Interactive, All Rights Reserved</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
