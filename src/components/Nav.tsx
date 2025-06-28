import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react"; // <-- Hamburger icon
import { SECTIONS } from "../constants/Sections";

const Nav = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2 bg-red">
      <h1 className="text-xl font-bold">Olivia Rockwell Art</h1>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none focus-visible:ring-0">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {SECTIONS.map((section) => {
            return <DropdownMenuItem>{section.label}</DropdownMenuItem>;
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Nav;
