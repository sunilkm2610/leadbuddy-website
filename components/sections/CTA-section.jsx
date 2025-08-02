import React from "react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { NumberTicker } from "@/components/magicui/number-ticker";

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* CTA Card */}
        <div className="relative bg-gradient-to-br rounded-2xl border p-8 md:p-12 text-center overflow-hidden">
          <BorderBeam size={250} duration={12} delay={9} />

          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Urgency Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm text-red-400 font-medium">
                Limited Time Offer
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Get More{" "}
              <AnimatedGradientText>Leads</AnimatedGradientText> from Your
              Website?
            </h2>

            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Install our widgets today and start converting your visitors into
              customers.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-400">
                  <NumberTicker value={10000} />+
                </span>
                <span className="text-slate-400">
                  websites using our widgets
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-400">
                  <NumberTicker value={350} />%
                </span>
                <span className="text-slate-400">
                  average conversion increase
                </span>
              </div>
            </div>

            <div className="mb-6">
              <ShimmerButton className="text-lg px-8 py-4 font-semibold relative z-10 mx-auto">
                <span className="relative z-20 text-foreground">
                  Get Started Free
                </span>
              </ShimmerButton>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Setup in 5 minutes
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                14-day free trial
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-6">
          <p className="text-sm text-slate-500">
            Join thousands of businesses already growing with our lead
            generation widgets
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
