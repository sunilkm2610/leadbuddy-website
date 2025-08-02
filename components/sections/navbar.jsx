"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Zap,
  Users,
  Settings,
  HelpCircle,
  User,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigation = [
    { name: "Home", href: "#" },
    {
      name: "Widgets",
      href: "#widgets",
      // dropdown: [
      //   {
      //     name: "Lead Generation",
      //     href: "#",
      //     description: "Convert visitors into leads",
      //   },
      //   {
      //     name: "Email Marketing",
      //     href: "#",
      //     description: "Automated email campaigns",
      //   },
      //   { name: "Analytics", href: "#", description: "Track your performance" },
      //   { name: "Integrations", href: "#", description: "Connect your tools" },
      // ],
    },
    {
      name: "How it works",
      href: "#how-it-works",
      // dropdown: [
      //   { name: "AI Chatbot", href: "#", description: "24/7 customer support" },
      //   {
      //     name: "Form Builder",
      //     href: "#",
      //     description: "Create beautiful forms",
      //   },
      //   {
      //     name: "Landing Pages",
      //     href: "#",
      //     description: "High-converting pages",
      //   },
      //   { name: "A/B Testing", href: "#", description: "Optimize conversions" },
      // ],
    },
    { name: "Why LeadBuddy", href: "#why-leadbuddy" },
    { name: "FAQ", href: "#faq" },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const MobileMenu = () => (
    <div className="space-y-4 py-6">
      {navigation.map((item, index) => (
        <div key={item.name}>
          {item.dropdown ? (
            <div>
              <button
                onClick={() => toggleDropdown(index)}
                className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                <span className="font-medium">{item.name}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === index && (
                <div className="pl-4 space-y-2 mt-2">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="font-medium">{subItem.name}</div>
                      <div className="text-sm">{subItem.description}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              href={item.href}
              className="block text-foreground hover:text-primary transition-colors py-2 font-medium"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}

      <div className="border-t border-border pt-4 space-y-3">
        <Button
          className="w-full"
          onClick={() => {
            window.dispatchEvent(new Event("join-the-waitlist"));
          }}
        >
          Join Waitlist
        </Button>
      </div>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="animate-bounce">
                <Image src="/logo.svg" alt="LeadBuddy" width={40} height={40} />
              </div>
              <span className="text-xl font-bold text-foreground">
                LeadBuddy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div>
                      <button className="flex items-center text-foreground hover:text-primary transition-colors font-medium">
                        {item.name}
                        <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
                      </button>

                      {/* Dropdown Menu */}
                      <div className="absolute left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="p-4 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block p-3 rounded-md hover:bg-muted transition-colors"
                            >
                              <div className="font-medium text-foreground">
                                {subItem.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {subItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="w-full"
              onClick={() => {
                window.dispatchEvent(new Event("join-the-waitlist"));
              }}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] px-5"
              >
                <div className="flex items-center justify-between mb-6 mt-5">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-foreground">
                      LeadBuddy
                    </span>
                  </Link>
                </div>
                <MobileMenu />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
