import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { Hand, MousePointer, Play, Settings } from "lucide-react";
import type { HTMLAttributes } from "react";

export const Route = createFileRoute("/maps/create")({
  component: RouteComponent,
});

const ControlBarButton = ({ ...props }: HTMLAttributes<HTMLElement>) => {
  const { children, className, ...rest } = props;
  return (
    <Button
      {...rest}
      className={cn("bg-transparent hover:bg-white/20", className)}
    >
      {children}
    </Button>
  );
};

function RouteComponent() {
  return (
    <div>
      <div className="flex w-full justify-center p-4">
        <section className="flex max-w-2xl justify-end gap-0.5 rounded-md bg-neutral-700 p-1">
          <h1 className="sr-only">Map Generator Toolbar</h1>
          <ControlBarButton>
            <Hand />
          </ControlBarButton>
          <ControlBarButton>
            <MousePointer />
          </ControlBarButton>
          <ControlBarButton>
            <Settings />
          </ControlBarButton>
          <ControlBarButton>
            <Play />
          </ControlBarButton>
        </section>
      </div>
    </div>
  );
}
