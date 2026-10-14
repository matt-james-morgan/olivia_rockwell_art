import { useEffect } from "react";
import { SECTIONS } from "../constants/Sections";
import { useNavigate } from "react-router-dom";
import { preloadGallery, preloadGalleryPreviews } from "@/lib/preload";
import { activateOnKey } from "@/lib/a11y";
import FadeImage from "./FadeImage";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleNav = (nav: string) => {
    navigate(nav);
  };

  // Fetch each gallery's first pictures in the background so opening one is quick
  useEffect(preloadGalleryPreviews, []);

  return (
    // Phones: one full-width column. Larger screens: the original wrapped 500×300 tiles.
    <div className="grid grid-cols-1 gap-10 py-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-0 sm:py-0">
      {SECTIONS.map((section) => {
        return (
          <div
            key={section.label}
            role="link"
            tabIndex={0}
            onKeyDown={activateOnKey}
            className="min-w-0 cursor-pointer sm:p-8"
            onPointerEnter={() => preloadGallery(section.label)}
            onPointerDown={() => preloadGallery(section.label)}
            onFocus={() => preloadGallery(section.label)}
            onClick={() => {
              handleNav(section.label);
            }}
          >
            {/* Soft placeholder holds the tile's shape while the image fades in */}
            <div className="bg-[#f3dcb4]">
              <FadeImage
                className="block w-full aspect-[5/3] object-cover sm:w-125 sm:h-75 sm:aspect-auto"
                src={section.image as string}
                alt={section.label}
              />
            </div>
            <h2 className="pt-4 sm:pl-8">{section.label}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Dashboard;
