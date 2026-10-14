import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SECTIONS } from "../constants/Sections";
import { useNavigate } from "react-router-dom";
import { activateOnKey } from "@/lib/a11y";

const Nav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNav = (nav: string) => {
    setOpen(false);
    navigate(nav);
  };

  return (
    <div className="w-full flex justify-between items-center px-0 sm:px-4 py-2 bg-red">
      <div
        role="link"
        tabIndex={0}
        onKeyDown={activateOnKey}
        className="text-3xl font-light cursor-pointer"
        onClick={() => handleNav("/")}
      >
        <h1>
          <span className="block">Olivia Rockwell</span>
          <span className="block">Fine Art</span>
        </h1>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={activateOnKey}
            aria-label="Open menu"
            className="-mr-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-md cursor-pointer"
          >
            <HamburgerIcon />
          </div>
        </SheetTrigger>
        <SheetContent side="right" className="bg-[#fdeaca]">
          <div className="flex flex-col gap-1 mt-16 bg-[#fdeaca]">
            {SECTIONS.map((section) => (
              <div
                key={section.label}
                role="link"
                tabIndex={0}
                onKeyDown={activateOnKey}
                className="justify-start text-xl cursor-pointer hover:opacity-70 transition-opacity py-3 px-4 text-black"
                onClick={() => handleNav(section.label)}
              >
                <h2>{section.label}</h2>
              </div>
            ))}
            <div
              role="link"
                tabIndex={0}
                onKeyDown={activateOnKey}
                className="justify-start text-xl cursor-pointer hover:opacity-70 transition-opacity py-3 px-4 text-black"
              onClick={() => handleNav("/about")}
            >
              <h2>About</h2>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Nav;

const HamburgerIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
