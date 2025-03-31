
import React from "react";
import { 
  Sparkles, 
  Target, 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  RefreshCw 
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Content Creation",
      description:
        "Our AI analyzes top-performing content across your industry to generate high-converting posts, emails, and ads.",
      iconBg: "bg-primary",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Audience Targeting",
      description:
        "Tailored content designed specifically for your target audience and their preferences.",
      iconBg: "bg-purple-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analysis",
      description:
        "Track how your content performs and let our AI learn from the winners to improve future content.",
      iconBg: "bg-blue-500",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Content Calendar",
      description:
        "Automatically schedule your approved content across all platforms to maintain consistency.",
      iconBg: "bg-indigo-500",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Brand Voice Matching",
      description:
        "Content that sounds like your brand, maintaining your unique tone and style guidelines.",
      iconBg: "bg-accent",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Unlimited Regeneration",
      description:
        "Not quite right? Regenerate as many times as needed until the content is perfect.",
      iconBg: "bg-secondary",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Your Complete Content Marketing Solution
          </h2>
          <p className="text-lg text-gray-600">
            Inspired combines AI technology with proven marketing strategies to 
            deliver content that engages, converts, and grows your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div
                className={`feature-icon ${feature.iconBg}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
