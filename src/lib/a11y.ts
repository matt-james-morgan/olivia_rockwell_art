import type { KeyboardEvent } from "react";

/**
 * Lets a non-<button> element marked role="button" respond to Enter/Space like a real button.
 * (Real <button>s pick up the global button styles in index.css, so these stay as divs.)
 */
export const activateOnKey = (e: KeyboardEvent<HTMLElement>) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    e.currentTarget.click();
  }
};
