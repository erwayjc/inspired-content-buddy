
import React from "react";
import { Brain, CheckSquare, Send } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Creates",
      description:
        "Our AI studies top-performing content in your industry and creates tailored content for your brand daily.",
      iconBg: "bg-primary",
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "You Approve",
      description:
        "Review AI-generated content and approve with a single click, or request revisions if needed.",
      iconBg: "bg-secondary",
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Content Publishes",
      description:
        "Approved content is automatically scheduled and published across your marketing channels.",
      iconBg: "bg-accent",
    },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How Inspired Works</h2>
          <p className="text-lg text-gray-600">
            Our simple three-step process makes content creation effortless, 
            saving you time while delivering outstanding results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col w-full max-w-sm relative"
            >
              <div
                className={`w-16 h-16 rounded-full ${step.iconBg} text-white flex items-center justify-center mb-6`}
              >
                {step.icon}
                <div className="absolute top-4 right-8 text-4xl font-bold text-gray-100">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 flex-grow">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
