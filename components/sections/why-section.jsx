import React from "react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import {
  Code,
  Zap,
  BarChart3,
  Bell,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <MagicCard
      gradientColor="#262626"
      className="p-6 bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-xl hover:border-foreground/20 transition-all duration-300 group"
    >
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 mr-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-background" />
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>

        {/* Hover effect indicator */}
        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </MagicCard>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Code,
      title: "No Coding Required",
      description:
        "Set up powerful lead generation tools in minutes without any technical knowledge. Our intuitive interface makes it easy for anyone to get started.",
    },
    {
      icon: Zap,
      title: "Quick Installation",
      description:
        "Get up and running in less than 5 minutes. Simply copy and paste our code snippet, and you're ready to start capturing leads.",
    },
    {
      icon: BarChart3,
      title: "All-in-One Lead Management Dashboard",
      description:
        "Manage all your leads from one centralized dashboard. Track performance, analyze data, and optimize your conversion rates effortlessly.",
    },
    {
      icon: Bell,
      title: "Instant Notifications When a New Lead Arrives",
      description:
        "Never miss a potential customer again. Get real-time notifications via email, SMS, or webhook when someone shows interest in your business.",
    },
    {
      icon: TrendingUp,
      title: "Increase Leads, Reduce Drop-offs",
      description:
        "Our proven tools help you capture more leads while reducing bounce rates. Smart popups and forms that convert visitors into customers.",
    },
    {
      icon: Globe,
      title: "Works on Any Website",
      description:
        "Compatible with all major platforms including WordPress, Shopify, Wix, and custom websites. No matter what you use, we've got you covered.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="why-leadbuddy">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-slate-100/[0.02] bg-[size:75px_75px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <AnimatedShinyText className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              ✨ Why Choose Us
            </AnimatedShinyText>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Why Businesses Love Our{" "}
            <AnimatedGradientText>Tools</AnimatedGradientText>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses who have transformed their lead
            generation with powerful widgets, easy-to-use tools that deliver
            real results.
          </p>

          {/* Stats Section */}
          {/* <div className="flex items-center justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                <NumberTicker value={10000} />+
              </div>
              <div className="text-slate-400 text-sm">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                <NumberTicker value={250} />%
              </div>
              <div className="text-slate-400 text-sm">Avg. Lead Increase</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                <NumberTicker value={99} />%
              </div>
              <div className="text-slate-400 text-sm">Uptime Guarantee</div>
            </div>
          </div> */}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
