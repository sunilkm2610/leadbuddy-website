"use client";

import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { RetroGrid } from "../magicui/retro-grid";
import Image from "next/image";

export function SiteFooter({ className }) {
  return (
    <div className="relative py-10">
      {/* <WarpBackground> */}
      {/* <RetroGrid angle={0} /> */}
      <footer
        className={cn(
          "relative z-10 flex flex-col items-center justify-center gap-4 px-6 py-10 text-center text-muted-foreground",
          className
        )}
      >
        <div className="flex items-center gap-2 text-2xl font-bold text-foreground">
          <Image src="/logo.svg" alt="LeadBuddy" width={40} height={40} />
          LeadBuddy
        </div>

        <div className="text-sm">
          © {new Date().getFullYear()} LeadBuddy. All rights reserved.
        </div>

        {/* <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <TwitterIcon className="size-5" />
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon className="size-5" />
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="size-5" />
          </a>
        </div> */}
      </footer>
    </div>
  );
}
