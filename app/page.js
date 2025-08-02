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
        src={`${process.env.NEXT_PUBLIC_WIDGET_WEBSITE}/popup/popup.js`}
        strategy="afterInteractive"
        data-id="join-the-waitlist"
        data-title="Join the Waitlist"
        data-description="Be the first to know when we launch. Get early access and exclusive perks!"
        data-placeholder="Enter your email for early access"
        data-button-text="Join Waitlist"
        data-bg-color="#1a1a1a"
        data-text-color="#ffffff"
        data-input-bg-color="#2d2d2d"
        data-input-text-color="#ffffff"
        data-button-bg-color="#ff6b35"
        data-button-text-color="#ffffff"
        data-border-radius="12px"
        data-local-storage-key="waitlist_popup_shown"
        data-success-message="You're on the list! We'll notify you soon."
        data-error-message="Failed to join waitlist. Please try again."
      />
    </div>
  );
};

export default Page;
