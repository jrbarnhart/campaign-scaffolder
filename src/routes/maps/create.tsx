import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import {
  Hand,
  Menu,
  Minus,
  MousePointer,
  Play,
  Plus,
  Redo,
  Settings,
  Undo,
} from "lucide-react";
import type { HTMLAttributes } from "react";

export const Route = createFileRoute("/maps/create")({
  component: RouteComponent,
});

const ControlBarButton = ({
  ...props
}: HTMLAttributes<HTMLElement> & { toolTip?: string }) => {
  const { children, className, toolTip, ...rest } = props;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          {...rest}
          className={cn("bg-transparent hover:bg-white/20", className)}
        >
          {children}
        </Button>
      </TooltipTrigger>
      {toolTip && (
        <TooltipContent>
          <p>{toolTip}</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
};

const MainMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex w-fit items-center rounded-md bg-neutral-700 p-1 hover:bg-neutral-500">
          <Button className="bg-transparent hover:bg-transparent">
            <Menu />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-4">
        <DropdownMenuItem>
          New Map <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ZoomControls = () => {
  return (
    <div className="flex w-fit items-center gap-1 rounded-md bg-neutral-700 p-1">
      <ControlBarButton toolTip="Zoom In">
        <Plus />
      </ControlBarButton>
      <p className="text-white select-none">100%</p>
      <ControlBarButton toolTip="Zoom Out">
        <Minus />
      </ControlBarButton>
    </div>
  );
};

const UndoControls = () => {
  return (
    <div className="flex w-fit items-center gap-1 rounded-md bg-neutral-700 p-1">
      <ControlBarButton toolTip="Undo">
        <Undo />
      </ControlBarButton>
      <div
        aria-hidden="true"
        className="h-7 border-r border-l border-neutral-400"
      />
      <ControlBarButton toolTip="Redo">
        <Redo />
      </ControlBarButton>
    </div>
  );
};

function RouteComponent() {
  return (
    <div className="relative h-svh">
      <div className="flex w-full justify-center p-4">
        <section className="flex max-w-2xl justify-end gap-0.5 gap-1 rounded-md bg-neutral-700 p-1">
          <h1 className="sr-only">Map Generator Toolbar</h1>
          <ControlBarButton toolTip="Pan">
            <Hand />
          </ControlBarButton>
          <ControlBarButton toolTip="Select">
            <MousePointer />
          </ControlBarButton>
          <ControlBarButton toolTip="Settings">
            <Settings />
          </ControlBarButton>
          <ControlBarButton toolTip="Generate">
            <Play />
          </ControlBarButton>
        </section>
      </div>
      <div className="absolute bottom-4 left-4 md:top-4">
        <MainMenu />
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
