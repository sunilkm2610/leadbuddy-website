import BlogSection from "@/components/blog-section/blog-section";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const filepath = `content/${slug}.md`;

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
  const filepath = `content/${slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
  }
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data } = matter(fileContent);
  return (
    <div>
      <div className="flex flex-col gap-2 items-center justify-center bg-primary/20 w-full p-4 py-20">
        <h1 className="text-4xl font-bold mb-4 text-center max-w-3xl">
          {data.title}
        </h1>
        <p className="text-center max-w-3xl">{data.description}</p>
      </div>
      <BlogSection slug={slug} filepath={filepath} />
    </div>
  );
};

export default Page;
