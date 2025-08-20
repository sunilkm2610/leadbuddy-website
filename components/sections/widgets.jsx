"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Download,
  Calculator,
  Bell,
  ClipboardList,
  MessageSquare,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Star,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";

const WidgetFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const tools = [
    {
      id: 1,
      title: "Announcement Bar",
      description:
        "Display urgent offers at the top of your site to capture immediate attention and create FOMO",
      example: "🔥 Flash Sale: 50% Off Everything - Only 4 Hours Left!",
      leadIncrease: "+45%",
      icon: Bell,
      className: "md:col-span-2",
      metrics: "Captures 3-5% of all visitors",
      keyBenefit: "Instant visibility across entire site",
      features: [
        "Customizable messages",
        "Time-sensitive offers",
        "Exit-intent triggers",
      ],
    },
    {
      id: 2,
      title: "Waitlist Form",
      description:
        "Build anticipation and collect high-quality emails before your product launch",
      example:
        "Join 2,847 entrepreneurs waiting for early access + exclusive bonuses",
      leadIncrease: "+67%",
      icon: Users,
      className: "md:col-span-1",
      metrics: "85% conversion on landing pages",
      keyBenefit: "Pre-qualified interested prospects",
      features: [
        "Social proof counter",
        "Early bird incentives",
        "Automated sequences",
      ],
    },
    {
      id: 3,
      title: "Newsletter Subscription",
      description:
        "Transform one-time visitors into loyal subscribers with valuable weekly content",
      example: "Get weekly marketing strategies that generated $2M+ in revenue",
      leadIncrease: "+35%",
      icon: MessageSquare,
      className: "md:col-span-1",
      metrics: "300% higher lifetime value",
      keyBenefit: "Long-term relationship building",
      features: [
        "Content previews",
        "Subscriber benefits",
        "Segmented campaigns",
      ],
    },
    {
      id: 4,
      title: "AI Chatbot",
      description:
        "Convert visitors with intelligent 24/7 conversations that qualify leads automatically",
      example:
        "Hi Sarah! I see you're interested in our premium plan. What's your main goal?",
      leadIncrease: "+89%",
      icon: MessageCircle,
      className: "md:col-span-2",
      metrics: "Qualifies leads while you sleep",
      keyBenefit: "Never miss a potential customer",
      features: ["Smart lead scoring", "Instant responses", "CRM integration"],
    },
    {
      id: 5,
      title: "Feedback Form",
      description:
        "Collect valuable insights while organically building your email list and improving products",
      example:
        "Share your biggest marketing challenge & get our free strategy template",
      leadIncrease: "+28%",
      icon: ClipboardList,
      className: "md:col-span-1",
      metrics: "40% satisfaction improvement",
      keyBenefit: "Data-driven product development",
      features: [
        "Incentivized responses",
        "Product insights",
        "Customer validation",
      ],
    },
    {
      id: 6,
      title: "Free Tool Exchange",
      description:
        "Offer high-value tools like calculators in exchange for contact information",
      example:
        "Free ROI Calculator: See how much you could save with our solution",
      leadIncrease: "+156%",
      icon: Calculator,
      className: "md:col-span-1",
      metrics: "Highest quality leads",
      keyBenefit: "Immediate value demonstration",
      features: [
        "Custom calculators",
        "Instant results",
        "Follow-up sequences",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-background" id="widgets">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-2">
        Lead Generation <AnimatedGradientText>Widgets</AnimatedGradientText>
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
        LeadBuddy widgets are built to turn every visitor into a lead, so you
        can capture more leads, drive more sales, and grow your customer base.
        Just focus on building—LeadBuddy handles your visitors for you.
      </p>
      <div className="max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-8 mb-20">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card
                key={tool.id}
                className={`group cursor-pointer hover:shadow-xl transition-all bg-transparent duration-300 border-2 hover:border-primary/20 relative overflow-hidden`}
                onMouseEnter={() => setHoveredCard(tool.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-foreground/10 rounded-xl border border-foreground/20">
                      <IconComponent className="w-8 h-8 text-foreground" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-foreground/10 text-foreground border-foreground/20 font-bold"
                    >
                      {tool.leadIncrease}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Benefit */}
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Zap className="w-4 h-4" />
                    {tool.keyBenefit}
                  </div>

                  {/* Example */}
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm text-muted-foreground font-medium">
                      <span className="text-foreground">Example:</span> "
                      {tool.example}"
                    </p>
                  </div>

                  {/* Features */}
                  {/* <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div> */}

                  {/* Metrics and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm font-medium text-muted-foreground">
                      {tool.metrics}
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 text-primary transition-transform duration-200 ${
                        hoveredCard === tool.id ? "translate-x-1" : ""
                      }`}
                    />
                  </div>
                </CardContent>

                {/* Subtle hover indicator */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WidgetFeatures;
