// "use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
  description: "Blogs",
};

const dirContent = fs.readdirSync("content", "utf-8");

const blogPosts = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

// const blogPosts = [
//   {
//     id: 1,
//     title: "Benefits of Adding a Countdown Timer To Your Website",
//     description:
//       "No urgency means no action. A Countdown Timer Widget changes that. In this post: reasons why and how to add one.",
//     image: "/dummy/blog-1.png",
//     tag: "SEASONS",
//     readTime: "4 MIN READ",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Why You Need a Business Hours Widget on Your Website",
//     image: "/dummy/blog-2.png",
//     readTime: "5 MIN READ",
//   },
//   {
//     id: 3,
//     title: "Why You Need a Pricing Table Widget on Your Website",
//     image: "/dummy/blog-3.png",
//     readTime: "7 MIN READ",
//   },
//   {
//     id: 4,
//     title: "Benefits of Adding an Email Signup Form to Your Website",
//     image: "/dummy/blog-4.png",
//     readTime: "7 MIN READ",
//   },
//   {
//     id: 5,
//     title: "What Does a Table of Contents Widget Do for Your Website?",
//     image: "/dummy/blog-5.png",
//     readTime: "7 MIN READ",
//   },
//   {
//     id: 6,
//     title: "Benefits of Adding a FAQ Widget to Your Website",
//     image: "/dummy/blog-6.png",
//     readTime: "6 MIN READ",
//   },
//   {
//     id: 7,
//     title: "Why You Need a Cancellation Form Widget on Your Website",
//     image: "/dummy/blog-7.png",
//     readTime: "5 MIN READ",
//   },
// ];

/**
 * Blog component that renders a list of blog posts.
 * Each blog post includes an image, title, description, author, date, and a link to the full post.
 *
 * @returns {JSX.Element} The rendered blog component.
 */

const BlogsPage = () => {
  const featured = blogPosts.find((post) => !post.featured);
  const others = blogPosts.filter((post) => !post.featured);

  return (
    <div className="w-full min-h-screen pb-10">
      {/* Header */}
      <div className="w-full bg-accent/50 py-10 px-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Blog
        </h1>
        <p className="max-w-2xl text-muted-foreground text-center text-base md:text-lg">
          Find out what’s up in the world of user experience. Get the latest
          tips, insights, and strategies for creating highly effective website
          widgets.
        </p>
      </div>

      {/* Blog Content */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-col gap-8">
        {/* Featured Post */}
        {featured && (
          <div className="flex flex-col md:flex-row gap-6 bg-card rounded-xl shadow-sm p-4 md:p-6">
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  // fallback dummy image
                  //   onError={(e) => {
                  //     if (e.target && e.target.src) {
                  //       e.target.src =
                  //         "https://placehold.co/600x400?text=Blog+Image";
                  //     }
                  //   }}
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center gap-2">
              <div className="flex items-center gap-2 mb-2">
                {featured.tag && (
                  <Badge
                    variant="secondary"
                    className="uppercase tracking-wide"
                  >
                    {featured.tag}
                  </Badge>
                )}
                <span className="text-xs text-muted-foreground">
                  {featured.readTime}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                {featured.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {featured.description}
              </p>
              <Button variant="outline" className="w-fit group">
                <Link
                  href={`/blogs/${featured.slug}`}
                  className="w-fit flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        )}
        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((post) => (
            <div
              key={post?.id}
              className="flex flex-col bg-card rounded-xl shadow-sm overflow-hidden"
            >
              <div className="relative w-full h-40 bg-muted">
                <Image
                  src={post?.image}
                  alt={post?.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  //   onError={(e) => {
                  //     if (e.target && e.target.src) {
                  //       e.target.src =
                  //         "https://placehold.co/600x400?text=Blog+Image";
                  //     }
                  //   }}
                />
              </div>
              <div className="flex flex-col flex-1 p-4 gap-2">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {post.title}
                </h3>
                <span className="text-xs text-muted-foreground mb-2">
                  {post.readTime}
                </span>
                <Button variant="ghost" className="w-fit group mt-auto">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="w-fit flex items-center gap-2"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
