import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { SECTIONS } from "../constants/Sections";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const handleNav = (nav) => {
    navigate(nav);
  };
  return (
    <div className="w-full flex justify-between items-center px-4 py-2 bg-red">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => handleNav("/")}
      >
        Olivia Rockwell Art
      </h1>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none focus-visible:ring-0">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {SECTIONS.map((section) => {
            return (
              <DropdownMenuItem onClick={() => handleNav(section.label)}>
                {section.label}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Nav;
