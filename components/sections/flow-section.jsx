"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import {
  CalculatorIcon,
  BellIcon,
  UserIcon,
  ZapIcon,
  ClipboardListIcon,
  MailIcon,
  BotIcon,
  MessageSquareIcon,
} from "lucide-react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";

// Circle component
const Circle = forwardRef(({ className, children, name }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-24 items-center rounded-md justify-center bg-card border-2 border-border p-2 shadow-[0_0_20px_-10px_rgba(0,0,0,0.7)]",
        className
      )}
    >
      <div className="flex flex-col items-center justify-center text-center space-y-1">
        {children}
        <span className="text-[10px]">{name}</span>
      </div>
    </div>
  );
});
Circle.displayName = "Circle";

export function FlowSectionV2({ className }) {
  const containerRef = useRef(null);
  const chatbotRef = useRef(null);
  const popupRef = useRef(null);
  const toolRef = useRef(null);
  const announcementRef = useRef(null);
  const formRef = useRef(null);
  const freeToolRef = useRef(null);

  const leadBuddyRef = useRef(null);

  const leadsRef = useRef(null);

  return (
    <div
      className="min-h-screen flex flex-col items-center py-20"
      id="how-it-works"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
        How LeadBuddy <AnimatedGradientText>Works?</AnimatedGradientText>
      </h2>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto text-center">
        LeadBuddy tools help you generate more leads with widgets that integrate
        into any website without any coding requirement.
      </p>
      <div
        ref={containerRef}
        className={cn(
          "relative flex h-[620px] w-full items-center justify-center overflow-hidden px-10 mt-20",
          className
        )}
      >
        <div className="flex size-full max-w-4xl flex-row items-stretch justify-between gap-12">
          <div className="flex flex-col justify-center gap-3">
            <Circle ref={chatbotRef} name={"Announcement Bar"}>
              <BellIcon className="size-6" />
            </Circle>
            <Circle ref={popupRef} name={"Waitlist Form"}>
              <ClipboardListIcon className="size-6" />
            </Circle>
            <Circle ref={toolRef} name={"Newsletter Form"}>
              <MailIcon className="size-6" />
            </Circle>
            <Circle ref={announcementRef} name={"AI Chatbot"}>
              <BotIcon className="size-6" />
            </Circle>
            <Circle ref={formRef} name={"Feedback Form"}>
              <MessageSquareIcon className="size-6" />
            </Circle>
            <Circle ref={freeToolRef} name={"Free Tool"}>
              <CalculatorIcon className="size-6" />
            </Circle>
          </div>

          <div className="flex flex-col justify-center">
            <Circle
              ref={leadBuddyRef}
              className="size-20 bg-gradient-to-br from-purple-600 to-violet-800 text-white"
            >
              <ZapIcon className="size-8" />
            </Circle>
            <div className="text-center mt-2 font-semibold text-sm text-muted-foreground">
              LeadBuddy
            </div>
          </div>

          {/* Right: More Leads */}
          <div className="flex flex-col justify-center">
            <Circle ref={leadsRef} className="size-16 bg-green-500 text-white">
              <UserIcon className="size-7" />
            </Circle>
            <div className="text-center mt-2 font-semibold text-sm text-muted-foreground">
              More Leads
            </div>
          </div>
        </div>

        {/* Beams: Widgets to LeadBuddy */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={chatbotRef}
          toRef={leadBuddyRef}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={popupRef}
          toRef={leadBuddyRef}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={toolRef}
          toRef={leadBuddyRef}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={announcementRef}
          toRef={leadBuddyRef}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={formRef}
          toRef={leadBuddyRef}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={freeToolRef}
          toRef={leadBuddyRef}
        />

        {/* Beam: LeadBuddy to More Leads */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={leadBuddyRef}
          toRef={leadsRef}
        />
      </div>
    </div>
  );
}
