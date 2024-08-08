import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'What is TrustAgent?', answer: 'TrustAgent is a...' },
    { question: 'How does TrustAgent work?', answer: 'TrustAgent works by...' },
    { question: 'Is TrustAgent free?', answer: 'Yes, TrustAgent is free...' },
    { question: 'Why should I use TrustAgent instead of negotiating with the agent directly?', answer: 'Using TrustAgent offers...' },
    { question: 'What happens if I don’t receive proposals within 24 hours?', answer: 'If you don’t receive proposals...' },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const ArrowIcon = ({ isActive }) => (
    <svg
      width="22"
      height="13"
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transform transition-transform ${isActive ? 'rotate-180' : 'rotate-0'}`}
    >
      <path d="M1 1L11 11L21 1" stroke="#FFBF00" strokeWidth="2" />
    </svg>
  );

  return (
    <div className="bg-white rounded-[4px] mx-auto p-4">
      <h2 className=" font-normal text-custom_gray text-base  mb-4">Get answers to frequently asked questions here.</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <button
            className="w-full text-left py-2 px-4 bg-customWhite border rounded shadow-sm focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-lg">{faq.question}</span>
              <ArrowIcon isActive={activeIndex === index} />
            </div>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
