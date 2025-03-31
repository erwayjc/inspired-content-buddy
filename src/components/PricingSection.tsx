
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, StarIcon } from "lucide-react";

const PricingSection = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$49",
      description:
        "Perfect for small businesses and solopreneurs just getting started.",
      features: [
        "5 AI-generated posts per day",
        "Basic content calendar",
        "3 social media platforms",
        "Email support",
        "Basic analytics",
      ],
      cta: "Start Free Trial",
      mostPopular: false,
    },
    {
      name: "Professional",
      price: "$99",
      description:
        "Ideal for growing businesses with established marketing needs.",
      features: [
        "15 AI-generated posts per day",
        "Advanced content calendar",
        "All social media platforms",
        "Email templates & newsletter content",
        "Priority support",
        "Advanced analytics & insights",
        "Custom brand voice settings",
      ],
      cta: "Start Free Trial",
      mostPopular: true,
    },
    {
      name: "Enterprise",
      price: "$249",
      description:
        "For larger teams and businesses with complex marketing requirements.",
      features: [
        "Unlimited AI-generated content",
        "Complete marketing content suite",
        "Dedicated account manager",
        "API access for custom integrations",
        "White-label options",
        "Multi-brand management",
        "Advanced team collaboration tools",
      ],
      cta: "Contact Sales",
      mostPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50/50 to-transparent z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm text-primary font-medium">
            Pricing
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your content needs.
            All plans include a 14-day free trial with no credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 h-full flex flex-col ${
                tier.mostPopular 
                  ? "bg-gradient-to-b from-white to-primary/5 shadow-lg border-0 scale-105 z-10" 
                  : "bg-white shadow-sm hover:shadow-md border border-gray-100"
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 inset-x-0 flex justify-center">
                  <div className="bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold px-6 py-1.5 rounded-b-lg shadow-lg flex items-center">
                    <StarIcon className="w-3.5 h-3.5 mr-1.5" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-5">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-500 ml-1.5">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                <div className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="mt-1 flex-shrink-0 h-4 w-4 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <CheckIcon className="h-2.5 w-2.5 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-8 pb-8 mt-auto">
                <Button
                  className={`w-full py-6 rounded-xl text-sm ${
                    tier.mostPopular
                      ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-md"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-100"
                  }`}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
