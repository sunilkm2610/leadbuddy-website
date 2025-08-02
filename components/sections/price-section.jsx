import React from "react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const PricingCard = ({
  plan,
  price,
  features,
  isPopular = false,
  className = "",
}) => {
  return (
    <Card
      className={`p-0 shadow-none border-none relative ${
        isPopular ? "scale-105" : ""
      } ${className}`}
    >
      <MagicCard
        gradientColor={isPopular ? "#3b82f6" : "#262626"}
        className="pt-10"
      >
        {isPopular && (
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ⭐ Best Choice
            </div>
          </div>
        )}

        {/* Plan Header */}
        <CardHeader className="text-center border-b border-slate-700 pb-6">
          <CardTitle
            className={`text-2xl font-bold ${
              isPopular ? "text-white" : "text-slate-200"
            }`}
          >
            {plan}
          </CardTitle>
          <CardDescription className="mt-4">
            <div className="flex items-center justify-center">
              <span className="text-slate-400 text-lg">₹</span>
              <span
                className={`text-4xl font-bold ${
                  isPopular ? "text-white" : "text-slate-200"
                }`}
              >
                {price}
              </span>
              <span className="text-slate-400 text-lg ml-1">/month</span>
            </div>
          </CardDescription>
        </CardHeader>

        {/* Features */}
        <CardContent className="p-6">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 ${
                    isPopular ? "bg-blue-500" : "bg-slate-600"
                  }`}
                >
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>

        {/* CTA Button */}
        <CardFooter className="p-6 border-t border-slate-700 pt-6">
          {isPopular ? (
            <ShimmerButton className="w-full text-white font-semibold py-3">
              <span className="relative z-20 text-foreground">
                Start Free Trial
              </span>
            </ShimmerButton>
          ) : (
            <Button
              className="w-full py-6 px-6 border rounded-full cursor-pointer font-semibold"
              variant="outlined"
            >
              Start Free Trial
            </Button>
          )}
        </CardFooter>
      </MagicCard>
    </Card>
  );
};

const PricingSection = () => {
  const plans = [
    {
      plan: "Starter Plan",
      price: "499",
      features: ["AI Chatbot", "Offer Popups", "Lead Forms", "200 Leads/month"],
      isPopular: false,
    },
    {
      plan: "Growth Plan",
      price: "999",
      features: [
        "Everything in Starter",
        "Top Bar Announcements",
        "Free Tools (like EMI Calculator)",
        "Unlimited Leads",
      ],
      isPopular: true,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple <AnimatedGradientText>Pricing</AnimatedGradientText> for
            Every Business
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Choose the perfect plan to grow your business and convert more
            visitors into leads
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((planData, index) => (
            <PricingCard
              key={index}
              plan={planData.plan}
              price={planData.price}
              features={planData.features}
              isPopular={planData.isPopular}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-slate-300 text-sm">
              30-day money-back guarantee
            </span>
          </div>

          <p className="text-slate-400 text-sm">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
