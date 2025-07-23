import { Redo, Undo } from "lucide-react";
import ControlBarButton from "./ControlBarButton";

export default function UndoControls() {
  return (
    <div className="flex w-fit items-center gap-1 rounded-md bg-neutral-700 p-1">
      <ControlBarButton toolTip="Undo" aria-label="Undo">
        <Undo />
      </ControlBarButton>
      <div
        aria-hidden="true"
        className="h-7 border-r border-l border-neutral-400"
      />
      <ControlBarButton toolTip="Redo" aria-label="Redo">
        <Redo />
      </ControlBarButton>
    </div>
  );
}
