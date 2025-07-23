import { Minus, Plus } from "lucide-react";
import ControlBarButton from "./ControlBarButton";

export default function ZoomControls() {
  return (
    <div className="flex w-fit items-center gap-1 rounded-md bg-neutral-700 p-1">
      <ControlBarButton toolTip="Zoom In" aria-label="Zoom In">
        <Plus />
      </ControlBarButton>
      <p
        className="text-white select-none"
        aria-label="Current Zoom:"
        aria-live="polite"
      >
        100%
      </p>
      <ControlBarButton toolTip="Zoom Out" aria-label="Zoom Out">
        <Minus />
      </ControlBarButton>
    </div>
  );
}
