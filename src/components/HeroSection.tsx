
import React from "react";
import CallToAction from "./CallToAction";
import { BotIcon, CheckIcon, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute -top-24 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-20">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1.5 mb-6 bg-gray-100 rounded-full text-sm text-gray-700">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              <span>AI-Powered Content Creation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your AI Marketing{" "}
              <span className="relative">
                <span className="relative z-10 gradient-text">Butler</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-accent/20 z-0"></span>
              </span>{" "}
              for Winning Content
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Inspired creates daily content for your brand based on proven winning 
              formulas. All you need to do is approve.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <CallToAction text="Start Free Trial" />
              <CallToAction text="See Demo" isPrimary={false} />
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              {[
                "No more writer's block",
                "Save 15+ hours per week",
                "Consistent brand voice",
                "Content that converts"
              ].map((feature, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <CheckIcon className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <div className="ml-2 text-sm text-gray-500 font-medium">Inspired Dashboard</div>
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-4">
                    <BotIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Inspired AI</p>
                    <div className="bg-gray-50 p-3 rounded-lg rounded-tl-none mt-1 border border-gray-100">
                      <p className="text-gray-800">
                        I've created 5 social media posts based on your trending industry content. 
                        Ready for your approval!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border border-gray-100 rounded-lg p-3 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer bg-white">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-gray-900">Content #{item}</span>
                        <span className="text-xs bg-blue-50 text-blue-700 rounded-full px-2 py-0.5 border border-blue-100">
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
                  <button className="text-sm bg-gray-50 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-lg transition-colors border border-gray-100">
                    Regenerate
                  </button>
                  <button className="text-sm bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white py-2 px-4 rounded-lg transition-colors">
                    Approve All
                  </button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-secondary/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-36 h-36 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
