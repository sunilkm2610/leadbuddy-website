import fs from "fs";
import matter from "gray-matter";

export default function sitemap() {
  // let blogs = [];
  let widgets = [];

  try {
    // Check if content directory exists
    if (fs.existsSync("widget")) {
      const dirContent = fs.readdirSync("widget", "utf-8");

      // Filter for markdown files only
      const markdownFiles = dirContent.filter(
        (file) => file.endsWith(".md") || file.endsWith(".mdx")
      );

      widgets = markdownFiles
        .map((file) => {
          try {
            const fileContent = fs.readFileSync(`widget/${file}`, "utf-8");
            const { data } = matter(fileContent);

            // Only include if slug exists
            if (data.slug) {
              return {
                ...data,
                // Add lastModified from file stats if not in frontmatter
                lastModified:
                  data.lastModified || fs.statSync(`widget/${file}`).mtime,
              };
            }
            return null;
          } catch (error) {
            console.error(`Error reading file ${file}:`, error);
            return null;
          }
        })
        .filter(Boolean); // Remove null entries
    }
  } catch (error) {
    console.error("Error reading content directory:", error);
  }

  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      priority: 1,
      changeFrequency: "weekly",
    },
    ...widgets.map((widget) => ({
      url: `${baseUrl}/widgets/${widget.slug}`,
      lastModified: widget.lastModified || currentDate,
      priority: 1,
      changeFrequency: "monthly",
    })),
  ];
}
