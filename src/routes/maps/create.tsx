import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { Hand, MousePointer, Play, Settings } from "lucide-react";
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

function RouteComponent() {
  return (
    <div>
      <div className="flex w-full justify-center p-4">
        <section className="flex max-w-2xl justify-end gap-0.5 rounded-md bg-neutral-700 p-1">
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
    </div>
  );
}
