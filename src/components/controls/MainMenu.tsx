import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function MainMenu({ children }: { children?: React.ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex w-fit items-center rounded-md bg-neutral-700 p-1 hover:bg-neutral-500">
          <Button
            className="bg-transparent hover:bg-transparent"
            aria-label="Menu"
          >
            <Menu />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-4">
        {children || (
          <DropdownMenuItem>
            Exmaple Menu Item <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
