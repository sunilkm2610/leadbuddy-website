"use client";

import React from "react";
import { Meteors } from "@/components/magicui/meteors";
import { AnimatedGradientTextBadge } from "@/components/page-components/animated-badge";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Link from "next/link";

const ShimmerButton = ({ children, className = "", onClick }) => {
  return (
    <button
      className={`group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-[#34d399] to-[#3b82f6] rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-[#3b82f6]/25 ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#34d399] to-[#3b82f6] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 animate-shimmer"></div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

const WordRotate = ({ words, className = "" }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`inline-block duration-100 ${className}`}>
      <TypingAnimation className="sm:text-6xl text-4xl" duration={200}>
        {words[currentIndex]}
      </TypingAnimation>
    </span>
  );
};

const HeroSection = () => {
  const rotatingWords = ["Lead"];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Meteors number={15} />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="relative z-10 text-center max-w-6xl px-4">
        <AnimatedGradientTextBadge />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
          Free <WordRotate words={rotatingWords} className="text-blue-400" />{" "}
          Generation Widgets <br /> for Your Website
          <br />
          No Coding Required.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Convert every visitor into a lead with our powerful free widgets
          designed to help new businesses grow faster. Our free widgets are easy
          to use and can be integrated into your website in minutes.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
          <Link href={`${process.env.NEXT_PUBLIC_APP_URL}`}>
            <ShimmerButton
              onClick={() => {
                redirect;
              }}
            >
              Start for Free
            </ShimmerButton>
          </Link>
          {/* <button className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-slate-300 hover:text-white hover:border-slate-400 transition-all duration-300 hover:bg-slate-800/50">
            Watch Demo
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
