"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Megaphone,
  Square,
  Mail,
  RotateCcw,
  MessageSquare,
  Star,
  Cookie,
} from "lucide-react";

// ListItem component for shadcn navigation
function ListItem({ icon, title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="flex flex-row items-start gap-3 no-underline hover:bg-accent/50 rounded-lg p-3 transition-colors w-full"
        >
          <div>
            {icon && (
              <span className="flex-shrink-0 mt-1 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                {icon}
              </span>
            )}
          </div>
          <div>
            <div className="text-base font-semibold leading-tight text-foreground mb-0.5">
              {title}
            </div>
            <p className="text-muted-foreground text-sm leading-snug">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

const navigation = [
  { name: "Home", href: "#" },
  {
    name: "Widgets",
    href: "#widgets",
    dropdown: [
      {
        icon: <Megaphone className="w-6 h-6 text-background" />,
        name: "Announcement Bar",
        href: "#",
        description:
          "Highlight important updates, promotions, or news with a clean and eye-catching announcement bar.",
      },
      {
        icon: <Square className="w-6 h-6 text-background" />,
        name: "Exit Intent Popup",
        href: "#",
        description:
          "Engage visitors before they leave your site with targeted offers or messages to boost conversions.",
      },
      {
        icon: <Mail className="w-6 h-6 text-background" />,
        name: "Email Signup Form",
        href: "#",
        description:
          "Grow your email list with customizable signup forms that capture leads directly from your website.",
      },
      {
        icon: <RotateCcw className="w-6 h-6 text-background" />,
        name: "Offer Spinner",
        href: "#",
        description:
          "Gamify your offers with an interactive spin wheel to attract attention and increase engagement.",
      },
      {
        icon: <MessageSquare className="w-6 h-6 text-background" />,
        name: "Feedback Form",
        href: "#",
        description:
          "Collect valuable insights from your visitors with a simple and easy-to-use feedback form.",
      },
      {
        icon: <Star className="w-6 h-6 text-background" />,
        name: "Review Form",
        href: "#",
        description:
          "Build trust by allowing customers to share their reviews and ratings directly on your site.",
      },
      {
        icon: <Cookie className="w-6 h-6 text-background" />,
        name: "Cookie Consent",
        href: "#",
        description:
          "Stay GDPR compliant with a customizable cookie consent widget for transparency and trust.",
      },
    ],
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "How it works",
    href: "#how-it-works",
  },
  { name: "Why LeadBuddy", href: "#why-leadbuddy" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile menu using shadcn navigation
  const MobileMenu = () => (
    <div className="space-y-4 py-6">
      <NavigationMenu orientation="vertical" viewport={false}>
        <NavigationMenuList className="flex flex-col gap-2">
          {navigation.map((item) =>
            item.dropdown ? (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger className="w-full justify-between">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2">
                    {item.dropdown.map((subItem) => (
                      <ListItem
                        key={subItem.name}
                        icon={subItem.icon}
                        title={subItem.name}
                        href={subItem.href}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className="block text-foreground hover:text-primary transition-colors py-2 font-medium"
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
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
                <Image src="/logo.svg" alt="" width={40} height={40} />
              </div>
              <span className="text-xl font-bold text-foreground">
                LeadBuddy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation using shadcn NavigationMenu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) =>
                  item.dropdown ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.dropdown.map((subItem) => (
                            <ListItem
                              icon={subItem.icon}
                              key={subItem.name}
                              title={subItem.name}
                              href={subItem.href}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href={`${process.env.NEXT_PUBLIC_APP_URL}`}>
              <Button className="w-full">Start for Free</Button>
            </Link>
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
