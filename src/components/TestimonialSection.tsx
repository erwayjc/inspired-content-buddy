
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechGrow",
      avatar: "/avatar-1.jpg",
      content:
        "Inspired has transformed our content strategy. We're creating twice the content in half the time, and our engagement rates have increased by 68% in just two months.",
      stars: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Social Media Manager, FitLife",
      avatar: "/avatar-2.jpg",
      content:
        "The AI understands our brand voice perfectly. It's like having an extra team member who knows exactly what our audience wants to see and hear.",
      stars: 5,
    },
    {
      name: "Rebecca Chen",
      role: "Founder, StyleHub",
      avatar: "/avatar-3.jpg",
      content:
        "Before Inspired, I was spending 15+ hours a week creating content. Now I spend 30 minutes reviewing and approving, and the quality is even better!",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gray-50/50 z-0"></div>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent z-0"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full text-sm text-accent font-medium">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Loved by Marketing Teams Everywhere
          </h2>
          <p className="text-lg text-gray-600">
            See how Inspired is helping brands transform their content strategy 
            and drive better results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="p-6 relative">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-50">
                  <Quote className="w-4 h-4 text-gray-400" />
                </div>
                
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.content}</p>
                <div className="flex items-center relative z-10">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-white ring-2 ring-gray-50">
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
