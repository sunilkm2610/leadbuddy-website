"use client";

import React, { useState } from "react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BorderBeam } from "@/components/magicui/border-beam";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border rounded-lg overflow-hidden backdrop-blur-sm">
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex justify-between items-center transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-white pr-4">
          {question}
        </span>
        <div
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 text-slate-300 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const faqs = [
    {
      question: "Do I need coding knowledge?",
      answer:
        "No, you do not need any coding knowledge to use our lead generation widgets. Our platform is designed for everyone, including those without technical experience. Simply copy and paste a single code snippet into your website, and our tools will start working instantly. There is no need for complex setup or programming skills.",
    },
    {
      question: "Will this slow down my website?",
      answer:
        "No, our widgets are built to be lightweight and optimized for fast loading speeds. We use modern web technologies to ensure that your website’s performance is not affected. The code is asynchronous and does not block your site’s content, so your visitors will continue to enjoy a seamless browsing experience.",
    },
    {
      question: "Where can I see my leads?",
      answer:
        "All of your leads are securely stored in your personal dashboard, which is easy to access and use. The dashboard provides a clear overview of every lead captured, along with useful details and analytics. You can log in at any time to manage, export, or follow up with your leads, ensuring you never miss an opportunity.",
    },
    {
      question: "Is it mobile-friendly?",
      answer:
        "Yes, our lead generation widgets are fully mobile-friendly and responsive. They automatically adapt to any device, including smartphones, tablets, and desktop computers. This ensures that your forms and popups look great and function perfectly for all your visitors, no matter how they access your website.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <AnimatedGradientText>Frequently Asked</AnimatedGradientText>{" "}
            Questions
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about our lead generation widgets
          </p>
        </div>

        <div className="relative">
          <div className="space-y-4 relative z-10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <button className="inline-flex items-center px-6 py-3 border border-slate-600 rounded-lg text-slate-300 hover:text-white hover:border-slate-400 transition-all duration-300 hover:bg-slate-800/50">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.433L3 21l2.433-5.094A8.959 8.959 0 013 12C3 7.582 6.582 4 12 4s8 3.582 8 8z"
              />
            </svg>
            Contact Support
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FAQSection;
