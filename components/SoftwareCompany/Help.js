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
    // main
    <div className="bg-[#E8ECFD] flex justify-center items-center w-full min-h-screen py-16">
      <div className="w-full max-w-screen-xl px-4">
        <h2 className="text-4xl font-normal text-center leading-10 mb-8 text-[Inter 500]">
          Help & FAQ
        </h2>
        {/* boxes */}
        <div className="space-y-5 flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm w-full"
            >
              {/* inside */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-lg text-[Inter 500] font-medium text-[#351A5F]">
                  {faq.question}
                </h3>
                {/* arrow */}
                {activeIndex === index ? (
                  <IoIosArrowUp className="w-6 h-6 font-bold" />
                ) : (
                  <FaChevronDown className="w-6 h-6" />
                )}
              </div>
              {/* dropdown */}
              {activeIndex === index && (
                <div className="mt-4 text-gray-700">
                  <p className="text-sm">{faq.answer}</p>
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