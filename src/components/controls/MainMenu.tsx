import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type MainMenuProps = {
  children?: React.ReactNode;
};

/**
 * A dropdown menu component that uses Shadcn UI Dropdown Menu components.
 * If no children are provided an example DropdownMenuItem will be rendered.
 *
 * @param {MainMenuProps} props - The props for the MainMenu component.
 * @param {React.ReactNode} props.children - Child elements to render inside the menu. See examples.
 * @returns {JSX.Element}
 *
 * @example
 * // A MainMenu with a DropdownMenuItem child.
 * <MainMenu>
 *   <DropdownMenuItem>
 *      Create New Document <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
 *    </DropdownMenuItem>
 * </MainMenu>
 *
 * @example
 * // A MainMenu with no children.
 * <MainMenu />
 */
export default function MainMenu({ children }: MainMenuProps) {
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
