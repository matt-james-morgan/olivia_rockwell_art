import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function loadImages(glob: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(glob).map(([path, mod]) => {
      const filename = path.split("/").pop() || "";
      const cleanKey = filename.replace(".jpeg", "");
      return [cleanKey, mod];
    })
  );
}
