import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import OnThisPage from "@/components/sections/blog-table-content";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import Image from "next/image";
import remarkGfm from "remark-gfm";

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

export default async function Page({ params }) {
  const { slug } = await params;
  const filepath = `content/${slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm) // Enable GitHub Flavored Markdown (for tables, strikethrough, etc.)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 items-center justify-center bg-primary/20 w-full p-4 py-20">
        <h1 className="text-4xl font-bold mb-4 text-center max-w-3xl">
          {data.title}
        </h1>
        <p className="text-center max-w-3xl">{data.description}</p>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 mt-10">
        {/* Left: Table of Contents */}
        <aside className="hidden lg:block lg:w-1/5 sticky top-24 self-start">
          <OnThisPage htmlContent={htmlContent} />
        </aside>

        {/* Middle: Blog Content */}
        <main className="w-full lg:w-3/5">
          <Image
            src={data.image}
            alt={data.title}
            width={1000}
            height={1000}
            className="w-full max-w-3xl mx-auto rounded-lg object-contain h-auto mb-8"
            priority
          />
          <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="prose dark:prose-invert max-w-none"
          ></div>
        </main>

        {/* Right: Signup Form */}
        <aside className="w-full lg:w-1/5 mt-10 lg:mt-0 sticky top-24 self-start">
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2 text-primary text-center">
              Subscribe for Updates
            </h2>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Get the latest blog posts and widget tips delivered to your inbox.
            </p>
            <form className="w-full flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
