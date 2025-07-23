import ControlBar from "@/components/controls/ControlBar";
import ControlBarButton from "@/components/controls/ControlBarButton";
import MainMenu from "@/components/controls/MainMenu";
import UndoControls from "@/components/controls/UndoControls";
import ZoomControls from "@/components/controls/ZoomControls";
import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

import { createFileRoute } from "@tanstack/react-router";
import { Hand, MousePointer, Play, Settings } from "lucide-react";

export const Route = createFileRoute("/maps/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative h-svh">
      <div className="flex w-full justify-center p-4">
        <ControlBar screenReaderHeader="Map Control Bar">
          <ControlBarButton toolTip="Pan" aria-label="Pan">
            <Hand />
          </ControlBarButton>
          <ControlBarButton toolTip="Select" aria-label="Select">
            <MousePointer />
          </ControlBarButton>
          <ControlBarButton toolTip="Settings" aria-label="Settings">
            <Settings />
          </ControlBarButton>
          <ControlBarButton toolTip="Generate" aria-label="Generate">
            <Play />
          </ControlBarButton>
        </ControlBar>
      </div>
      <div className="absolute bottom-4 left-4 md:top-4">
        <MainMenu>
          <DropdownMenuItem>
            Create New Map <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
        </MainMenu>
      </div>
      <div className="absolute bottom-4 left-20 md:left-4">
        <ZoomControls />
      </div>
      <div className="absolute right-4 bottom-4">
        <UndoControls />
      </div>
    </div>
  );
}
