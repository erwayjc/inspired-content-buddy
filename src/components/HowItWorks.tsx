
import React from "react";
import { Brain, CheckSquare, Send, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Creates",
      description:
        "Our AI studies top-performing content in your industry and creates tailored content for your brand daily.",
      iconBg: "from-primary to-primary/70",
      bgClass: "from-primary/5 to-white"
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "You Approve",
      description:
        "Review AI-generated content and approve with a single click, or request revisions if needed.",
      iconBg: "from-secondary to-secondary/70",
      bgClass: "from-secondary/5 to-white"
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Content Publishes",
      description:
        "Approved content is automatically scheduled and published across your marketing channels.",
      iconBg: "from-accent to-accent/70",
      bgClass: "from-accent/5 to-white"
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white z-0"></div>
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full h-80 bg-gradient-to-t from-gray-50/50 to-transparent"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full text-sm text-secondary font-medium">
            How It Works
          </div>
          <h2 className="text-3xl font-bold mb-4">Three Simple Steps to Content Success</h2>
          <p className="text-lg text-gray-600">
            Our simple three-step process makes content creation effortless, 
            saving you time while delivering outstanding results.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-gradient-to-b ${step.bgClass} p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col w-full max-w-sm relative z-10 hover:shadow-md transition-all duration-300`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.iconBg} text-white flex items-center justify-center mb-6 shadow-md`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 flex-grow">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
            
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 transform -translate-y-1/2 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
