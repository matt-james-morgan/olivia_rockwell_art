import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SECTIONS } from "../constants/Sections";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNav = (nav: string) => {
    setOpen(false);
    navigate(nav);
  };

  return (
    <div className="w-full flex justify-between items-center px-4 py-2 bg-red">
      <div
        className="text-3xl font-light cursor-pointer"
        onClick={() => handleNav("/")}
      >
        <h1>Olivia Rockwell</h1>
        <h1>Fine Art</h1>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div className="p-4 rounded-md cursor-pointer">
            <HamburgerIcon />
          </div>
        </SheetTrigger>
        <SheetContent side="right" className="bg-[#fdeaca]">
          <div className="flex flex-col gap-4 mt-16">
            {SECTIONS.map((section) => (
              <Button
                key={section.label}
                variant="ghost"
                className="justify-start text-lg"
                onClick={() => handleNav(section.label)}
              >
                <h2>{section.label}</h2>
              </Button>
            ))}
            <Button
              variant="ghost"
              className="justify-start text-lg"
              onClick={() => handleNav("About")}
            >
              <h2>About</h2>
            </Button>
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
