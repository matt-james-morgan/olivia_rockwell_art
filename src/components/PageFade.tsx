import { useEffect, useRef, useState, type ReactNode } from "react";

// Longest we'll hold a page back waiting for its pictures on a slow connection
const MAX_WAIT_MS = 2500;
// Only the first few pictures matter — the rest fade in on their own as you scroll
const IMAGES_TO_WAIT_FOR = 3;

// Keeps each page invisible until its first pictures have loaded, then fades the
// whole page in at once, so text and artwork arrive together.
// A plain CSS transition is used on purpose: framer-motion's opacity animation
// blinks for one frame when it finishes.
const PageFade = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const show = () => {
      if (!cancelled) setReady(true);
    };
    const firstImages = [...(ref.current?.querySelectorAll("img") ?? [])]
      .filter((img) => img.getBoundingClientRect().top < window.innerHeight)
      .slice(0, IMAGES_TO_WAIT_FOR);
    const timer = setTimeout(show, MAX_WAIT_MS);
    Promise.all(firstImages.map((img) => img.decode().catch(() => {}))).then(show);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-[1400ms] ease-out ${ready ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default PageFade;
