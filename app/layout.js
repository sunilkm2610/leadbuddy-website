import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/sections/footer-section";
import Navbar from "@/components/sections/navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LeadBuddy",
  description: "Generate Leads Like a Pro with AI-powered widgets",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth scroll-p-20"
    >
      <link rel="icon" href="/logo.svg" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          // disableTransitionOnChange
        >
          <Navbar />
          {children}
          <SiteFooter />
          <Script
            src={`${process.env.NEXT_PUBLIC_WIDGET_WEBSITE}/announcement-bar/announcement-bar.js`}
            strategy="afterInteractive"
            data-subscription-id="f9458b5f-42af-4ffa-b62b-8d408a8305ed"
            data-text="✨ Free to use — Create your own widget today!"
            data-button-text="Get Started"
            data-button-link={`${process.env.NEXT_PUBLIC_APP_URL}`}
            data-bg-color="#00C951"
            data-text-color="#ffffff"
            data-button-color="#ffffff"
            data-button-text-color="#00C951"
            data-padding="12px"
            data-text-align="center"
            data-container-z-index="9999"
            data-container-position="relative"
            data-width="100%"
            data-button-padding="6px 12px"
            data-button-margin-left="12px"
            data-button-border-radius="6px"
          />
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
        </ThemeProvider>
      </body>
    </html>
  );
}
