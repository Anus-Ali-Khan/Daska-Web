'use client'
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const faqs = [
    "Why this mobile app is the best solution for your business?",
    "What can I learn from using this App?",
    "What is the price of the App?",
    "Which gadget can I upload on my App?",
    "Why this mobile app is the best solution for your business?",
  ];

  const detailedContent = "Lorem Ipsum estibulum blandit libero at mauris condime ntum males uada scelerisque in mauris ut malesuada.Nullam id dolor finibus, efficitur lorem ut, consequat nisl sit amet non ligula facilisis, ultrices ex sed mollis sem.";

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setShowModal(!showModal);
    } else {
      setActiveIndex(index);
      setModalContent(detailedContent);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-[#E8ECFD] flex justify-center items-center w-full h-auto py-16 border-2">
      <div className="w-[90%] flex flex-col m-auto">
        <h2 className="mb-8 text-4xl font-semibold leading-4 text-center ">Help & FAQ</h2>
        <div className="space-y-4  flex items-center flex-col mt-[4rem]">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm w-[44rem] ">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-lg font-medium text-[#351A5F]">{faq}</h3>
                {activeIndex === index ? (
                  <IoIosArrowUp className="w-6 h-6" />
                ) : (
                  <FaChevronDown className="w-6 h-6" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#E8ECFD] p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 text-xl font-semibold">Details</h2>
            <p className="text-sm text-gray-700">{modalContent}</p>
            <button
              className="mt-6 px-4 py-2 bg-[#7F2EF8] text-white rounded-md"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;
