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
import Script from "next/script";

export default async function BlogSection({
  slug,
  filepath,
  showImage = true,
}) {
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
      <div className="w-full flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 mt-10">
        <aside className="hidden lg:block lg:w-1/5 sticky top-24 self-start">
          <OnThisPage htmlContent={htmlContent} />
        </aside>

        <main className="w-full lg:w-3/5">
          {showImage && (
            <Image
              src={data.image}
              alt={data.title}
              width={1000}
              height={1000}
              className="w-full max-w-3xl mx-auto rounded-lg object-contain h-auto mb-8"
              priority
            />
          )}
          <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="prose dark:prose-invert max-w-none"
          ></div>
        </main>

        {/* <aside className="relative w-full lg:w-1/5 mt-10 lg:mt-0 sticky top-24 self-start">
          <Script
            src={`http://localhost:4173/popup/popup.js`}
            strategy="afterInteractive"
            data-subscription-id="f9458b5f-42af-4ffa-b62b-8d408a8305ed"
            data-id="subscribe-to-our-newsletter"
            data-title="Subscribe to our Newsletter!"
            data-description="Get the latest updates and exclusive offers delivered to your inbox."
            data-placeholder="Enter your email address"
            data-button-text="Subscribe Now"
            data-bg-color="#ffffff"
            data-text-color="#333333"
            data-input-bg-color="#f8f9fa"
            data-input-text-color="#333333"
            data-button-bg-color="#007bff"
            data-button-text-color="#ffffff"
            data-border-radius="8px"
            data-local-storage-key="newsletter_popup_shown"
            data-success-message="Thank you for subscribing!"
            data-error-message="Something went wrong. Please try again."
            style={{
              position: "absolute",
              top: "100px",
              right: "100px",
              zIndex: 9999,
            }}
          />
        </aside> */}
      </div>
    </div>
  );
}
