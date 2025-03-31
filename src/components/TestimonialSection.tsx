
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            <div key={index} className="testimonial-card">
              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
