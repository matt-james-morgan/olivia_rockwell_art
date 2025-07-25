import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
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
            <Menu className="h-8 w-8 text-[#415d35]" />
          </div>
        </SheetTrigger>
        <SheetContent side="right" className="bg-inherit">
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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Nav;
