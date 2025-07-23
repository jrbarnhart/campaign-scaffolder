import type { HTMLAttributes } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function ControlBarButton({
  ...props
}: HTMLAttributes<HTMLButtonElement> & { toolTip?: string }) {
  const { children, className, toolTip, ...rest } = props;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          {...rest}
          className={cn(className, "bg-transparent hover:bg-white/20")}
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
}
