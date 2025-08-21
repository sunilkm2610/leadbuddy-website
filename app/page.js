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
      <HeroSection />
      <WidgetFeatures />
      <FlowSectionV2 />
      <WhyChooseUsSection />
      {/* <PricingSection /> */}
      <FAQSection />
      {/* <CTASection /> */}
      <div className="wbnz-email-signup-form" data-webynize-id="2983"></div>
      <Script
        defer
        src="https://widgets.webynize.com/email-signup-form.js"
        strategy="afterInteractive"
      />

      {/* <Script
        src={`${process.env.NEXT_PUBLIC_WIDGET_WEBSITE}/offer-spinner/offer-spinner.js`}
        strategy="afterInteractive"
        data-subscription-id="f9458b5f-42af-4ffa-b62b-8d408a8305ed"
        data-title="Special Offer Wheel"
        data-offers="10% Off,Free Shipping,20% Off,$5 Coupon,Free Gift,15% Off"
        data-result-for-offers="Use code SPIN1 for 10% Off,Use code SHIP for Free Shipping,Use code 20OFF for 20% Off,Use code $5 for $5 Coupon,Use code FREE for Free Gift,Use code 15OFF for 15% Off"
        data-spin-button-text="🎯 Spin Now!"
        data-result-text="Congratulations! You got:"
        data-spinner-size="240"
        data-spin-duration="2500"
        data-auto-close-duration="3000"
        data-colors="#fbbf24,#60a5fa,#34d399,#f87171,#a78bfa,#f472b6,#facc15,#38bdf8"
        autoCloseAfterResult="false"
      /> */}
    </div>
  );
};

export default Page;
