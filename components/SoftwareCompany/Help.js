"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why this mobile app is the best solution for your business?",
      answer:
        "This app offers a comprehensive suite of features that streamline business operations, improve customer engagement, and provide valuable insights through analytics.",
    },
    {
      question: "What can I learn from using this App?",
      answer:
        "You can learn how to manage your business more efficiently, track performance metrics, and leverage data to make informed decisions.",
    },
    {
      question: "What is the price of the App?",
      answer:
        "The app is available at various pricing tiers to accommodate different business needs, starting from $9.99 per month.",
    },
    {
      question: "Which gadget can I upload on my App?",
      answer:
        "You can upload a wide range of gadgets including smartphones, tablets, and smartwatches that are compatible with the app's requirements.",
    },
    {
      question: "Why this mobile app is the best solution for your business?",
      answer:
        "This app integrates seamlessly with your existing systems, offers robust security features, and provides a user-friendly interface that enhances productivity.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#E8ECFD] flex justify-center items-center w-full min-h-screen py-8 lg:py-16">
      <div className="w-full max-w-screen-xl px-4 lg:px-8">
        <h2 className="mb-8 text-2xl font-normal leading-8 text-center lg:text-4xl lg:leading-10">
          Help & FAQ
        </h2>
        <div className="flex flex-col space-y-4 lg:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full p-4 bg-white rounded-lg shadow-sm lg:p-6"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-base lg:text-lg font-medium text-[#351A5F]">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <IoIosArrowUp className="w-5 h-5 font-bold lg:w-6 lg:h-6" />
                ) : (
                  <FaChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
                )}
              </div>
              {activeIndex === index && (
                <div className="mt-4 text-gray-700">
                  <p className="text-sm lg:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
