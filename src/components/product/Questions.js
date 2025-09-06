"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does Vaayu work in humid climates?",
    answer:
      "Yes, Vaayu is designed to perform effectively even in humid regions. While cooling efficiency is higher in dry climates, its hybrid design ensures consistent comfort without creating excessive dampness.",
  },
  {
    question: "What kind of spaces is Vaayu suitable for?",
    answer:
      "Vaayu systems are versatile and can be used in homes, offices, factories, and large open areas. They are engineered to provide efficient cooling in both small rooms and expansive commercial spaces.",
  },
  {
    question: "How much water and electricity does it actually save?",
    answer:
      "Vaayu consumes up to 80% less electricity compared to traditional ACs. Its advanced water management ensures minimal water usage while still delivering powerful cooling.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation typically takes just a few hours, depending on the site and requirements. Our team ensures hassle-free setup with minimal disruption to your routine.",
  },
  {
    question: "Is the airflow safe and filtered?",
    answer:
      "Yes, Vaayu provides 100% natural, fresh, and filtered airflow. The system avoids harmful chemicals or gases, ensuring healthy indoor air quality.",
  },
  {
    question: "Is financing or EMI available?",
    answer:
      "Yes, flexible financing and EMI options are available to make Vaayu more affordable. Our sales team can help tailor a payment plan that suits your budget.",
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="self-start rounded-lg border border-gray-300 bg-white shadow-sm transition hover:border-gray-400">
      <button
        type="button"
        aria-expanded={open}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-medium text-gray-800">{question}</span>
        <span className="text-xl font-bold text-gray-600">{open ? "−" : "+"}</span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          open ? "min-h-24" : "h-0 overflow-hidden"
        }`}
      >
        {open && <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">{answer}</div>}
      </div>
    </div>
  );
}

export default function Questions() {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-6">
        {/* Heading */}
        <h2 className="mb-12 text-4xl leading-tight font-semibold text-gray-900 md:text-5xl">
          Got Questions? <br /> We&apos;ve Got Answers!
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {faqs.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
