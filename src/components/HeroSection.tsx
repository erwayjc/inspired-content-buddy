
import React from "react";
import CallToAction from "./CallToAction";
import { BotIcon, CheckIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your AI Marketing{" "}
              <span className="gradient-text">Butler</span> for Winning Content
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              Inspired creates daily content for your brand based on proven winning 
              formulas. All you need to do is approve.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <CallToAction text="Start Free Trial" />
              <CallToAction text="See Demo" isPrimary={false} />
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "No more writer's block",
                "Save 15+ hours per week",
                "Consistent brand voice",
                "Content that converts"
              ].map((feature, i) => (
                <div key={i} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <div className="ml-2 text-sm text-gray-600 font-medium">Inspired Dashboard</div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <BotIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Inspired AI</p>
                    <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none mt-1">
                      <p className="text-gray-800">
                        I've created 5 social media posts based on your trending industry content. 
                        Ready for your approval!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-gray-900">Content #{item}</span>
                        <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">
                          Instagram
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {item === 1 
                          ? "Ready to take your marketing to the next level? Our AI-powered platform helps you create content that resonates with your audience."
                          : item === 2 
                            ? "Don't just keep up with trends—stay ahead of them. Let our AI analyze what's working in your industry and create content that converts."
                            : "What if your marketing team had an extra set of hands? That's exactly what our AI provides. Click to learn more!"}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-end space-x-2">
                  <button className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition-colors">
                    Regenerate
                  </button>
                  <button className="text-sm bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg transition-colors">
                    Approve All
                  </button>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
