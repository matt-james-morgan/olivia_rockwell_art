import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// An <img> that fades in once it has loaded, instead of popping in line by line.
const FadeImage = ({ className, onLoad, onError, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      {...props}
      // Images already in the browser cache can finish before React attaches onLoad
      ref={(el) => {
        if (el?.complete && el.naturalWidth > 0) setLoaded(true);
      }}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      onError={(e) => {
        // Show the alt text rather than leaving an invisible gap
        setLoaded(true);
        onError?.(e);
      }}
      className={cn("transition-opacity duration-[1200ms] ease-out", loaded ? "opacity-100" : "opacity-0", className)}
    />
  );
};

export default FadeImage;
