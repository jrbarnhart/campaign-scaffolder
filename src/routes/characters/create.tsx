import MainMenu from "@/components/controls/MainMenu";
import UndoControls from "@/components/controls/UndoControls";
import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/characters/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative h-svh">
      <div className="absolute right-4 bottom-4">
        <UndoControls />
      </div>
      <div className="absolute bottom-4 left-4 md:top-4">
        <MainMenu>
          <DropdownMenuItem>
            Create New Character <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
        </MainMenu>
      </div>
    </div>
  );
}
