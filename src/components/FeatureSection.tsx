
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
      iconBg: "from-primary to-primary/70",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Audience Targeting",
      description:
        "Tailored content designed specifically for your target audience and their preferences.",
      iconBg: "from-purple-500 to-purple-400",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analysis",
      description:
        "Track how your content performs and let our AI learn from the winners to improve future content.",
      iconBg: "from-blue-500 to-blue-400",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Content Calendar",
      description:
        "Automatically schedule your approved content across all platforms to maintain consistency.",
      iconBg: "from-indigo-500 to-indigo-400",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Brand Voice Matching",
      description:
        "Content that sounds like your brand, maintaining your unique tone and style guidelines.",
      iconBg: "from-accent to-accent/70",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Unlimited Regeneration",
      description:
        "Not quite right? Regenerate as many times as needed until the content is perfect.",
      iconBg: "from-secondary to-secondary/70",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gray-50/80 z-0"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm text-primary font-medium">
            Features
          </div>
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
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-full transform translate-x-16 translate-y-16 group-hover:translate-x-14 group-hover:translate-y-14 transition-transform duration-500"></div>
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.iconBg} text-white flex items-center justify-center mb-6 shadow-md`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
