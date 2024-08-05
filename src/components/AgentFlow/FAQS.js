import React from "react";
import Layout from "../layout";
import { Collapse } from "antd";
import Svgs from "../../assets/svgs";

const FAQS = () => {
  // Sample FAQ data, you can replace it with actual data
  const faqData = [
    {
      header: "What is TrustAgent?",
      content: "Answer to question 1.",
    },
    {
      header: "How does TrustAgent work?",
      content: "Answer to question 2.",
    },
    {
      header: "Is TrustAgent free?",
      content: "Answer to question 3.",
    },
    {
      header:
        "Why should I use TrustAgent instead of negotiating with the agent directly?",
      content: "Answer to question 4.",
    },
    {
      header: "What happens if I don’t receive proposals within 24 hours?",
      content: "Answer to question 5.",
    },
  ];

  return (
    <Layout>
      <div className="w-full h-auto bg-white px-4 pt-6 pb-2">
        <p className="font-sans font-normal text-base text-[#2C363F] mb-8">
          Get answers to frequently asked questions here.
        </p>
        <Collapse
          accordion
          className="faq-collapse"
          expandIcon={({ isActive }) =>
            isActive ? <Svgs.downArrow /> : <Svgs.downArrow />
          }
          expandIconPosition="end" // Position the icon at the end (right side)
        >
          {faqData.map((faq, index) => (
            <Collapse.Panel header={faq.header} key={index}>
              <p>{faq.content}</p>
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    </Layout>
  );
};

export default FAQS;
