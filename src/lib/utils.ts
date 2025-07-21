import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Module = { default: string } | string;

export function loadImages(
  glob: Record<string, Module>
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(glob).map(([path, mod]) => {
      const filename = path.split("/").pop() || "";
      const cleanKey = filename.replace(/\.(jpe?g|png|svg)$/i, "");
      const url = typeof mod === "string" ? mod : mod.default;
      return [cleanKey, url];
    })
  );
}
