import BlogSection from "@/components/blog-section/blog-section";
import WidgetHeroSection from "@/components/sections/widget-hero-section";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const filepath = `widget/${slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
  }
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
  };
};

const Page = async ({ params }) => {
  const { slug } = await params;
  const filepath = `widget/${slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
  }
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data } = matter(fileContent);
  return (
    <div>
      <WidgetHeroSection
        title={data.title}
        description={data.description}
        image={data.image}
        buttonText={data.buttonText}
        buttonLink={data.buttonLink}
      />
      <BlogSection slug={slug} filepath={filepath} showImage={false} />
    </div>
  );
};

export default Page;
