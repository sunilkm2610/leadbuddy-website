import CTASection from "@/components/sections/CTA-section";
import FAQSection from "@/components/sections/faq-section";
import { FlowSectionV2 } from "@/components/sections/flow-section";
import { SiteFooter } from "@/components/sections/footer-section";
import HeroSection from "@/components/sections/hero-section";
import PricingSection from "@/components/sections/price-section";
import WhyChooseUsSection from "@/components/sections/why-section";
import WidgetFeatures from "@/components/sections/widgets";
import Navbar from "@/components/sections/navbar";
import React from "react";
import Script from "next/script";

const Page = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <WidgetFeatures />
      <FlowSectionV2 />
      <WhyChooseUsSection />
      {/* <PricingSection /> */}
      <FAQSection />
      {/* <CTASection /> */}
      <SiteFooter />
      <Script
        src={`${process.env.NEXT_PUBLIC_WIDGET_WEBSITE}/exit-popup/exit-popup.js`}
        strategy="afterInteractive"
        data-subscription-id="f9458b5f-42af-4ffa-b62b-8d408a8305ed"
        data-title="Wait! Before you go..."
        data-description="If you're not ready to start now, subscribe to get free widget updates, tools, and tips to help you generate more leads."
        data-placeholder="Your email address"
        data-button-text="Get Updates"
        data-bg-color="#1e1e1e"
        data-text-color="#ffffff"
        data-input-bg-color="#2c2c2c"
        data-input-text-color="#ffffff"
        data-button-bg-color="#3b82f6"
        data-button-text-color="#ffffff"
        data-border-radius="10px"
        data-local-storage-key="exit_popup_shown"
        data-success-message="Thanks! You'll be the first to know."
        data-error-message="Please enter a valid email address."
        data-max-width="380px"
        data-min-width="280px"
        data-max-height="auto"
        data-min-height="auto"
        data-show-once="true"
      />
    </div>
  );
};

export default Page;
