import {
  COLLAGE,
  DRAWINGS,
  ILLUSTRATION,
  OIL_PAINTINGS,
  SCREEN_PRINTS,
  WATERCOLOR_PAINTINGS,
} from "./images";

// Each gallery's pictures in the order its page shows them, keyed by the dashboard label
const GALLERIES: Record<string, string[]> = {
  "Watercolour Paintings": Object.values(WATERCOLOR_PAINTINGS) as string[],
  "Oil Paintings": Object.values(OIL_PAINTINGS) as string[],
  Drawings: Object.values(DRAWINGS) as string[],
  Collage: Object.values(COLLAGE) as string[],
  Illustration: Object.values(ILLUSTRATION) as string[],
  "Screen Prints": Object.values(SCREEN_PRINTS) as string[],
};

// How many pictures to fetch when someone is about to open a gallery
const ON_INTENT_COUNT = 8;

const requested = new Set<string>();

// Fetch a picture into the browser cache so it shows instantly later
const preload = (src: string, priority: "low" | "auto", onDone?: () => void) => {
  if (requested.has(src)) {
    onDone?.();
    return;
  }
  requested.add(src);
  const img = new Image();
  img.decoding = "async";
  img.setAttribute("fetchpriority", priority);
  if (onDone) img.onload = img.onerror = onDone;
  img.src = src;
};

// Don't spend someone's data on pictures they may never open
const onSlowOrMeteredConnection = () => {
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;
  return !!connection && (!!connection.saveData || /2g$/.test(connection.effectiveType ?? ""));
};

const whenIdle = (fn: () => void) =>
  "requestIdleCallback" in window ? window.requestIdleCallback(fn) : setTimeout(fn, 200);

let previewsStarted = false;

// While the dashboard is open, quietly fetch the first pictures of every gallery —
// the ones a gallery page waits for before it fades in. One at a time, low priority,
// so it never competes with what's on screen.
export const preloadGalleryPreviews = () => {
  if (previewsStarted || onSlowOrMeteredConnection()) return;
  previewsStarted = true;

  // A phone's first screen only shows about two pictures
  const perGallery = window.matchMedia("(max-width: 640px)").matches ? 2 : 3;
  const galleries = Object.values(GALLERIES);
  // First picture of every gallery, then the second of every gallery, and so on
  const queue: string[] = [];
  for (let i = 0; i < perGallery; i++) {
    for (const images of galleries) if (images[i]) queue.push(images[i]);
  }

  const next = () => {
    const src = queue.shift();
    if (src) preload(src, "low", () => whenIdle(next));
  };

  const start = () => whenIdle(next);
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
};

// Someone is pointing at or touching a gallery link: start fetching its pictures now,
// so they're on their way before the page has even changed
export const preloadGallery = (label: string) => {
  GALLERIES[label]?.slice(0, ON_INTENT_COUNT).forEach((src) => preload(src, "auto"));
};
