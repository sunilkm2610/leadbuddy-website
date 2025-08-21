"use client";
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  Suspense,
} from "react";
import parse from "html-react-parser";

// Simple spinner component
const Spinner = () => (
  <div className="flex items-center justify-center py-8">
    <svg
      className="animate-spin h-6 w-6 text-primary"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
    <span className="ml-2 text-primary">Loading Table of Contents...</span>
  </div>
);

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [loading, setLoading] = useState(true);
  const observerRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const h2Elements = tempDiv.querySelectorAll("h2");
    const h2Data = Array.from(h2Elements).map((h2) => ({
      text: h2.textContent,
      id: h2.id,
    }));
    setHeadings(h2Data);
    setLoading(false);
  }, [htmlContent]);

  // Helper to scroll to heading and set activeId
  const handleHeadingClick = useCallback(
    (id) => (e) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        // Scroll with offset for sticky header (120px)
        const yOffset = -120;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveId(id);
        // Update hash in URL without jumping
        window.history.replaceState(null, "", `#${id}`);
      }
    },
    []
  );

  useEffect(() => {
    if (!headings.length) return;

    // Find all h2 elements in the actual DOM
    const headingElements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean);

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Intersection Observer callback
    const handleIntersect = (entries) => {
      // Find the first heading that is intersecting (visible)
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      } else {
        // If none are visible, find the one closest above the viewport
        const above = entries
          .filter((entry) => entry.boundingClientRect.top < 120) // 120px for sticky header offset
          .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top);
        if (above.length > 0) {
          setActiveId(above[0].target.id);
        } else {
          // If nothing is visible and nothing is above, set to first heading
          if (headingElements.length > 0) {
            setActiveId(headingElements[0].id);
          }
        }
      }
    };

    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-120px 0px 0px 0px", // offset for sticky header
      threshold: [0, 0.1, 0.5, 1],
    });

    headingElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    observerRef.current = observer;

    // Set the first heading as active if none is set (for initial load)
    if (!activeId && headingElements.length > 0) {
      setActiveId(headingElements[0].id);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headings]);

  return (
    <div className="md:right-48 lg:right-1/4 hidden lg:block">
      <h2 className="text-md font-bold my-2">Table of Contents</h2>
      {loading ? (
        <Spinner />
      ) : (
        <Suspense fallback={<Spinner />}>
          <ul className="text-sm space-y-2 relative">
            {/* Vertical line */}
            <div
              className="absolute left-3 top-0 bottom-0 w-0.5 bg-border z-0"
              style={{
                marginLeft: "2px",
                marginTop: "28px",
                marginBottom: "8px",
                height: `calc(100% - 36px)`,
              }}
            />
            {headings.map((heading, index) => (
              <li key={index} className="flex items-center relative z-10">
                {/* Vertical line with dot */}
                <div className="flex flex-col items-center min-w-[32px] mr-3 relative">
                  {/* Dot */}
                  <div
                    className={
                      "w-3 h-3 rounded-full border-2 z-10 " +
                      (heading.id === activeId
                        ? "bg-primary border-primary"
                        : "bg-background border-border")
                    }
                    style={{
                      transition: "background 0.2s, border 0.2s",
                    }}
                  />
                </div>
                {/* Text */}
                <a
                  href={`#${heading.id}`}
                  onClick={handleHeadingClick(heading.id)}
                  className={
                    heading.id === activeId
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }
                  style={{
                    transition: "color 0.2s",
                    cursor: "pointer",
                  }}
                >
                  {parse(heading.text)}
                </a>
              </li>
            ))}
          </ul>
        </Suspense>
      )}
    </div>
  );
};

export default OnThisPage;
