
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

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
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your content needs.
            All plans include a 14-day free trial with no credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={tier.mostPopular ? "pricing-card-highlight" : "pricing-card"}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full shadow-sm">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-6 ${
                  tier.mostPopular
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
