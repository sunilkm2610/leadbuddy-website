import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WidgetHeroSection = ({
  title = "",
  description = "",
  image = "",
  buttonText = "",
  buttonLink = "",
}) => {
  return (
    <div className="bg-primary/20 w-full py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-4 max-w-7xl mx-auto px-4 justify-between items-center">
        <div className="space-y-4 w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 max-w-3xl leading-tight">
            {title}
          </h1>
          <p className="max-w-3xl text-base sm:text-lg">{description}</p>
          <Button className="w-full sm:w-fit group mt-auto p-4 sm:p-6 text-base sm:text-lg font-bold">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
        <div className="relative bg-muted rounded-lg overflow-hidden mb-6 md:mb-0 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="w-auto h-auto max-w-full max-h-72 rounded-lg"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default WidgetHeroSection;
