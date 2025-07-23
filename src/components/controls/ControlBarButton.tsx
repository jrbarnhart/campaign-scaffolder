import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";

export default function ControlBarButton({
  toolTip,
  children,
}: {
  toolTip?: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="bg-transparent hover:bg-white/20">{children}</Button>
      </TooltipTrigger>
      {toolTip && (
        <TooltipContent>
          <p>{toolTip}</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
}
